import { posts } from './posts.js';


let lang = "en";
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith("vi")) lang = "vi";

const postList = document.getElementById("posts");
const postDetail = document.getElementById("post-detail");
const relatedContainer = document.getElementById("related-posts");
const loadMoreBtn = document.getElementById("load-more");

const postsPerPage = 3;
let currentIndex = 0; 


function formatDate(dateStr, lang) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}

function renderPosts() {
  postList.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");

    div.innerHTML = `
      <img src="${post.image}" alt="${post.title[lang]}">
      <h2><a href="#" class="post-link" data-id="${post.id}">${post.title[lang]}</a></h2>
      <p class="date">📅 ${formatDate(post.date, lang)}</p>
      <p class="excerpt">${post.excerpt[lang]}</p>
      <div class="tags">
        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;

    postList.appendChild(div);
  });

  attachDetailEvents(); 
}

function renderRelatedPosts() {
  if (!relatedContainer) return;

  relatedContainer.innerHTML = "";
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="icon">📅</span>
      <span class="date">${formatDate(post.date, lang)}</span>
      <span class="sep">»</span>
      <a href="#" class="post-link" data-id="${post.id}">${post.title[lang]}</a>
    `;
    relatedContainer.appendChild(li);
  });

  attachDetailEvents(); 
}

async function loadPostContent(post) {
  try {
    const res = await fetch(`asset/posts/${post.file}.${lang}.${post.type}`);
    let content = await res.text();

    if (post.type === "md") {
      content = marked.parse(content);
    }

    postList.style.display = "none";
    document.getElementById("load-more").style.display = "none";
    if (relatedContainer) relatedContainer.parentElement.style.display = "none";

    postDetail.innerHTML = `
    <!--  <h1>${post.title[lang]}</h1>  -->
      <p class="date">📅 ${formatDate(post.date, lang)}</p>
      <div class="post-body">${content}</div>
      <button id="back-btn">⬅ Quay lại</button>
    `;
    postDetail.style.display = "block";

    document.getElementById("back-btn").addEventListener("click", () => {
      postDetail.style.display = "none";
      postList.style.display = "block";
      document.getElementById("load-more").style.display = "block";
      if (relatedContainer) relatedContainer.parentElement.style.display = "block";
    });
  } catch (err) {
    postDetail.innerHTML = "<p>Lỗi tải nội dung.</p>";
  }
}

function attachDetailEvents() {
  document.querySelectorAll(".post-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const post = posts.find(p => p.id == link.dataset.id);
      if (post) loadPostContent(post);
    });
  });
}

// function renderPostsBatch() {
//     const nextIndex = currentIndex + postsPerPage;
//     const batch = posts.slice(currentIndex, nextIndex);
  
//     batch.forEach(post => {
//       const div = document.createElement("div");
//       div.classList.add("post");
//       div.innerHTML = `
//         <img src="${post.image}" alt="${post.title[lang]}">
//         <h2>${post.title[lang]}</h2>
//         <p class="date">📅 ${formatDate(post.date)}</p>
//         <p class="excerpt">${post.excerpt[lang]}</p>
//       `;
//       postList.appendChild(div);
//     });
  
//     currentIndex = nextIndex;
  
//     if (currentIndex >= posts.length) {
//       loadMoreBtn.style.display = "none";
//     }
//   }

function renderPostsBatch() {
  const nextIndex = currentIndex + postsPerPage;
  const batch = posts.slice(currentIndex, nextIndex);

  batch.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <img src="${post.image}" alt="${post.title[lang]}">
      <h2><a href="#" class="post-link" data-id="${post.id}">${post.title[lang]}</a></h2>
      <p class="date">📅 ${formatDate(post.date, lang)}</p>
      <p class="excerpt">${post.excerpt[lang]}</p>
      <div class="tags">
        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;
    postList.appendChild(div);
  });

  // Gắn sự kiện click cho batch mới
  attachDetailEvents();

  currentIndex = nextIndex;

  if (currentIndex >= posts.length) {
    loadMoreBtn.style.display = "none";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  // renderPosts();
  renderRelatedPosts();

  renderPostsBatch();

  loadMoreBtn.addEventListener("click", () => {
    renderPostsBatch();
  });
});

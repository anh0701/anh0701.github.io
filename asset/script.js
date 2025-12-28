import { posts } from './posts.js';
import { translations } from './translations.js';

let lang = "en";
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith("vi")) lang = "vi";
console.log(userLang);

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
      <img src="${post.image}">
      <h3><a href="#" class="post-link" data-id="${post.id}">${post.title[lang]}</a></h3>
      <p class="date"> <span class="material-symbols-outlined">calendar_month</span> ${formatDate(post.date, lang)}</p>
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
  // const shuffled = [...posts].sort(() => 0.5 - Math.random());
  // const selected = shuffled.slice(0, 3);

  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const selected = sorted.slice(0, 3);

  selected.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="date"> <span class="material-symbols-outlined">calendar_month</span> ${formatDate(post.date, lang)}</span>
      <span class="sep">»</span>
      <a href="#" class="post-link" data-id="${post.id}">${post.title[lang]}</a>
    `;
    relatedContainer.appendChild(li);
  });

  attachDetailEvents();
}

async function loadPostContent(post) {
  try {
    const filePath = `asset/posts/${post.file}.${lang}.${post.type}`;
    const res = await fetch(filePath);

    if (!res.ok) throw new Error("Không tìm thấy file");

    let content = await res.text();

    if (post.type === "md") {
      content = marked.parse(content);
    }

    postList.style.display = "none";
    loadMoreBtn.style.display = "none";
    if (relatedContainer) relatedContainer.parentElement.style.display = "none";

    postDetail.innerHTML = `
      <p class="date"><span class="material-symbols-outlined">calendar_month</span> ${formatDate(post.date, lang)}</p>
      <div class="post-body">${content}</div>
      <div class="post-footer">
        <button class="back-to-posts back-btn">${lang === "vi" ? "Quay lại" : "Back"}</button>
        <button id="back-btn" > ↑ </button>
      </div>
    `;
    postDetail.style.display = "block";

    const backBtn = document.getElementById("back-btn");
    const contentSide = document.querySelector(".content");
    // let hideTimer;

    // contentSide.addEventListener("scroll", () => {
    //   backBtn.classList.add("visible");
    //   clearTimeout(hideTimer);


    //   hideTimer = setTimeout(() => {
    //     backBtn.classList.remove("visible");
    //   }, 3000)
    // });

    backBtn.classList.add("visible");

    backBtn.addEventListener("click", () => {
      contentSide.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });


    document.querySelectorAll(".back-to-posts").forEach(btn => {
      btn.addEventListener("click", () => {
        postDetail.style.display = "none";
        postList.style.display = "block";
        loadMoreBtn.style.display = "block";
        if (relatedContainer)
          relatedContainer.parentElement.style.display = "block";
      });
    });




  } catch (err) {
    postDetail.innerHTML = `<p>${lang === "vi" ? "Lỗi tải nội dung." : "Failed to load content." + err}</p>`;
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
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const nextIndex = currentIndex + postsPerPage;
  const batch = sorted.slice(currentIndex, nextIndex);

  batch.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <img src="${post.image}">
      <h3><a href="#" class="post-link" data-id="${post.id}">${post.title[lang]}</a></h3>
      <p class="date"><span class="material-symbols-outlined">calendar_month</span> ${formatDate(post.date, lang)}</p>
      <p class="excerpt">${post.excerpt[lang]}</p>
      <div class="tags">
        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;
    postList.appendChild(div);
  });

  attachDetailEvents();

  currentIndex = nextIndex;

  if (currentIndex >= posts.length) {
    loadMoreBtn.style.display = "none";
  }
}

function translateUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // el.textContent = translations[currentLang][key];
    el.innerHTML = translations[lang][key];
  });
}


document.addEventListener("DOMContentLoaded", () => {
  // renderPosts();
  renderRelatedPosts();

  renderPostsBatch();

  loadMoreBtn.addEventListener("click", () => {
    renderPostsBatch();
  });

  translateUI();
});


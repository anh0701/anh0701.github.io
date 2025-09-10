import { posts } from './posts.js';
import { translations } from './translations.js';

let currentLang = localStorage.getItem("lang") || "en";
let theme = localStorage.getItem("theme") || 'dark';

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupMobileMenu();
  setupToggleLang();
  // setupToggleTheme();
  translateUI();

  renderPostsList();
  renderLastPosts();
  loadPostFromURL();
});

/* ======= FUNCTIONS ======= */

function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("header nav");

  if (!menuToggle || !nav) return; 

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

function getCurrentLang() {
  return localStorage.getItem("lang") || "en";
}

function translateUI() {
  // document.getElementById('about_intro').innerHTML = translations[lang].intro;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // el.textContent = translations[currentLang][key];
    el.innerHTML = translations[currentLang][key];
  });
}



function setupToggleLang() {
  const buttons = document.querySelectorAll(".toggle-lang");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "vi" : "en";
      localStorage.setItem("lang", currentLang);
      translateUI();
      renderPostsList();
      renderLastPosts();
      loadPostFromURL();
    });
  });
}

function initTheme() {

  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  document.querySelectorAll(".toggle-theme").forEach(btn => {
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  setupToggleTheme();
}



function setupToggleTheme() {
  const btn = document.querySelectorAll(".toggle-theme");
  btn.forEach(btn => {
    btn.addEventListener("click", () => {

      document.body.classList.toggle("dark");

      if( document.body.classList.contains("dark")){
        theme = "dark";
      } else{
        theme = "light";
      }

      localStorage.setItem(
        "theme",
        theme
      );

      document.querySelectorAll(".toggle-theme").forEach(b => {
        b.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
      });

    });
  });
}


function renderPostsList() {
  const postsList = document.getElementById("posts-list");
  if (!postsList) return;

  postsList.innerHTML = "";

  [...posts].reverse().forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    const tagsHtml = p.tags && p.tags.length
      ? `<div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join(" ")}</div>`
      : "";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.title[currentLang]}" class="card-img"/>
      <a href="post.html?file=${p.file}" class="card-title">${p.title[currentLang]}</a>
      <p class="card-meta">
        <span class="material-symbols-outlined">person</span> ${p.author} &nbsp; 
        <span class="material-symbols-outlined">calendar_month</span> ${new Date(p.date).toLocaleDateString(currentLang)}
      </p>
      <p class="card-excerpt">${p.excerpt[currentLang] || ""}</p>
      ${tagsHtml}
    `;
    postsList.appendChild(div);
  });
}

function getLastThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(-3).reverse();
}

function renderLastPosts() {
  const postsListLast = document.getElementById("posts-list-last");
  if (!postsListLast) return;

  postsListLast.innerHTML = "";

  const lastPosts = getLastThree(posts);

  lastPosts.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    const tagsHtml = p.tags && p.tags.length
      ? `<div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join(" ")}</div>`
      : "";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.title[currentLang]}" class="card-img"/>
      <a href="post.html?file=${p.file}" class="card-title">${p.title[currentLang]}</a>
      <p class="card-meta">
        <span class="material-symbols-outlined">person</span> ${p.author} &nbsp; 
        <span class="material-symbols-outlined">calendar_month</span> ${new Date(p.date).toLocaleDateString(currentLang)}
      </p>
      <p class="card-excerpt">${p.excerpt[currentLang] || ""}</p>
      ${tagsHtml}
    `;
    postsListLast.appendChild(div);
  });
}

function loadPostFromURL() {
  const postContent = document.getElementById("post-content");
  if (!postContent) return;

  const params = new URLSearchParams(window.location.search);
  const fileBase = params.get("file");
  if (!fileBase) return;

  loadPost(fileBase);
}


function loadPost(fileBase) {
  const postDiv = document.getElementById("post-content");
  if (!postDiv) return;

  const post = posts.find(p => p.file === fileBase);
  if (!post) return;

  const ext = post.type || "md";

  const messages = {
    en: { noTranslation: "⚠️ No translation available.", loadError: "⚠️ Error loading post." },
    vi: { noTranslation: "⚠️ Không có bản dịch.", loadError: "⚠️ Lỗi tải bài viết." }
  };

  const tryLoad = (lang) => fetch(`asset/posts/${fileBase}.${lang}.${ext}`).then(res => {
    if (!res.ok) throw new Error("No file");
    return res.text();
  });

  tryLoad(currentLang)
    .catch(() => {
      const fallbackLang = currentLang === "en" ? "vi" : "en";
      return tryLoad(fallbackLang).then(txt => {
        // currentLang = fallbackLang;
        // localStorage.setItem("lang", currentLang);
        translateUI();
        return txt;
      });
    })
    .then(txt => {
      if (txt) {
        if (ext === "html") {
          postDiv.innerHTML = txt;
        } else {
          postDiv.innerHTML = marked.parse(txt);
        }
        updateBreadcrumb(fileBase);
      } else {
        postDiv.innerHTML = `<p>${messages[currentLang].noTranslation}</p>`;
      }
    })
    .catch(err => {
      console.error(err);
      postDiv.innerHTML = `<p>${messages[currentLang].loadError}</p>`;
    });
}


function updateBreadcrumb(fileBase) {
  const breadcrumb = document.querySelector(".breadcrumb");
  if (!breadcrumb) return;

  breadcrumb.innerHTML = "";

  const homeLink = document.createElement("a");
  homeLink.href = "index.html";
  homeLink.setAttribute("data-i18n", "home");
  breadcrumb.appendChild(homeLink);

  breadcrumb.appendChild(document.createTextNode(" › "));

  const postsLink = document.createElement("a");
  postsLink.href = "posts.html";
  postsLink.setAttribute("data-i18n", "posts");
  breadcrumb.appendChild(postsLink);

  breadcrumb.appendChild(document.createTextNode(" › "));

  const post = posts.find(p => p.file === fileBase);
  const span = document.createElement("span");

  if (post) {
    span.textContent = post.title[currentLang];
    document.title = post.title[currentLang];
  } else {
    span.textContent = currentLang === "en"
      ? `Not found: ${fileBase}`
      : `Không tìm thấy: ${fileBase}`;
    document.title = span.textContent;
  }

  breadcrumb.appendChild(span);

  translateUI();
}



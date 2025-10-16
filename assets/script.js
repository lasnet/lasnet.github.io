// ===============================
// CyberScribe blog script (fixed)
// ===============================

// Добавляем текущий год в футер
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ===============================
// Рендер списка постов
// ===============================
if (document.querySelector("#posts-container")) {
  // Универсальный путь к JSON (работает на index.html и posts.html)
  const jsonPath = "./posts/posts.json";

  fetch(jsonPath)
    .then((r) => {
      if (!r.ok) throw new Error("Не удалось загрузить posts.json");
      return r.json();
    })
    .then((posts) => {
      const container = document.getElementById("posts-container");
      const searchInput = document.getElementById("search");

      function renderPosts(list) {
        if (!list.length) {
          container.innerHTML = `<p style="color:#9aa7bd">Публикации не найдены.</p>`;
          return;
        }

        container.innerHTML = list
          .map(
            (post) => `
            <article class="post">
              <h3><a href="${post.url}">${post.title}</a></h3>
              <p>${post.description}</p>
              <div class="tags">
                ${post.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
              </div>
            </article>`
          )
          .join("");
      }

      renderPosts(posts);

      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          const q = e.target.value.toLowerCase();
          const filtered = posts.filter(
            (p) =>
              p.title.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q)
          );
          renderPosts(filtered);
        });
      }
    })
    .catch((err) => {
      console.error("Ошибка при загрузке постов:", err);
      const container = document.getElementById("posts-container");
      if (container)
        container.innerHTML = `<p style="color:#9aa7bd">Ошибка загрузки списка постов. Проверь путь к posts/posts.json.</p>`;
    });
}

// ===============================
// Отображение Markdown статьи
// ===============================
if (document.getElementById("post-content")) {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  if (file) {
    fetch(`posts/${file}`)
      .then((r) => {
        if (!r.ok) throw new Error("Файл не найден");
        return r.text();
      })
      .then((md) => {
        // Простейший Markdown → HTML
        const html = md
          .replace(/^### (.*$)/gim, "<h3>$1</h3>")
          .replace(/^## (.*$)/gim, "<h2>$1</h2>")
          .replace(/^# (.*$)/gim, "<h1>$1</h1>")
          .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
          .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
          .replace(/\*(.*)\*/gim, "<i>$1</i>")
          .replace(/`(.*?)`/gim, "<code>$1</code>")
          .replace(/\n$/gim, "<br />");

        document.getElementById("post-content").innerHTML = html;
      })
      .catch((err) => {
        document.getElementById(
          "post-content"
        ).innerHTML = `<p>Ошибка загрузки статьи: ${err.message}</p>`;
      });
  } else {
    document.getElementById("post-content").innerHTML =
      "<p>Не указан файл статьи.</p>";
  }
}

// === СТРАНИЦА СО СПИСКОМ ПОСТОВ ===
if (window.location.pathname.endsWith("posts.html")) {
  fetch("posts/posts.json")
    .then((r) => r.json())
    .then((posts) => {
      const container = document.getElementById("posts-container");
      const search = document.getElementById("search");

      function render(filter = "") {
        container.innerHTML = "";
        posts
          .filter(p =>
            p.title.toLowerCase().includes(filter.toLowerCase()) ||
            p.description.toLowerCase().includes(filter.toLowerCase())
          )
          .forEach(post => {
            const el = document.createElement("div");
            el.className = "post-card";
            el.innerHTML = `
              <img src="${post.image}" alt="${post.title}">
              <h2>${post.title}</h2>
              <p>${post.description}</p>
              <a href="post.html?id=${post.id}" class="read-more">Читать</a>
            `;

            // 👉 делаем всю карточку кликабельной, кроме кнопки
            el.addEventListener("click", (e) => {
              if (e.target.tagName.toLowerCase() !== "a") {
                window.location.href = `post.html?id=${post.id}`;
              }
            });

            container.appendChild(el);
          });
      }

      render();
      search.addEventListener("input", e => render(e.target.value));
    })
    .catch(err => console.error("Ошибка загрузки постов:", err));
}

// === СТРАНИЦА ОТДЕЛЬНОГО ПОСТА ===
if (window.location.pathname.endsWith("post.html")) {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  fetch("posts/posts.json")
    .then((r) => r.json())
    .then((posts) => {
      const post = posts.find(p => p.id === postId);
      if (!post) {
        document.getElementById("post-content").innerHTML = "<p>Пост не найден.</p>";
        return;
      }

      // Устанавливаем метаданные
      document.title = `${post.title} | LASNET Blog`;
      document.getElementById("meta-description").content = post.description;
      document.getElementById("og-title").content = post.title;
      document.getElementById("og-description").content = post.description;
      document.getElementById("og-image").content = post.image;
      document.getElementById("og-url").content = window.location.href;

      // Загружаем контент статьи (.md)
      fetch(`posts/${post.id}.md`)
        .then((r) => r.text())
        .then((md) => {
          const html = marked.parse(md);
          document.getElementById("post-content").innerHTML = html;
        })
        .catch(err => {
          document.getElementById("post-content").innerHTML = "<p>Ошибка загрузки статьи.</p>";
          console.error("Ошибка загрузки .md:", err);
        });
    })
    .catch(err => console.error("Ошибка загрузки posts.json:", err));
}

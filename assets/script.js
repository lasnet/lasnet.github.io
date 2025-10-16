if (window.location.pathname.endsWith("posts.html") || window.location.pathname.endsWith("/")) {
  fetch("/posts/posts.json")
    .then((r) => r.json())
    .then((posts) => {
      const container = document.querySelector(".posts-grid");
      container.innerHTML = "";

      posts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "post-card";
        card.innerHTML = `
          <img src="${post.image}" alt="${post.title}">
          <h2>${post.title}</h2>
          <p>${post.description}</p>
          <a href="post.html?id=${post.id}" class="btn">Читать</a>
        `;

        // 👉 Вся карточка кликабельна
        card.addEventListener("click", (e) => {
          // Не мешаем переходу по кнопке “Читать”
          if (e.target.tagName.toLowerCase() !== "a") {
            window.location.href = `post.html?id=${post.id}`;
          }
        });

        container.appendChild(card);
      });
    })
    .catch((err) => console.error("Ошибка загрузки постов:", err));
}

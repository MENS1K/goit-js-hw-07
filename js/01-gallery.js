import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const listImg = galleryItems.map((item) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
});
galleryRef.insertAdjacentHTML("afterbegin", listImg.join(" "));
galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.getAttribute("data-source")}">`
  );
  instance.show(onEscClose);
  function onEscClose() {
    galleryRef.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  }
});
console.log(galleryItems);

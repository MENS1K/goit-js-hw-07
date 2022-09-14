import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const listImg = galleryItems.map((item) => {
  return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image"  src="${item.preview}"    alt="${item.description}" />
</a>`;
});
galleryRef.insertAdjacentHTML("afterbegin", listImg.join(" "));
new SimpleLightbox(".gallery a", {
  captionDelay: 300,
  captionsData: "alt",
});
console.log(galleryItems);

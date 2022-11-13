import { galleryItems } from "./gallery-items.js";
// Change code below this line

const mainContainerGalleryRef = document.querySelector(".gallery");

function createGalleryCardEl(galleres) {
  return galleres
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> `;
    })
    .join("");
}

const galleryCard = createGalleryCardEl(galleryItems);
mainContainerGalleryRef.insertAdjacentHTML("beforeend", galleryCard);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

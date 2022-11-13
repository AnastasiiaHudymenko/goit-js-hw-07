import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryCardEl(galleres) {
  return galleres
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"/>
            </a>
           </div> `;
    })
    .join("");
}
const galleryCard = createGalleryCardEl(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryCard);

gallery.addEventListener("click", (e) => {
  const imgSrcOriginal = e.target.dataset.source;
  if (e.target.nodeName === "A" || imgSrcOriginal === imgSrcOriginal) {
    e.preventDefault();
  }
  if (e.target === gallery) {
    return;
  }

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imgSrcOriginal}">`
  );

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});

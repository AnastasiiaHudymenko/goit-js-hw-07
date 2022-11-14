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
  e.preventDefault();
  const imgSrcOriginal = e.target.dataset.source;

  if (e.target === gallery) {
    return;
  }

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imgSrcOriginal}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            instance.close();
          }
        });
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            instance.close();
          }
          gallery.removeEventListener("click");
        });
      },
    }
  );

  instance.show();
});

import { galleryItems } from "./gallery-items.js";
import { createGalleryCardEl } from "./createGallaryCard.js";

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createGalleryCardEl(galleryItems));

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const imgSrcOriginal = e.target.dataset.source;
  if (e.target === gallery) {
    return;
  }
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imgSrcOriginal}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEspClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEspClose);
      },
    }
  );

  instance.show();

  function onEspClose(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
});

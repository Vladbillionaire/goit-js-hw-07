import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function creatGalleryEl(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="I${description}"
          />
        </a>
      </li>
        `
    )
    .join("");
}

  galleryContainer.insertAdjacentHTML("beforeend", creatGalleryEl(galleryItems));
  galleryContainer.addEventListener("click", onGalleryContainerClick);
  function onGalleryContainerClick(e) {
  e.preventDefault();
  const oringinalImgSrc = e.target.dataset.source;
  const instance = basicLightbox.create(
    `
      <div class="modal">
      <img src="${oringinalImgSrc}" width="1200">
      </div>
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapePress);
      },
    },
    {
      onClose: () => {
        document.removeEventListener("keydown", onEscapePress);
      },
    }
  );

  instance.show();

  function onEscapePress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}

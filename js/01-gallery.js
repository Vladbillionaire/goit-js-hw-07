import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const cardsMarkup = createGalleryCardMarkup(galleryItems)
gallery.insertAdjacentHTML('beforeend', cardsMarkup)
gallery.addEventListener('click', onGalleryElClick)

function createGalleryCardMarkup(items) {
    return items.map(({ preview, original, description }) => {
        
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    }).join("");
}

  const oringinalImgSrc = evt.target.dataset.source;

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

  function onEscapePress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

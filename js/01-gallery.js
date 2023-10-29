import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description} />
  </a>
</li>`
}).join("");

galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup);

galleryEl.addEventListener("click", onImageClick);
 
function onImageClick(event) {
  event.preventDefault();
    const imageURL = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src=${imageURL}></img>`);
  
  instance.show();
    
document.addEventListener("keydown", onEscapeClose);

  function onEscapeClose(event) {
    if (event.code === "Escape") {
      document.removeEventListener("keydown", onEscapeClose);
      instance.close();
    }
  }
}
  
// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);
const cardsMurkup = createImageCardsMurkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', cardsMurkup);

function createImageCardsMurkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="I${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

// //preventDefault(), modal, ESC close
// galleryRef.addEventListener("click", onImageClick);

// function onImageClick(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }

//   const currentImage = evt.target.dataset.source;
//   const instance = basicLightbox.create(
//     `
// 		<img src="${currentImage}" width="800" height="600"/>
//         `,
//     {
//       onShow: (instance) => {
//         window.addEventListener("keydown", onEscKeyPress);
//       },
//       onClose: (instance) => {
//         window.removeEventListener("keydown", onEscKeyPress);
//       },
//     }
//   );
//   instance.show();

//   function onEscKeyPress(evt) {
//     const ESC_KEY_CODE = "Escape";
//     const isEscKey = evt.code === ESC_KEY_CODE;
//     if (!isEscKey) return;
//     instance.close();
//   }
// }

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});


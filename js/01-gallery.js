import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const containerGallery = document.querySelector(`.gallery`);
const markup = createGaleryMarkup(galleryItems);
containerGallery.insertAdjacentHTML(`beforeend`, markup);
containerGallery.addEventListener(`click`, clickOnImg);

function createGaleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`;
    }).join(``);
}


const instance = basicLightbox.create(`
<img width="1280" height="auto" src="">
`,
    {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscKeyPress);
        }, onClosw: (instance) => {
            window.removeEventListener(`keydown`, onEscKeyPress);
    },
    }
);

function clickOnImg(el) {
  el.preventDefault();
  const datasetSource = el.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(el) {
  if (el.code !== 'Escape') return;
  instance.close();
}

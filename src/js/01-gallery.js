// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
import '../css/common.css';
import '../css/01-gallery.css';




// Change code below this line

// console.log(galleryItems);

const palettContainer = document.querySelector(".gallery");
const cardsMarkup = createImageCardsMarkup(galleryItems);
palettContainer.insertAdjacentHTML("beforeend", cardsMarkup);


function createImageCardsMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
      })
      .join("");
  }
  
  // обьявление "SimpleLightbox"
  
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  

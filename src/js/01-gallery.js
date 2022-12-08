import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');


const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);




function createGalleryMarkup(galleryItems) {

   return galleryItems.map(({ preview, original, description }) => {
     return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
     `;
   })
     .join('');
}

new SimpleLightbox('.gallery a', {
    
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 });
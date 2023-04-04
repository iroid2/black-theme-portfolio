



// nextButton.addEventListener("click", function() {
//   currentImage++;
//   if (currentImage === images.length) {
//     currentImage = 0;
//   }
//   updateGallery();
// });

// function updateGallery() {
//   let imageContainer = document.querySelector(".image-container");
//   imageContainer.style.left = "-" + (currentImage * 25) + "%";
// }
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerview:1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#right',
    prevEl: '#left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}); 


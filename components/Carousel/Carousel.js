/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const imageArray = [
  '/assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg',
]
console.log(imageArray)

imageArray.forEach(image => {
  // console.log(image)
});

const carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(createCarousel());
console.log(carouselContainer)



function createCarousel () {
  //create elements
  const carousel = document.createElement('div'),//parent
        leftButton = document.createElement('div'),//child
        img = document.createElement('img'),//child
        rightButton = document.createElement('div');//child

  let index = 0;


  //append elements
  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);
  carousel.appendChild(img);//do we need to append child every time we click?

  //style elements
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  //fill with text content
  leftButton.textContent = '<';
  rightButton.textContent = '>';
  img.src = imageArray[index];//sets the src value to the values inside the array
  // img.style.display= 'block'//This displays them
console.log(img)

  // img.forEach(img => {
  //   console.log(img.length)
    // img.style.display = "block"
  // })
  
  
  //What I need it to do
  /*
  1. Display the first image on page load(display block)
  2. Iterate through img.src...img tag or index needs to change
  
  */

  // slideRight(() => {
  //   console.log('Sliding Right' + index)
  // })

  // slideLeft(() => {
  //   console.log('Sliding Left' + index)
  //   img[this.index].style.display = 'none'
  //  if (index === 0){
  //     index = imageArray.length - 1;
  //  } else {
  //    index--;
  //  }
   
  // });

  //event listeners
  leftButton.addEventListener('click', event => {
    console.log('Left button clicked', event.target)
      // img.style.display = 'none'
     if (index === 0){
        index = imageArray.length - 1;
     } else {
       index--;
     }
     img.style.display = 'block'
     carousel.appendChild(img);
  });

  rightButton.addEventListener('click', event => {
    console.log('Right button clicked', event.target)
    // carousel.appendChild(img);
  });


  //return parent element
  return carousel;
}
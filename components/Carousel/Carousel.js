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
];
// console.log(imageArray)

const carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(createCarousel());
// console.log(carouselContainer)


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
  img.src = imageArray[index];//sets the src property to the values inside the array
  img.style.display= 'block'//This displays the first image before click event fires

 
  //event listeners
  leftButton.addEventListener('click', event => {
    console.log('Left button clicked', event.target)
    index --;
    if (index <= 0) {
       index = imageArray.length - 1;
    } 

    img.src = imageArray[index];
    carousel.appendChild(img);
    console.log("Clicked left. We are at index:",index);//This shows me at what index carousel is at when the left button is clicked
  });

  rightButton.addEventListener('click', event => {
    if (index >= imageArray[index] ) {
      index = imageArray.length + 1 ;

    } else if( index === 3) {
      index = 0;
      
    } else{
      index ++;
    }

    img.src = imageArray[index];
    carousel.appendChild(img);
    console.log("Clicked right. We are at index:",index);//This shows me at what index carousel is at when the right button is clicked
  });


  //return parent element
  return carousel;
} 


// leftButton.addEventListener('click', event => {
//   // console.log('Left button clicked', event.target)
//    if (index === 0){
//       index = imageArray.length - 1;
//    } else {
//      index--;
//    }
//    img.style.display = 'block'
//    console.log("clicked left",index);
//    carousel.appendChild(img);
// });

// right if (index === index + 1) {
//   index = 0;
// } else {
//   index ++
// }
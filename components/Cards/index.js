// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container')
console.log(cards)

// cards.appendChild(createCard(data))

// const promise = axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
// console.log(promise)


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(data => {
    console.log('Articles Success', data);
    //this is an OBJECT we need to loop over. Inside of the articles OBJECT are arrays with key value pairs!!! for in loops allow you to iterate over them:
    const article = data.data.articles;
    
    //   [i]       [arr]
    for(topics in article) { //way to loop over object
    //    arr[i]
        article[topics].forEach(data => {//way to loop over arrays now that we have access to them
             const elements = createCard(data);
             cards.appendChild(elements);
        });
    }
})
.catch(error => {
    console.log('The API is not working', error);
});


function createCard(data) {
    //create elements
    const card = document.createElement('div'),//parent
          headline = document.createElement('div'),//child 
          author = document.createElement('div'),//child 
          imgContainer = document.createElement('div'),//grandchild 
          img = document.createElement('img'),//great-grandchild
          authorName = document.createElement('span');//grandchild  

    //append elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);

    //create styles
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorName.textContent = `By ${data.authorName}`;
    return card;
}
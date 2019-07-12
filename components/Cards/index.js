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
    console.log('Articles Success', data)
    const article = data.data.articles
    console.log(article)

    
    // article.forEach((index, array) => {

    //     // const elements = createCard(data)
    //     // cards.appendChild(elements)
    // })
})
.catch(error => {
    console.log('The API is not working', error)
});

// function toArray(obj) {
//     const result = []
//     for (const prop in obj) {
//         const value = obj[prop];
//         if (typeof value === 'object') {
//             result.push(toArray(value));
//         }else {
//             result.push(value);
//         }
//     }
//     return result;
// }
// console.log(toArray(article))


function createCard(data) {
    //create elements
    const card = document.createElement('div'),//parent
          headline = document.createElement('div'),//child 
          author = document.createElement('div'),//child 
          imgContainer = document.createElement('div'),//grandchild 
          img = document.createElement('img'),//great-grandchild
          authorName = document.createElement('span');//grandchild  

    //append elements
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)

    //create styles
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //create content
    headline.textContent = data;
    img.src = data;
    authorName.textContent = `By ${data}`;
    
    // headline.textContent = data.headline;
    // img.src = data.authorPhoto;
    // authorName.textContent = `By ${data.authorName}`;
    return card;
}
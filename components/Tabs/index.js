// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const tabsTopic = document.querySelector('.topics')
tabsTopic.appendChild(createTabs())


//promise test
const promise = axios.get(`https://lambda-times-backend.herokuapp.com/topics`);
console.log(promise);

// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
//     .then(data => {
//         console.log('Success', data)
//     })

//     .catch(error => {
//         console.log('The API is currently down.', error)
//     })

function createTabs() {
    //create element
    const tab = document.createElement('div');

    tab.classList.add('tab')

    tab

    return tab
}
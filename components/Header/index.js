// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container');

// console.log(headerContainer);

//test
headerContainer.appendChild(Header())

function Header() {
    //creating the elements
    const header = document.createElement('div'),//parent
        date = document.createElement('span'),//child
        title = document.createElement('h1'),//child
        temp = document.createElement('span');//child

    //append the elements
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    //set styles
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //set content
    date.textContent = 'MARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';


        
return header;
}

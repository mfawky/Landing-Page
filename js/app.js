//Some global variables
const navBar = document.querySelector('ul');
const sections = document.querySelectorAll('section');

// Using the {appendChild} to add items to the nav bar
const secOne = document.createElement('li');
secOne.textContent = "Section 1";              // adds the string {Section 5} to the <li></li>
navBar.appendChild(secOne);                    // adds Section 1 item to the nav 
secOne.setAttribute("data-link" , "section1");        // adds an id inside the <li></li> tag
secOne.classList.add('nav__item');             // adds a class inside the <li></li> tag

// the same steps will be repeated to the rest of the items

const secTwo = document.createElement('li');
secTwo.textContent = "Section 2";
navBar.appendChild(secTwo);
secTwo.setAttribute("data-link" , "section2");
secTwo.classList.add('nav__item');

const secThree = document.createElement('li');
secThree.textContent = "Section 3";
navBar.appendChild(secThree);
secThree.setAttribute("data-link" , "section3");
secThree.classList.add('nav__item');

const secFour = document.createElement('li');
secFour.textContent = "Section 4";
navBar.appendChild(secFour);
secFour.setAttribute("data-link" , "section4");
secFour.classList.add('nav__item');



//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

// Now we will make the screen scroll to the concerned section after clicking on the item that refers to it

const items =  document.querySelectorAll(".nav__item");

items.forEach((section)=>{                           // a forEach method to loop the wanted action in all the items
    section.addEventListener('click',() => {         // a listener that is activated by clicking
        
        const element = document.getElementById(section.getAttribute("data-link"));
        // the previous line makes the item with {data-link} refers to the section whose ID = data-link of the item
        // you can try it by {console.log} to understand what I mean
        // So if you clicked on any item it should appear to you in the console what section is corresponding to this item 
        
        element.scrollIntoView({
            //after clicking on any {scrollIntoView} allows you to jump to the corresponding section instantly
            behavior:"smooth",  
            //but we dont want it to move instantly so we used {behavior:"smooth"} to to scroll smoothly 
        });
    });



});

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


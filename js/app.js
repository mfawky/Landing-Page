//Some global variables
const navBar = document.querySelector('ul');
const sections = document.querySelectorAll('section');

// Using the {appendChild} to add items to the nav bar
const secOne = document.createElement('li');
secOne.textContent = "Section 1";              // adds the string {Section 5} to the <li></li>
navBar.appendChild(secOne);                    // adds Section 1 item to the nav 
secOne.setAttribute("data-item" , "section1");        // adds an id inside the <li></li> tag
secOne.classList.add('nav__item');             // adds a class inside the <li></li> tag

// the same steps will be repeated to the rest of the items

const secTwo = document.createElement('li');
secTwo.textContent = "Section 2";
navBar.appendChild(secTwo);
secTwo.setAttribute("data-item" , "section2");
secTwo.classList.add('nav__item');

const secThree = document.createElement('li');
secThree.textContent = "Section 3";
navBar.appendChild(secThree);
secThree.setAttribute("data-item" , "section3");
secThree.classList.add('nav__item');

const secFour = document.createElement('li');
secFour.textContent = "Section 4";
navBar.appendChild(secFour);
secFour.setAttribute("data-item" , "section4");
secFour.classList.add('nav__item');



//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

// Now we will make the screen scroll to the concerned section after clicking on the item that refers to it

const items =  document.querySelectorAll(".nav__item");

items.forEach(item=>{                           // a forEach method to loop the wanted action in all the items
    item.addEventListener('click',() => {         // a listener that is activated by clicking
        
        const element = document.getElementById(item.getAttribute("data-item"));
        /* the previous line makes the item with {data-link} refers to the section whose ID = data-link of the item
         you can try it by {console.log} to understand what I mean
         So if you clicked on any item it should appear to you in the console what section is corresponding to this item 
         and only the "data-item" is equal to the "data-nav" {both contan the same string}*/
        element.scrollIntoView({
            //after clicking on any item {scrollIntoView} allows you to jump to the corresponding section instantly
            behavior:"smooth",  
            //but we dont want it to move instantly so we used {behavior:"smooth"} to to scroll smoothly 
        });
    });



});

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

// now we will discuss the active state of the sections ------>>>>>>> NOTE : I used MDN as a reference for this part

  const layout =  {
       root : null,
       threshold : 0,
       rootMargin : "0px" 
   };
       
   
  let observer = new IntersectionObserver(function(entries,observer){ // creating a constructor
        // forEach method that sees if each entry of entries isInterecting with the viewed secion or not
        entries.forEach(entry => { 
          if(!entry.isIntersecting){ 
                // if its not intersecting {means the value is falsse, and you can test it by connsole.log(entry)} then if it contains "your-active-class" then remove the class from it
                entry.target.classList.remove("your-active-class");
          }
          else{  // and if its intesrecting and dont have "your-active-class" then add the class from it 
                entry.target.classList.toggle("your-active-class");
          }
      })
  }, layout);
sections.forEach(section=>{ // forEach method that observes each section of sections to see if it enters the viewport or not 
    observer.observe(section);
});

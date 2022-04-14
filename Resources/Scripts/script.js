// change color of my picture
let colorPic = document.getElementById('color-pic');
let noColorPic = document.getElementById('no-color-pic');



const changePicToBlackAndWhite = function() {
    colorPic.style.display = 'none';
    noColorPic.style.display = 'block';
}

const changePicToColor = function() {
    noColorPic.style.display = 'none';
    colorPic.style.display = 'block';
}

colorPic.addEventListener('mouseover', changePicToBlackAndWhite );
noColorPic.addEventListener('mouseout', changePicToColor);


// make the button for Polish words work

let words = ['Cześć (pron: cheshch) ---> Hi / Bye ', 'Do widzenia (pron: doh-veadsen-ya) ---> Good - bye',
            'Mądry (pron: mondri) ---> Smart','Wesoły (pron: vesowi) ---> Happy', 'Tani (pron: tani) ---> Cheap',
            'Ładny (pron: wadni) ---> Pretty', 'Ćśś! Cicho! (pron: Chshh! (chee-hoe!) ---> Shh! Be quiet!',
            'Nie (pron: nyeh) ---> No','Drogi (pron: drogi) ---> Expensive', 'Dzień dobry (pron: jen doh-bri) ---> Hello',
            'Na zdrowie! (pron: nah zdrovyeh!) ---> Cheers!','Dobranoc (pron: doh-brah-noats) ---> Good Night',
            'Dzień (pron: jen) ---> Day', 'Dziękuję (pron: jen-koo-yeh) ---> Thank you','Głodny (pron: gwodni) ---> Hungry',
            'No (pron: nohe) ---> Okay :)','Proszę (pron: prosheh) ---> Please','Tak (pron: tak) ---> Yes',
            'Przepraszam (pron: psheh-prasham) ---> Excuse me / Sorry','Kocham Cię (pron: ko-hahm che) ---> I love you',
            'Apsik! (pron: app-sheek!) ---> Achoo!','Dobry wieczór (pron: doh-bri vyeh-choor) ---> Good Evening',
            'Ała! (ah-wah!) ---> Ow! / Ouch!', 'Noc (pron: nots) ---> Night'];
            

let button = document.getElementById('polish-button');
let question = document.getElementById('question');
let polishWord = document.getElementById('polishWord');
let wordContainer = document.getElementById('polishWord-container');


const wordSelector = () => {
    let randomIndex = Math.floor(Math.random()* words.length);
    
        return words[randomIndex];
   
};



const displayWord = () => {
    
    question.style.display = 'none';
    wordContainer.style.display ='block';
    polishWord.innerHTML = wordSelector();
    button.innerHTML = "Try Again!"
}


button.addEventListener('click', displayWord);

// make the slider for color switch work

let rangeButton = document.querySelector('.sliderContainer input[type="range"]');
let header = document.querySelector("header");
let myLogo = document.getElementById("logo");
let navLinks = document.querySelectorAll(".nav-menu li a");
let headingElements = document.querySelectorAll("h2");
let intro = document.getElementById("intro");
let projectsIntroTxt = document.querySelector(".projects-intro")
let skillsIcons = document.querySelectorAll(".skills-container i")
let footer = document.querySelector("footer");


function addColorToLink(event) {
    
    event.target.style.color = "hsl(194, 100%, 70%)";
}

function removeColorFromLink(event) {
    
    event.target.style.color ="hsl(0,0%,96%)";
}


let toggle = false;

function colorChange() {
    //dark mode
    if (toggle === false) {

       myLogo.src = "./Resources/Images/logo6-white.png";
        
        // change clors of all h2 elements
        for (let i = 0; i < headingElements.length; i++) {
            headingElements[i].style.color = "hsl(0,0%,96%)";
        }
        // change colors of all nav links
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "hsl(0,0%,96%)";
        }
        // set 'hover' states for links
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('mouseover',addColorToLink);
            navLinks[i].addEventListener('mouseout',removeColorFromLink);  
        }
        // change background of the introduction section
        intro.style.background = "hsl(223,24%,31%)";
        projectsIntroTxt.style.color = "hsl(0,0%,96%)";
        // chonge colors of skills icons
        for(let i = 0; i < skillsIcons.length; i++) {
            skillsIcons[i].style.color = "hsl(0,0%,96%)";
        }
        menuIcon.style.color = "hsl(0,0%,96%)";
        closeIcon.style.color = "hsl(0,0%,96%)";
        menu.style.background = "hsl(0,0%,5%)";
        
    } else { // light mode
        
        myLogo.src = "./Resources/Images/logo6.png";
        
    
        for (let i = 0; i < headingElements.length; i++) {
            headingElements[i].style.color = "";
        }
      
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "";
        }

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].removeEventListener('mouseover',addColorToLink);
            navLinks[i].removeEventListener('mouseout',removeColorFromLink);
        } 

        intro.style.background = "";
        projectsIntroTxt.style.color = "";

        for(let i = 0; i < skillsIcons.length; i++) {
            skillsIcons[i].style.color = "";
        }
        menuIcon.style.color = "";
        closeIcon.style.color = "";
        menu.style.background = "";

    }

    toggle = !toggle;  
    }

 


// function to add class "light" to some elements using toggle switch
const darkMode = () => {
  
    
    header.classList.toggle("light");
    document.body.classList.toggle("light");
    footer.classList.toggle("light");
   
}


rangeButton.addEventListener('click', darkMode);
rangeButton.addEventListener('click', colorChange);


// toggle for hamburger menu

let menu = document.querySelector(".mobile-nav ul");
let menuItems = document.querySelectorAll(".menu-item");
let hamburger= document.querySelector(".hamburger");
let closeIcon= document.querySelector(".closeIcon");
let menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {

    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}
hamburger.addEventListener("click", toggleMenu);
// hiding the menu after a link is clicked 
// using toggleMenu() because when you can click it means that the menu is showing
menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  );

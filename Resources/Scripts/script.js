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
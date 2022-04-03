
let colorPic = document.getElementById("color-pic");
let noColorPic = document.getElementById("no-color-pic");



const changePicToBlackAndWhite = function() {
    colorPic.style.display = 'none';
    noColorPic.style.display = 'block';
}

const changePicToColor = function() {
    noColorPic.style.display = 'none';
    colorPic.style.display = 'block';
}

colorPic.addEventListener('click', changePicToBlackAndWhite );
noColorPic.addEventListener('click', changePicToColor);
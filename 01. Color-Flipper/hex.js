
let button = document.getElementById('btn');
let color = document.querySelector('.color');

function changeBackgroundColor(){
    //to get random hexNumbers use  Math.floor(Math.random()*16777215).toString(16)
    ranHexColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#'+ ranHexColor;
    color.textContent = '#'+ ranHexColor;
    color.style.color = '#'+ ranHexColor;
}
button.addEventListener('click', changeBackgroundColor)
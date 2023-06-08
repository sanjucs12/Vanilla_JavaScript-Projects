const colors = ['red','orange','yellow','green','blue','indigo','violet']
const button = document.getElementById('btn');
let color = document.querySelector('.color');

function changeBackgroundColor(){
let random = Math.floor(Math.random()*colors.length);
document.body.style.backgroundColor=colors[random];
color.style.color = colors[random]
color.textContent = colors[random]
}
button.addEventListener('click',changeBackgroundColor)
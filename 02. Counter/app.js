let counter = document.getElementById("value");

///METHOD 1

// let increaseBtn = document.querySelector('.increase');
// let decreaseBtn = document.querySelector('.decrease');
// let resetBtn = document.querySelector('.reset');

// let count = 0;
// increaseBtn.addEventListener('click', ()=>{
//  count++
//  counter.textContent = count;
// })
// decreaseBtn.addEventListener('click',()=>{
//     count--;
//     counter.textContent=count;
// })
// resetBtn.addEventListener('click', ()=>{
//     count=0;
//     counter.textContent=count;
// })


//METHOD 2

let count = 0;
let button = document.querySelectorAll(".btn");
//console.log(button);
button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    //console.log(event.currentTarget.classList);
    let btnType = event.currentTarget.classList;
    if (btnType.contains("increase")) {
      count++;
    } else if (btnType.contains("decrease")) {
      count--;
    } else if (btnType.contains("reset")) {
      count = 0;
    }
    if(count>0)
    {
        counter.style.color='green';
    }
    else if(count<0)
    {
        counter.style.color='red';
    }
    else if(count===0)
    {
        counter.style.color = 'black'
    }
    counter.textContent = count;
  });
});

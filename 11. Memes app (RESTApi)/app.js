let button = document.getElementById("memeBtn");
let contents = document.querySelector(".contents");
let url = " https://meme-api.com/gimme/";

let fetchMeme = () => {
  let subreddit = ["memes", "dankmemes"];
  random = subreddit[Math.floor(Math.random() * subreddit.length)];
  fetch(`${url}${random}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      contents.innerHTML = `
      <img src="${data.preview[2]}" alt="image by ${data.author}" />
      <h3 id="title">${data.title}</h3>`;
    });
};

window.addEventListener("DOMContentLoaded", fetchMeme);
button.addEventListener("click", fetchMeme);

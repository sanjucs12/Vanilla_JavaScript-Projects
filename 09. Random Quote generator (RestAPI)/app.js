// Powered by Quotable
// https://github.com/lukePeavey/quotable

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("btn");
const url = "https://api.quotable.io/random";

getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((txt) => {
      //console.log(txt.content);
      quote.textContent = txt.content;
      //console.log(txt.author);
      author.textContent = txt.author;
    });
};
//getQuote();'
window.addEventListener('load',getQuote);
button.addEventListener('click',getQuote);

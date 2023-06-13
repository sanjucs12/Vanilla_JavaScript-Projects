const button = document.getElementById("button");
const jokeContainer = document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

const getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = item.joke;
      jokeContainer.classList.add("fade");
    });
};

button.addEventListener("click", getJoke);

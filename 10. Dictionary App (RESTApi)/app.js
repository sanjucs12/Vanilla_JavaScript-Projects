const button = document.getElementById("search-btn");
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const getMeaning = () => {
  let inpWord = document.getElementById("inp-word").value;
  let results = document.getElementById("result");
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data[0]);
      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
      console.log(sound);
      results.innerHTML = `<div class="word">
      <h3>${inpWord}</h3>
      <button ${(onclick = playSound)}>
        <i class="fas fa-volume-up"></i>
      </button>
    </div>
    <div class="details">
      <p>${data[0].meanings[0].partOfSpeech}</p>
      <p>/${data[0].phonetic}</p>
    </div>
    <div class="word-meaning">
    ${data[0].meanings[0].definitions[0].definition}
    </div>
    <div class="word-example">
    ${data[0].meanings[0].definitions[0].example || ""}
    </div>`;
    })
    .catch(() => {
      results.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });

  function playSound() {
    sound.play();
  }
};

button.addEventListener("click", getMeaning);

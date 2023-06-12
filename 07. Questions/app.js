///method - 1----USING SELECTORS parent to child

const questions = document.querySelectorAll(".question");
//console.log(question)
questions.forEach((question) => {
  //console.log(question)
  const btn = question.querySelector(".question-btn");
  // console.log(btn)
  btn.addEventListener("click", () => {
    //console.log(question)

    //if we click another button curtent button should close
    questions.forEach((item) => {
      //console.log(item)
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

///// Method--2---TRAVERSING DOM/////  child to parent

///e.target - can only get the target
///e.currentTarget - can get the parents class by accessing .ParentElement

// let toggleBtn = document.querySelectorAll(".question-btn");

// toggleBtn.forEach((btn) => {
//   // console.log(btn);
//   btn.addEventListener("click", (e) => {
//     console.log(e.currentTarget.parentElement.parentElement)
//     let parent = e.currentTarget.parentElement.parentElement;
//     parent.classList.toggle("show-text");
//   });
// });

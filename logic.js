const questionBlock = document.querySelector(".question-block");
let counter = document.querySelector(".counter");
let number = document.querySelector(".number");
const categoryList = document.querySelectorAll(".one.category a");
const levelList = document.querySelectorAll(".one.level a");
const startButton = document.querySelector(".startBtn");
const selector = document.querySelector(".selector");
const section = document.querySelector("section");
//const catBtn = document.querySelector(".one.category h4");
//const levBtn = document.querySelector(".one.level h4");

const dataInfo = [
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is NOT a common problem with field studies?",
    correct_answer: "Users ignore the researcher and engage in tasks unrelated to the study.",
    incorrect_answers: [
      "Users use the field session to ask for new features or complain about the UI.",
      "Users slide into the “host” role and try to please the researcher.",
      "Users talk about their activities instead of showing what they do to the researcher.",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "What is a Sankey diagram used for in UX?",
    correct_answer:
      "Visualizing pathways that users take on a website",
    incorrect_answers: [
        'Prioritizing features to address in the next design iteration',
        'Understanding the demographics of a target user population',
        'Organizing related facts or ideas into distinct clusters'
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "What is a common usability issue in infinite-scrolling lists?",
    correct_answer: "Difficulty accessing the page footer",
    incorrect_answers: [
      "Increased interaction cost compared to pagination",
      "Lack of scannability of the elements in the list",
      "Poor discoverability of the elements in the list",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is true of focus groups?",
    correct_answer: "They can be affected by group think.",
    incorrect_answers: [
      "They are used to conduct A/B testing on different design prototypes.",
      "They provide detailed insights on the usability of a product.",
      "They provide data about how users interact with a product in a natural setting.",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "An antipersona is a representation of:",
    correct_answer:
      "A user that could misuse a product in ways that could impact target audiences and the business",
    incorrect_answers: [
      "An ideal user of a product",
      "A typical or target user of a product",
      "A user that could use a product in new, innovative ways that were unplanned by the business",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following describes Fitts’s law?",
    correct_answer:
      "The movement time to a target depends on the distance to the target and on the size of the target.",
    incorrect_answers: [
      "The time to select an item in a list of items depends on the number of items in that list.",
      "The time to move a cursor on a path (such as a slider) depends on the length of the path and on the width of the path.",
      "The time to perform a task depends on the number of practice trials that the user has had with that task.",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "What is the funnel technique in UX research??",
    correct_answer:
      "Starting with broad questions before getting to more specific ones in user interviews and moderated user tests",
    incorrect_answers: [
      "Distributing a survey to a large number of participants and then invited a selected few for individual interviews",
      "Visualizing the number of users who drop off at each step in a process",
      "Visualizing the process that the user goes through to accomplish a goal",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is a key aspect of the Wizard of Oz method in UX?",
    correct_answer: "Using a human stand-in to simulate a computer system",
    incorrect_answers: [
      "Testing a fully functional prototype with users",
      "Creating a realistic mockup",
      "Conducting user research to inform design decisions",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "A cognitive walkthrough is a:",
    correct_answer:
      "A usability-inspection method in which a team of evaluators goes through the different steps of the task, taking a user’s perspective",
    incorrect_answers: [
      "A user-research method in which a participant uses a prototype to walk through the different steps of a task",
      "A usability-evaluation method in which a usability expert assigns one or more quantitative ratings to each step of a design",
      "A usability-inspection method in which a usability specialist evaluates each step of an interaction using established usability principles",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question:
      "Where should language switchers be placed on a desktop ecommerce website?",
    correct_answer: "In the top left or top right corner of every page",
    incorrect_answers: [
      "In the footer of every page",
      "Under Help",
      "Under My Account",
    ],
  },
];

let currentPage = 0;
let totalRight = 0;
console.log(totalRight);
let moveOn = false;
let idCategory = "";
let level = "";
let allowNext = false;
let nameCategory = "";
let levelText = "";
let data;
// let dataInfo;
let maxPage = 10;

checkId(categoryList);
checkId(levelList);

//catBtn.addEventListener("click", checkId);
//levBtn.addEventListener("click", checkLevel);

function checkId(input) {
  for (let i = 0; i < input.length; i++) {
    let eachOption = input[i];
    //eachOption.style.display = "block";
    console.log(eachOption);

    if (input === categoryList) {
      eachOption.addEventListener("click", function () {
        for (let j = 0; j < input.length; j++) {
          let eachO = input[j];
          eachO.className = "";
        }

        idCategory = input[i].id;
        eachOption.className = "active";
        console.log(idCategory);
        nameCategory = input[i].textContent;
      });
    }

    if (input === levelList) {
      eachOption.addEventListener("click", function () {
        for (let k = 0; k < input.length; k++) {
          let eachL = input[k];
          eachL.className = "";
        }

        levelText = input[i].textContent;
        level = levelText.toLowerCase();
        eachOption.className = "active";
        console.log(level);
      });
    }

    /*catBtn.addEventListener("click", function(){
            if (eachOption.style.display === "none"){
                eachOption.style.display = "block";  
            } else {
                eachOption.style.display = "none";  
            }
            
        }); */
  }
}

startButton.addEventListener("click", function () {
  selector.style.display = "none";
  //   getInfo().then(render);
  render(dataInfo);
});

function getInfo(dataInfo) {
  //getting all the data from API
  // return axios.get("https://opentdb.com/api.php?amount=" + maxPage + "&category=" + idCategory + "&difficulty=" + level + "&type=multiple")
  //     .then(function (response) {
  //         // handle success
  //         dataInfo = response.data.results;
  //         console.log('dataInfo-----------------', dataInfo);
  //         //render(dataInfo);
  //         /*for (let i = currentPage; i < currentPage+1; i++){
  //             data = dataInfo[i];
  //             render(data); // rendering the array to the DOM
  //         }*/
  //         return dataInfo;
  //     })
  //     .catch( () => {
  //         alert("Server is not available! Try again in a few moment.")
  //     })

  return dataInfo;
}

// render the data from API
function render(info) {
  section.style.display = "flex";
  console.log(totalRight);

  if (currentPage <= maxPage - 1) {
    setTimeout(function () {
      counter.style.display = "block";
      number.textContent = currentPage + 1;
    }, 40);

    //data = dataInfo[i];

    questionBlock.innerHTML = "";
    let eachData = info[currentPage];
    console.log(eachData);

    const gameInfoCat = document.querySelector(".game-info1");
    const gameInfoLev = document.querySelector(".game-info2");
    const pQuestion = document.createElement("p");
    const ul = document.createElement("ul");
    const nextBtn = document.createElement("button");
    nextBtn.className = "nextBtn";
    const cancelBtn = document.createElement("button");
    cancelBtn.classList = "reset";
    nextBtn.textContent = "Next Question";
    cancelBtn.textContent = "Reset Game";
    pQuestion.innerHTML = eachData.question;

    gameInfoCat.textContent = nameCategory;
    gameInfoLev.textContent = levelText;
    questionBlock.appendChild(pQuestion);
    questionBlock.appendChild(ul);
    questionBlock.appendChild(cancelBtn);
    questionBlock.appendChild(nextBtn);

    //new array with first data in the array is the correct answer API
    let answers = [eachData.correct_answer];

    //pushing new data to the array with incorrect answer from the API
    for (let j = 0; j < eachData.incorrect_answers.length; j++) {
      answers.push(eachData.incorrect_answers[j]);
    }

    // shuffle the answers array
    answers = shuffle(answers);

    //looping through the answers array to print out the list of answers to the DOM
    // all the wrong anwers
    for (let k = 0; k < answers.length; k++) {
      const li = document.createElement("li");
      const spanLi = document.createElement("span");
      const checkBtn = document.createElement("i");
      checkBtn.className = "material-icons radio";
      checkBtn.textContent = "radio_button_unchecked";
      ul.appendChild(li);
      li.appendChild(spanLi);
      spanLi.innerHTML = answers[k];
      li.appendChild(checkBtn);
    }

    if (moveOn === false) {
      selectAnswers();
    }

    nextBtn.addEventListener("click", function () {
      if (allowNext === true) {
        currentPage++;
        checkAnswer(eachData);
        render(dataInfo);
        //getInfo();
        moveOn = false;
        allowNext = false;
      }
    });

    cancelBtn.addEventListener("click", resetGame);
  }

  if (currentPage === maxPage - 1) {
    selectAnswers();
    checkAnswer(info);
    let cancelBtn = document.querySelector(".question-block button.reset");
    cancelBtn.style.display = "none";
    finalPage();
  }
}

//getInfo();

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function selectAnswers() {
  let answersLi = document.querySelectorAll("li");
  let answersLiIcon = document.querySelectorAll("i");
  console.log(answersLi);

  for (let j = 0; j < answersLi.length; j++) {
    let eachAnswerBtn = answersLi[j];
    let eachAnswerIcon = answersLiIcon[j];
    //eachAnswerBtn.childNodes[1].textContent = "radio_button_unchecked";

    eachAnswerBtn.addEventListener("click", function () {
      for (let k = 0; k < answersLi.length; k++) {
        let eachAnswerBtn = answersLi[k];
        let eachAnswerIcon = answersLiIcon[k];
        eachAnswerIcon.textContent = "radio_button_unchecked";
        eachAnswerIcon.style.color = "rgb(128, 97, 57)";
        eachAnswerBtn.className = "";
      }
      eachAnswerIcon.textContent = "radio_button_checked";
      eachAnswerBtn.className = "active";
      eachAnswerIcon.style.color = "rgb(128, 97, 57)";
      allowNext = true;
    });
  }
}

function checkAnswer(info) {
  let answersLi = document.querySelectorAll("li span");
  let answersLiIcon = document.querySelectorAll("i");
  //console.log(answersLi);

  for (let j = 0; j < answersLi.length; j++) {
    let eachAnswer = answersLi[j];
    let eachAnswerIcon = answersLiIcon[j];
    console.log(eachAnswer.textContent);
    if (eachAnswerIcon.textContent === "radio_button_checked") {
      if (eachAnswer.textContent === info.correct_answer) {
        totalRight++;
      }
    }
  }
}

function finalPage() {
  let p = document.querySelector(".question-block p");
  let finalBtn = document.querySelector(".question-block button.nextBtn");
  let ul = document.querySelector("ul");

  let li = document.querySelector("li");
  finalBtn.textContent = "Check your answers!";

  finalBtn.addEventListener("click", function () {
    let section = document.querySelector("section");
    section.style.flexFlow = "column wrap";
    let questionBlock = document.querySelector(".question-block");
    questionBlock.style.padding = "30px 40px 20px 40px";
    //if (allowNext === true){
    let p1 = document.createElement("p");
    p1.className = "score-num";
    let p2 = document.createElement("p");
    p2.className = "score-text";
    questionBlock.appendChild(p1);
    questionBlock.appendChild(p2);

    p.style.display = "none";
    questionBlock.removeChild(ul);
    ul.removeChild(li);
    let sectionH3 = document.querySelector("section h3");
    sectionH3.textContent = "Result";
    p1.textContent = totalRight;
    p2.textContent = "correct answers";
    finalBtn.style.display = "none";
    counter.style.display = "none";

    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Play Again!";
    resetBtn.className = "endButton";
    questionBlock.appendChild(resetBtn);

    resetBtn.addEventListener("click", resetGame);
    allowNext = false;
    moveOn = true;
    //}

    let shareBtn = document.createElement("button");
    shareBtn.textContent = "Share you score!";
    shareBtn.className = "endButton";
    questionBlock.appendChild(shareBtn);

    shareBtn.addEventListener('click', function() {
      navigator.share({
          title: 'UX Quiz',
          text: 'Check out this cool app I made!',
          url: 'https://clarancefarley.github.io/'
      })
    });

  });
}

function resetGame() {
  location.reload();
}


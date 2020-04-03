/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "What do you mean by hash difficulty level?",  ///// Write the question inside double quotes
      answers: {
        a: "Its depends on the time to calculate hash",                  ///// Write the option 1 inside double quotes
        b: "The difficulty level denotes the amount of 0's, the hash should start with",                  ///// Write the option 2 inside double quotes
        c: "Both A and B",                  ///// Write the option 3 inside double quotes
        d: "None of the  above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "What are the different types of Blockchains?",  ///// Write the question inside double quotes
      answers: {
        a: "Public",                  ///// Write the option 1 inside double quotes
        b: "Consortium",                  ///// Write the option 2 inside double quotes
        c: "Private",                  ///// Write the option 3 inside double quotes
        d: "All of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

 {
      question: "What is the work of nonce in blockchain?",
      answers: {
        a: "Count transaction money",
        b: "Value set by miners to make the hash equal to or less than the target of the network",
        c: "None of the above",
      },
      correctAnswer: "b"
    }, 
    
{
      question: "What is the initial application for which Blockchain was designed?",
      answers: {
        a: "Peer-to-peer finance application",
        b: "Research Project",
        c: "Open source finance software to connect Banks",
        d: "None of the above",
      },
      correctAnswer: "d"
    },
    {
      question: "Why Blockchain can be trusted?",
      answers: {
        a: "Its compatibility with other business applications due to its open-source nature",
        b: "Its security",
        c: "Both A and B",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "In blockchain, blocks are linked ________?",
      answers: {
        a: "Backward to the previous block",
        b: "Forward to next block",
        c: "Both A and B",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "How can you identify Block?",
      answers: {
        a: "By the block header Hash",
        b: "by the block height",
        c: "Both A and B",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

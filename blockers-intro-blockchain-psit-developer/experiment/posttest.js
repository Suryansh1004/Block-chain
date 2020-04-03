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
      question: "Which of these statements are true for open ledger?",  ///// Write the question inside double quotes
      answers: {
        a: "Every one has copy of ledger.",                  ///// Write the option 1 inside double quotes
        b: "Ledger can be viewed by anyone.",                  ///// Write the option 2 inside double quotes
        c: "Ledger is mutable.",                  ///// Write the option 3 inside double quotes
        d: "None Of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "Which of the following is true for distributed ledger?",  ///// Write the question inside double quotes
      answers: {
        a: "Everyone has a copy of ledger ",                  ///// Write the option 1 inside double quotes
        b: "There is one copy of the ledger ",                  ///// Write the option 2 inside double quotes
        c: "Ledger is mutable. ",                  ///// Write the option 3 inside double quotes
        d: "None of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

 {
      question: "A miner has completed the mining what will be the next step?",
      answers: {
        a: "Wait for second miner to complete",
        b: "Wait for all members to complete",
        c: "Validate the transaction and add it to the ledger",
        d: "None of the above "
      },
      correctAnswer: "c"
    }, 
    
{
      question: "What is not a ledger type in blockchain?",
      answers: {
        a: "Distributed Ledger",
        b: "Open Ledger",
        c: "Both a and b",
        d: "None of these"
      },
      correctAnswer: "d"
    },
    {
      question: "How can a user successfully modify a blockchain?",
      answers: {
        a: "It is immutable",
        b: "By simply deleting the block",
        c: "By use of consensus algorithm",
        d: "None of the above "
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

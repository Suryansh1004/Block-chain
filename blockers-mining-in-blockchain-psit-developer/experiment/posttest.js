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
      question: "Which statement is correct?",  ///// Write the question inside double quotes
      answers: {
        a: "Mining is a process of adding transactions in a ledger ",                  ///// Write the option 1 inside double quotes
        b: "SHA-256 is the only cryptographic algorithm used in blockchain",                  ///// Write the option 2 inside double quotes
        c: "Both a and b",                  ///// Write the option 3 inside double quotes
        d: "None Of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "Which is not an advantage of blockchain technology?",  ///// Write the question inside double quotes
      answers: {
        a: "Anonymity & Privacy ",                  ///// Write the option 1 inside double quotes
        b: "Mutability ",                  ///// Write the option 2 inside double quotes
        c: "Low transaction cost ",                  ///// Write the option 3 inside double quotes
        d: "Digital freedom and decntralization"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

 {
      question: "Initial miner has completed the mining process, what will be the next step?",
      answers: {
        a: "Wait for the next miner to complete",
        b: "Terminate the process",
        c: "Validate the transaction and add it to the ledger",
        d: "None of the above "
      },
      correctAnswer: "c"
    }, 
    
{
      question: "Which of the following listed is not involved in mining?",
      answers: {
        a: "Hash Value",
        b: "Hash function",
        c: "Sender and Reciever",
        d: "None of the above"
      },
      correctAnswer: "d"
    },
{
      question: "Which statement is not correct?",
      answers: {
        a: "Mining is not done in blockchain",
        b: "Ledger is related to the process of mining",
        c: "Both a and b",
        d: "None of the above "
      },
      correctAnswer: "c"
    },
{
      question: "The block in the blockchain consist of?",
      answers: {
        a: "A hash pointer to the previous block",
        b: "Timestamp",
        c: "List of transactions",
        d: "All of the above "
      },
      correctAnswer: "d"
    },
{
      question: "The main advantage of immutability is_________.",
      answers: {
        a: "Scalability",
        b: "Improved Security",
        c: "Tamper Proof",
        d: "Increased Efficiency"
      },
      correctAnswer: "d"
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

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
        question: "What is a blockchain?",  ///// Write the question inside double quotes
        answers: {
          a: "A type of cryptocurrency",                  ///// Write the option 1 inside double quotes
          b: "A distributed ledger on a peer to peer network",                  ///// Write the option 2 inside double quotes
          c: "An exchange",                  ///// Write the option 3 inside double quotes
          d: "A centralized ledger"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
      },
  
      {
       question: "Who created Bitcoin?",  ///// Write the question inside double quotes
        answers: {
          a: "Samsung ",                  ///// Write the option 1 inside double quotes
          b: "John Mcafee",                  ///// Write the option 2 inside double quotes
          c: "Satoshi Nakamoto",                  ///// Write the option 3 inside double quotes
          d: "None of the above"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },                                  ///// To add more questions, copy the section below 
                                                            ///// this line
  
   {
        question: "What is a miner?",
        answers: {
          a: "Computers that validate and process blockchain transactions",
          b: "A person doing calculations to verify a transaction",
          c: "A type of blockchain",
          d: "An algorithm that predicts the next part of the chain"
        },
        correctAnswer: "c"
      }, 
      
  
  
  {
        question: "What is a genesis block?",
        answers: {
          a: "A famous block that hardcoded a hash of the Book of Genesis onto the blockchain",
          b: "The 2nd transaction of a blockchain",
          c: "The first block of a Blockchain",
          d: "None of the above"
        },
        correctAnswer: "c"
      },
{
        question: "According to the blockchain mechanism, which statement is true?",
        answers: {
          a: "All the people receive transactions simultaneously",
          b: "Only the person receives the transaction",
          c: "Both are correct",
          d: "None of these"
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
  

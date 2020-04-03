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
        question: "Which key is used for Asymmetric Cryptography?",  ///// Write the question inside double quotes
        answers: {
          a: "Public Key",                  ///// Write the option 1 inside double quotes
          b: "Private Key",                  ///// Write the option 2 inside double quotes
          c: "Both public and private keys",                  ///// Write the option 3 inside double quotes
          d: "None of the above"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },
  
      {
       question: "The full form of SHA is?",  ///// Write the question inside double quotes
        answers: {
          a: "Social Hash Algorithm",                  ///// Write the option 1 inside double quotes
          b: "Secure Hash Algorithm",                  ///// Write the option 2 inside double quotes
          c: "System Hash Algorithm",                  ///// Write the option 3 inside double quotes
          d: "None of the above"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
      },                                  ///// To add more questions, copy the section below 
                                                            ///// this line
  
   {
        question: "Which of the following is a full form of P2P?",
        answers: {
          a: "Peer to Peer",
          b: "Public key to Public key",
          c: "Private key to Public key",
          d: "None of the above"
        },
        correctAnswer: "a"
      }, 
      
  
  
  {
        question: "Where can you reserve your cryptocurrrency?",
        answers: {
          a: "Rerserve Bank of India",
          b: "Wallet",
          c: "Compact Disk (CD)",
          d: "Both (a) and (b)"
        },
        correctAnswer: "b"
      },
{
        question: "Identify the correct statement?",
        answers: {
          a: "Blockchain is centralized",
          b: "Blockchain is mutable",
          c: "Both a and b",
          d: "None of these"
        },
        correctAnswer: "d"
      },
{
        question: "What is a miner?",
        answers: {
          a: "A type of blockchain",
          b: "An algorithm that predicts the next part of the chain",
          c: "A person doing calculations to verify a transaction",
          d: "Computers that validate and process blockchain transactions"
        },
        correctAnswer: "d"
      },
{
        question: "What is the process of creating new bitcoins popularly known as?",
        answers: {
          a: "Finding",
          b: "Panning",
          c: "Sourcing",
          d: "Mining"
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

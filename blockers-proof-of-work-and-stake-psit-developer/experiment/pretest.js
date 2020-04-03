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
        question: "Which statement is not correct?",  ///// Write the question inside double quotes
        answers: {
          a: "Mining is related to PoW",                  ///// Write the option 1 inside double quotes
          b: "Mining is related to PoS",                  ///// Write the option 2 inside double quotes
          c: "PoS is an alternative to PoW",                  ///// Write the option 3 inside double quotes
          d: "None of the above"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
      },
  
      {
       question: "Which statement are correct?",  ///// Write the question inside double quotes
        answers: {
          a: "Ledger is a component of Mining ",                  ///// Write the option 1 inside double quotes
          b: "Ledger is not a concept of Mining",                  ///// Write the option 2 inside double quotes
          c: "Hashing is related to ledger",                  ///// Write the option 3 inside double quotes
          d: "PoW is Proof of work"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },                                  ///// To add more questions, copy the section below 
                                                            ///// this line
  
   {
        question: "How mining is done?",
        answers: {
          a: "Through Hashing",
          b: "Through Adding to blocks, Hashing",
          c: "Through Adding of blocks, Hash of current block, Hash of Previous block",
          d: "None of the above"
        },
        correctAnswer: "c"
      }, 
      
  
  
  {
        question: "Full form of PoS is?",
        answers: {
          a: "Privacy of Stake",
          b: "Proof of Stack",
          c: "Proof of Stake",
          d: "None of the above"
        },
        correctAnswer: "c"
      },
{
        question: "Pillars of blockchain are?",
        answers: {
          a: "Centralization, Mutability, Transparency",
          b: "Decentralization, Immutability, Transparency",
          c: "Confidentiality, Integrity, availability",
          d: "None of these"
        },
        correctAnswer: "c"
      },
 {
        question: "What is a hash?",
        answers: {
          a: "A type of blockchain",
          b: "An algorithm that predicts the next part of the chain",
          c: "Function that convert input string into encrypted output",
          d: "None of the above"
        },
        correctAnswer: "c"
      },
 {
        question: "What is the process of creating new bitcoins popularly known as?",
        answers: {
          a: "Finding",
          b: "Panning",
          c: "Mining",
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
  

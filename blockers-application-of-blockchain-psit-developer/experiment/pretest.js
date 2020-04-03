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
        question: "First block include previous hash or not",  ///// Write the question inside double quotes
        answers: {
          a: "Yes",                  ///// Write the option 1 inside double quotes
          b: "No",                  ///// Write the option 2 inside double quotes
          c: "Can't say",         ///// Write the option 3 inside double quotes
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
      },
  
      {
       question: "Which of the folowing algorithm is used in the hashing?",  ///// Write the question inside double quotes
        answers: {
          a: "Kadane’s algorithm",                  ///// Write the option 1 inside double quotes
          b: "Lee algorithm",                  ///// Write the option 2 inside double quotes
          c: "SHA-256",                  ///// Write the option 3 inside double quotes
          d: "None of the above"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },                                  ///// To add more questions, copy the section below 
                                                            ///// this line
  
   {
        question: "What does the hashing function does?",
        answers: {
          a: "Sorts the entered array",
          b: "Converts an input string into encrypted output of fixed length",
          c: "Both A and B",
          d: "None of the above"
        },
        correctAnswer: "b"
      }, 
      
  
  
  {
        question: "What is a nonce?",
        answers: {
          a: "Hashing algorithm",
          b: "A random number",
          c: "A variable to be entered in the formula",
          d: "Both B and C"
        },
        correctAnswer: "d"
      },
{
        question: "What is the term for when a blockchain splits?",
        answers: {
          a: "A fork",
          b: "A merge",
          c: "A sidechain",
          d: "A division"
        },
        correctAnswer: "a"
      },
{
        question: "What is the process of creating new bitcoins popularly known as?",
        answers: {
          a: "Finding",
          b: "Panning",
          c: "Sourcing",
          d: "Mining"
        },
        correctAnswer: "b"
      },
{
        question: "Which of the following is important for Blockchain?",
        answers: {
          a: "Database Security",
          b: "Auditing",
          c: "Planning",
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

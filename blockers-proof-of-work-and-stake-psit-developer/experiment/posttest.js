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
      question: "What is Proof of Stake?",  ///// Write the question inside double quotes
      answers: {
        a: "A timestamp",                  ///// Write the option 1 inside double quotes
        b: "A Consensus protocol",                  ///// Write the option 2 inside double quotes
        c: "A Cryptographic dimension",                  ///// Write the option 3 inside double quotes
        d: "None Of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "What is Proof Of work?",  ///// Write the question inside double quotes
      answers: {
        a: "A timestamp",                  ///// Write the option 1 inside double quotes
        b: "A Consensus protocol",                  ///// Write the option 2 inside double quotes
        c: "A Cryptographic dimension",                  ///// Write the option 3 inside double quotes
        d: "None of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

 {
      question: "What role does consensus algorithm play in mining?",
      answers: {
        a: "Validation",
        b: "Adding of blocks",
        c: "Both a and b",
        d: "None of the above "
      },
      correctAnswer: "c"
    }, 
    
{
      question: "Is there, a better algorithm for PoW than SHA-256?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Can't say",
      },
      correctAnswer: "d"
    },
    {
      question: "Pos is an alternative measure of?",
      answers: {
        a: "PoW",
        b: "PoA",
        c: "PoB",
        d: "PoC"
      },
      correctAnswer: "a"
    },
    {
      question: "Which statement is correct?",
      answers: {
        a: "Mining is a mutable option in blockchain ",
        b: "SHA-256 is the only cryptographic algorithm used in blockchain",
        c: "Both A and B",
        d: "None of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "Which is not an advantage of blockchain technology?",
      answers: {
        a: "Anonymity & Privacy",
        b: "Mutability",
         c: "Both A and B",
        d: "None of the above"
      },
      correctAnswer: "a"
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

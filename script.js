// functions
function buildQuiz(){
    // variable to store the HTML output
    const output =[];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //var to store possible answers
            const answers = [];

            // variable for each possible answer
            for(letter in currentQuestion.answers){

                // add an HMTL push button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            //add this q and its answers to output
            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
        }
    );
    //combine output list into one string of html and push to dom
    quizContainer.innerHTML = output.join("");
}
function showResults(){

    //gather answer containers from quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        //find chosen answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            //add to num correct
            numCorrect++;

            //color green
            answerContainers[questionNumber].getElementsByClassName.color = 'lightgreen';
        }
        // if answer wrong or blank
         else{
             //color answers red
             answerContainers[questionNumber].getElementsByClassName.color = 'red';
        } 
    });

    //show number correct out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}


// variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// questions array
const myQuestions = [
{
    question: "Which of these is not a type of window object method?",
    answers: {
        a: "alert()",
        b: "prompt()",
        c: "write()",
        d: "confirm()"
    },
    correctAnswer: "c"
    },
    {
    question:"What tag do you use when writing javascript in an HTML document?",
    answers: {
        a: "<script>",
        b: "<tag>",
        c: "<act>",
        d: "<define>"
    },
    correctAnswer: "a"
    }, 
    {
    question: "Which of these is NOT a type of javascript data?",
    answers: {
        a: "number",
        b: "object",
        c: "string",
        d: "style"
    },
    correctAnswer: "d"
    },
    {
        question: "What are the value options for a boolean?",
        answers: {
            a: "true / false",
            b: "yes / no",
            c: "add / subtract",
            d: "more / less"
        },
        correctAnswer: 'a'
    },
];

/// Start
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// show first slide
showSlide(currentSlide);

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

// Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);


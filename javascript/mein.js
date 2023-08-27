const questions=[
  {
    question:"wich is larget animal in the world?",
    answers:[
      {text:"shark" , Correct :false},
      {text:"Blue whale" , Correct :true},
      {text:"Elephant" , Correct :false},
      {text:"Giraffe" , Correct :false},
    ]

  },
  {
    question:"wich is the smallest country in the world?",
    answers:[
      {text:"Vatican City" , Correct :true},
      {text:"Bhutan" , Correct :false},
      {text:"Nepal" , Correct :false},
      {text:"Shri lanka" , Correct :false},
    ]


  },
  {
  question:"wich is larget desert in the world?",
    answers:[
      {text:"kalahari" , Correct :false},
      {text:"Gobi" , Correct :false},
      {text:"Sahara" , Correct :false},
      {text:"Antarctica" , Correct :true},
    ]


  },
  {
    question:"wich is the smallest continent in the world?",
    answers:[
      {text:"Asia" , Correct :false},
      {text:"Australia" , Correct :true},
      {text:"Arctic" , Correct :false},
      {text:"Africa" , Correct :false},
    ]
  }
];


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNO=currentQuestionIndex + 1;
  questionElement.innerHTML = questionNO + "." + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.Correct){
      button.dataset.correct=answer.Correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
  nextButton.style.display='none';
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  console.log(e.target)
  const isCorrect=selectedBtn.dataset. correct=== "true";
  if(isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
  }else{
  selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
      button.classList.add("correct");
      
    }
    button.disabled=true;
      
    
    
  });
  nextButton.style.display="block";
}





function showScore(){
  resetState();
  questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="play Again";
  nextButton.style.display="block";
}



function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex<questions.length) {
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if (currentQuestionIndex<questions.length) {
    handleNextButton();
    
  }else{
    startQuiz();
  }
});

startQuiz();
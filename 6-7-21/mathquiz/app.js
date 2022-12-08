var correctAnswer;

function newProblem() {
    var r1 = Math.floor(Math.random() * 100);
    var r2 = Math.floor(Math.random() * 100);
    
    var leftside = document.querySelector("#questionLeft");
    var rightSide = document.querySelector("#questionRight");
    
    leftside.innerHTML = r1;
    rightSide.innerHTML = r2;
    correctAnswer = r1+r2;
}

newProblem();


var h1Element = document.querySelector("h1");
console.log("My H1:", h1Element); //always console log to know if it worked. 

var checkAnswerButton = document.querySelector("#submit-answer");
console.log("My button:", checkAnswerButton);

var answerDisplay = document.querySelector("#feedback")

checkAnswerButton.onclick = function (){
    console.log("clicked!");
    var answerInput = document.querySelector("#answer-field");
    console.log("The attempted answer is:", answerInput.value);

    if(answerInput.value == correctAnswer){
        console.log("Correct!")
        answerDisplay.innerHTML="Correct!";
        newProblem();
        answerInput.value = "";
        feedback.style.color = "#4CAF50";

    }else {
        console.log("Incorrect. Try again.");
        feedback.style.color="#FF0000";
        answerDisplay.innerHTML="Incorrect. Try again.";
    }
};

    
    //the ; is used because of assignment. Do it for assignment and function call. 
    //detect inputs -> user event. 

    //*passed by reference (look up)



//3 ingredients to any event. 

//1. The Target. 
//2. The event handler (the response), 
//3. function -> code you want to implement later, in the future. 


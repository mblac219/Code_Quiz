
var start = document.addEventListener( 'start-btn' )
startButton.addEventListener( 'click', startGame )

//function to get game started//

function startGame( ) {
    console.log( 'started' )
    startButton.classlist.add( 'hide' )


}

function showQuestions( ) {


}

function chooseAnswer( ) {


}



const gameQuestions =  [
    { 
        question: " What's the best way to travel? ",
        answers:  {
            a: "car",
            b: "bus",
            c: "plane",
            d: "train"
         },
         correctAnswer: "c"
    },
    {
        question: " Which state is more likely to have an earthquake? ",
        answers: {
            a: "Florida",
            b: "Arkansas",
            c: "Virginia",
            d: "California"
        },
        correctAnswer: "d"
    },
    {
        question: "Which restaurant has a clown as a mascot?",
        answer: {
            a: "Chipotle",
            b: "Burger King",
            c: "McDonalds",
            d: "Arby's"
        },
        correctAnswer: "c"           
     },    
    {

]
const startButton = document.getElementById( 'start-btn' );
const questionContainerEl = document.getElementById( 'qcontainer' );
document.addEventListener( 'click',  startGame )

//function to get game started//

function startGame( ) {
    console.log( 'started' )
    startButton.classList.add( 'hide' )
    questionContainerEl.classList.remove( 'hide' )


}

function showNextQuestions( ) {


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
        question: " Which restaurant has a clown as a mascot? ",
        answer: {
            a: "Chipotle",
            b: "Burger King",
            c: "McDonalds",
            d: "Arby's"
        },
        correctAnswer: "c"           
     },    
    {
        question: " Which tag is considered a header tag? ",
        answer: {
            a: "script",
            b: "main",
            c: " figure",
            d: "h1",
        },
        correctAnswer: "d"
    },
    {
        question: " What s"
    }
        


]
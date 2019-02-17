// function arrComp () {
//   var arrOne = [1,2,3]
//   var arrTwo = [3,2,1]
//   var arrHolder=[]

//   for (var i=0; i<arrOne.length; i++){
//     if (arrOne[i] !== arrTwo[i]){
//       console.log(false)
//     }else {
//       console.log(true)
//     }
//   }
// }

// function trueArr() {
//   var arrOne = [4,2,3]
//   var arrTwo = [1,2,4]
//   var arrHolder=[]

//   for (var i = 0; i<arrOne.length; i++){
//     if (arrTwo.indexOf(arrOne[i]) !== -1){
//       arrHolder.push(arrOne[i])
//       console.log(arrHolder)
//     }
//   }
//     for (var j = 0; j<arrTwo.length; j++){
//     if(arrOne.indexOf(arrTwo[j]) !== -1){
//       arrHolder.push(arrTwo[j]);
//       console.log(arrHolder)
//     }
//   }
  
// }
// trueArr()
// // arrComp()
//   module.exports = arrComp;


var inquirer = require("inquirer");

function start() {
inquirer 
.prompt ([
    {
        type: "confirm",
        message: "Are you ready to find out if you're smarter than a fifth grader?",
        name: "confirm",
        default: "true"
        
    }
    // {
    //     type: "input",
    //     message: "The words 'the,' 'an,' and 'a,' are known as what in English grammar?",
    //     name:"q2"

    // },
    // {
    //     type:"input",
    //     message: "Which country is both an island and a continent?",
    //     name: "q3"
    // },
    // {
    //     type: "input",
    //     message: "The Earth has 4 layers, the thickest of which is the mantle. What is the thinnest layer called?",
    //     name: "q4"
    // },
    // {   type: "input",
    //     message: "A hexagon has how many sides?",
    //     name: "q5"
    // }
    
]).then(function(quiz){
    if (quiz.confirm){
        console.log("Let's begin!");
        
    //   quiz();
        
        //     if(quiz.q2 === "articles"){
            //         console.log("Correct!");
            //     }
            
        }

    })
    quiz ();

}
start()


function quiz() {
inquirer 
.prompt ([

    {
        type: "input",
        message: "What was the name of the last Queen of France?",
        name:"q1"
    }

]).then(function(answers){
    if(quiz.q1 === "Marie Antoinette"){
        console.log("Correct");
    }else {
        console.log("Incorrect");
    }
})
}


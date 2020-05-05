function start(){
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    var guessedNumbers;

}

function guessButtonPressed(){
    var num = parseInt(document.querySelector("#guessField").value);
    alert("AAAAA");
    isValidGuess(num);
    

    
}

function isValidGuess(num){
    
    
    if (num != int){
        return false;
    }

    else if (num > 100 || num < 1){
        
        return false;
    }

    else if (guessedNumbers.includes(num)){
        return false;
    }
    else{
        guessedNumbers.push(num);
        CheckIfCorrect()
    }
}


function CheckIfCorrect(){
    
    if (num == secretNumber){
        result = "Oikein!";
    }

    if (num < secretNumber){
        result = "Väärin! Numerosi on liian pieni";
    }

    if (num > secretNumber){
        result = "Väärin! Numerosi on liian iso";
    }
    document.querySelector("#wrongGuesses").innerHTML = guessedNumbers;
    document.querySelector("#messageBox").innerHTML = result;
}


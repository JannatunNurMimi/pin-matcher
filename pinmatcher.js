  
// Declare Global variable

let randomNumberGenerate = document.getElementById('pin-generate');
let givenNumberValue = document.getElementById('input-field');
let submitButtonClick = document.getElementById('submit-button');
let matchResult = document.getElementById('match');
let notMatchResult = document.getElementById('not-match');

// Random Pin Generate

function pinGenerate(){   
    let randomNumber = Math.floor(1000+ Math.random()*9000);
    randomNumberGenerate.value = randomNumber;
    document.getElementById('number-left').innerText = 3;
    notMatchResult.style.display = 'none';
    submitButtonClick.disabled = false;
}

// Display input Field

function displayNumber(num){
    givenNumberValue.value += num;
}

// Clear all value

function clearAllValue(){
    givenNumberValue.value = '';
}

// clear value

function backspace(){
    let backspaceInput = givenNumberValue;
    let backspaceInputValue = backspaceInput.value;
    if(backspaceInputValue >= 0){
        backspaceInputValue = backspaceInputValue.substr(0, backspaceInputValue.length-1);
        backspaceInput.value = backspaceInputValue;
    }
}

// Pin Matching

submitButtonClick.addEventListener('click', function(){
    let changeNumber = document.getElementById('number-left').innerText;
    let inputNumber = givenNumberValue.value;
    
    // Check Invalid
    if(inputNumber.length != 4 || isNaN(inputNumber) || inputNumber < 0){
        alert("Please Enter Four Digit Positive Number Pin");
    }

    else{

        // match
        if(randomNumberGenerate.value == givenNumberValue.value){
            
            let area = document.getElementsByClassName('half-width');
            for (let i = 0; i < area.length; i++) {
                const element = area[i];
                element.style.display = 'none';
            }
            matchResult.style.display = 'block';
            notMatchResult.style.display = 'none';
            givenNumberValue.value = '';
            randomNumberGenerate.value = '';
        }
     //notMatch
        else{

            notMatchResult.style.display = 'block';
            matchResult.style.display = 'none';
            changeNumber--;
            document.getElementById('number-left').innerText = changeNumber;
            givenNumberValue.value = '';
            if(changeNumber == 0){
                submitButtonClick.disabled = 'true';
                randomNumberGenerate.value = '';
            }
        }
    }

})
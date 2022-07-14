var currentNumberWrapper = document.getElementById('currentNumber')
var cor = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    if (currentNumber >= 0){
        cor.style.color = 'black'
        if (currentNumber < 5){ 
            currentNumber = currentNumber + 1;
            currentNumberWrapper.innerHTML = currentNumber;
        } else {
            currentNumberWrapper.innerHTML = currentNumber;
        }
    } else {
        cor.style.color = 'red'
        if (currentNumber < 5){ 
            currentNumber = currentNumber + 1;
            currentNumberWrapper.innerHTML = currentNumber;
        } else {
            currentNumberWrapper.innerHTML = currentNumber;
        }
    }
}

function decrement() {
    if (currentNumber > 0){
        cor.style.color = 'black'
        if (currentNumber > -5){
            currentNumber = currentNumber - 1;
            currentNumberWrapper.innerHTML = currentNumber;
        } else {
            currentNumberWrapper.innerHTML = currentNumber;
        }
    } else {
        cor.style.color = 'red'
        if (currentNumber > -5){
            currentNumber = currentNumber - 1;
            currentNumberWrapper.innerHTML = currentNumber;
        } else {
            currentNumberWrapper.innerHTML = currentNumber;
        }
    }
}


/* function increment() {
    if (currentNumber < 5){ 
       currentNumber = currentNumber + 1;
       currentNumberWrapper.innerHTML = currentNumber;
    } else if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red'
    }    
}

function decrement() {
    if (currentNumber > -5){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red'
    } 
} */
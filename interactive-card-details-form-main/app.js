
const inputs = document.querySelectorAll('input');
let isFilled = true;
const form = document.getElementById('form');
const success = document.querySelector('.confirmed');
const confirmBtn = document.getElementById('confirm-btn');
const continueBtn = document.getElementById('continue-btn');


function checkInputs(){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value = ''){
            ifFilled = false;
        }
    }
}

function showSuccess(){
    if(isFilled = true){
        form.style.display = 'none';
        success.style.visibility = 'visible';
    }

}

function hideSuccess(){
    if(true){
        success.style.visibility = 'hidden';
        form.style.display = 'block';
    }
}

confirmBtn.addEventListener('click', showSuccess);
continueBtn.addEventListener('click', hideSuccess);

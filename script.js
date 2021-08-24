const billInput = document.querySelector('#bill');
const peopleInput = document.querySelector('#people');
const wrapperTip = document.querySelector('.wrapper-tip');
const tipAmountInfo = document.querySelector('.tip-amount');
const totalInfo = document.querySelector('.total');
const tipCustom = document.querySelector('.custom');
const billInfo = document.querySelector('.billEmptyInfo');
const tipInfo = document.querySelector('.tipEmptyInfo');
const peopleInfo = document.querySelector('.peopleEmptyInfo');
const resetBtn = document.querySelector('.reset');

let tipAmount;
let total;
let percent = 0;



const counter = () => {
    tipAmount = parseFloat(billInput.value) * percent /parseFloat(peopleInput.value);
    total = (parseFloat(billInput.value) + parseFloat(billInput.value) * percent) /parseFloat(peopleInput.value);

    tipAmount = tipAmount.toFixed(2);
    total = total.toFixed(2);
    totalInfo.innerHTML = `$${total}`;
    tipAmountInfo.innerHTML = `$${tipAmount}`;
}

const checkTip = (e) => {

    // resetBtn.classList.add('click');
    // e.target.className = 'tip-percent clickBtn';
    percent = e.target.closest('button').value;
    tipCustom.value = 0;
    if(billInput.value > 0 && percent !== 0 && peopleInput.value > 0){
        tipInfo.innerHTML = "";
        counter();
    } else {
        checkEmptyField();
    }
}

const checkTipCustom = () => {
    resetBtn.classList.add('click');

    percent = tipCustom.value/100;
    if(billInput.value > 0 && percent !== 0 && peopleInput.value > 0){
        tipInfo.innerHTML = "";
        counter();
    } else {
        checkEmptyField();
    }
}

const check = () => {

    resetBtn.classList.add('click');

    if(billInput.value > 0 && percent !== 0 && peopleInput.value > 0){
        billInfo.innerHTML = "";
        peopleInfo.innerHTML = "";
        billInput.classList.remove('wrong-border');
        peopleInput.classList.remove('wrong-border')

        counter();
    } else {
        checkEmptyField();
    }
}

const checkEmptyField = () => {
    billInfo.innerHTML = "";
    peopleInfo.innerHTML = "";
    tipInfo.innerHTML = "";
    billInput.classList.remove('wrong-border');
    peopleInput.classList.remove('wrong-border')

    if(billInput.value <= 0) {
        billInfo.innerHTML = "Can't be zero";
        billInput.classList.add('wrong-border')
    }
    if(percent == 0) {
        tipInfo.innerHTML = "You must choose something";
    }
    if(peopleInput.value <= 0) {
        peopleInfo.innerHTML = "Can't be zero";
        peopleInput.classList.add('wrong-border')
    }

}

const reset = () => {
    billInput.value = 0;
    percent = 0;
    tipCustom.value = 0;
    peopleInput.value = 0;
    totalInfo.innerHTML = `$0.00`;
    tipAmountInfo.innerHTML = `$0.00`;

    billInfo.innerHTML = "";
    peopleInfo.innerHTML = "";
    tipInfo.innerHTML = "";
    billInput.classList.remove('wrong-border');
    peopleInput.classList.remove('wrong-border');
    resetBtn.classList.remove('click');
}

tipCustom.addEventListener('keyup', checkTipCustom)
billInput.addEventListener('keyup', check);
peopleInput.addEventListener('keyup', check);
wrapperTip.addEventListener('click', checkTip);
resetBtn.addEventListener('click', reset);
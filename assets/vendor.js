const userInput = document.getElementById('input-number');

const btnAdd = document.getElementById('addBtn');
const btnSub = document.getElementById('subBtn');
const btnMult = document.getElementById('multBtn');
const btndiv = document.getElementById('divbtn');
const calcDescription = document.getElementById('calc-description');
const calcResult = document.getElementById('calc-result');

function outputResult(result,text){
    calcDescription.textContent = text;
    calcResult.textContent = result;
}


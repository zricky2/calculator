//incomplete still have a edge cases to add
var cancel = document.getElementById('cancel');
var sign = document.getElementById('sign');
var modulus = document.getElementById('modulus');
var divide = document.getElementById('divide');

var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var multiply = document.getElementById('multiply');

var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var minus = document.getElementById('minus');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var plus = document.getElementById('plus');

var zero = document.getElementById('zero');
var decimal = document.getElementById('decimal');
var equal = document.getElementById('equal');

var para = document.getElementById("calculation");

var firstNum, secondNum, answer = 0;
var operation = ""
var first, oper;

//row 1
cancel.addEventListener("click", e => {
    para.innerHTML = 0;
})

sign.addEventListener("click", e => {
    if (para.innerHTML[0] == "-") {
        para.innerHTML = (para.innerHTML).slice(1, (para.innerHTML).length);
    } else {
        const negative = "-";
        para.innerHTML = negative + para.innerHTML;
    }
})

modulus.addEventListener("click", e => {
    operation = "%";
    oper = true;
    first = true;
    firstNum = para.innerHTML;
    para.innerHTML = 0;
})

divide.addEventListener("click", e => {
    operation = "/";
    oper = true;
    first = true;
    firstNum = para.innerHTML;
    para.innerHTML = 0;
})

//row 2
seven.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "7";
    } else {
        para.innerHTML += "7"
    }
})

eight.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "8";
    } else {
        para.innerHTML += "8"
    }
})

nine.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "9";
    } else {
        para.innerHTML += "9"
    }
})

multiply.addEventListener("click", e => {
    operation = "x";
    oper = true;
    first = true;
    firstNum = para.innerHTML;
    para.innerHTML = 0;
})


//row 3
four.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "4";
    } else {
        para.innerHTML += "4"
    }
})

five.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "5";
    } else {
        para.innerHTML += "5"
    }
})

six.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "6";
    } else {
        para.innerHTML += "6"
    }
})

minus.addEventListener("click", e => {
    operation = "-";
    oper = true;
    first = true;
    firstNum = para.innerHTML;
    para.innerHTML = 0;
})
//row4
one.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "1";
    } else {
        para.innerHTML += "1"
    }
})

two.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "2";
    } else {
        para.innerHTML += "2"
    }
})

three.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        para.innerHTML = "3";
    } else {
        para.innerHTML += "3"
    }
})

plus.addEventListener("click", e => {
    operation = "+";
    oper = true;
    first = true;
    firstNum = para.innerHTML;
    para.innerHTML = 0;
})
//row5
zero.addEventListener("click", e => {
    if (para.innerHTML == "0") {
        return
    } else {
        para.innerHTML += "0"
    }
})

decimal.addEventListener("click", e => {
    if (para.innerHTML.search(".") == -1) {
        para.innerHTML += ".";
    }
})

equal.addEventListener("click", e => {
    if (first && oper) {
        secondNum = para.innerHTML;
        switch (operation) {
            case "-":
                answer = firstNum - secondNum;
                para.innerHTML = `${answer}`;
                break;
            case "+":
                answer = firstNum + secondNum;
                para.innerHTML = `${answer}`;
                break;
            case "x":
                answer = firstNum * secondNum;
                para.innerHTML = `${answer}`;
                break;
            case "/":
                answer = firstNum / secondNum;
                para.innerHTML = `${answer}`;
                break;
            case "%":
                answer = firstNum % secondNum;
                para.innerHTML = `${answer}`;
                break;
        }
        first, oper = false, false, false;
        firstNum, secondNum = 0,0;
        operation = "";
    }
})
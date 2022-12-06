const screen = document.getElementById("screen")
const num = document.querySelectorAll(".key.num")
const operator = document.querySelectorAll(".key.operator")
const equal = document.querySelectorAll(".key.equal")[0]
const clear = document.getElementById("clear")

let isOperatorClicked = false
let operatorClicked = ""
let firstNum = ""
let secondNum = ""

const add = (num1, num2) => {
    return num1 + num2
}

const substract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

const operate = (operator , num1 , num2) =>{
    return operator(num1 , num2)
}

const stringToOperator = {
    "+" : add,
    "-" : substract,
    "/" : divide,
    "*" : multiply,
}

const resetCalculator = () => {
    isOperatorClicked = false
    operatorClicked = ""
    firstNum = ""
    secondNum = ""
    screen.textContent = ""
}

const result = () => {
    op = stringToOperator[operatorClicked]
    let opResult =  operate(op, Number(firstNum), Number(secondNum))
    screen.textContent = opResult
    firstNum = opResult
    secondNum = ""
}

for (let i = 0; i < num.length; i++) {
    const number = num[i];

    number.addEventListener("click", () => {
        if (!isOperatorClicked) {
            firstNum += number.textContent
            screen.textContent = firstNum
        } else {
            secondNum += number.textContent
            screen.textContent = secondNum
        }
    })
}

for (let i = 0; i < operator.length; i++) {
    const op = operator[i];

    op.addEventListener("click", () => {
        if (isOperatorClicked) {
            result()
        } else {
            isOperatorClicked = true
        }
        isOperatorClicked = true
        operatorClicked = op.textContent
        screen.textContent += operatorClicked
    })
}

equal.addEventListener("click", () => {
    result()
})

clear.addEventListener("click", () => {
    resetCalculator()
})
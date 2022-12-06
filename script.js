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

const screen = document.getElementById("screen")
const num = document.querySelectorAll(".key.num")
const operator = document.querySelectorAll("operator")
const equal = document.querySelectorAll("equal")

let operatorClicked = false
let firstNum = ""
let secondNum = ""

for (let i = 0; i < num.length; i++) {
    const number = num[i];
    number.addEventListener("click", () => {
        if (!operatorClicked) {
            firstNum += number.textContent
            screen.textContent = firstNum
        } else {
            secondNum += number.textContent
            screen.textContent = secondNum
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
    let leftInput = document.getElementById("left");
    let rightInput = document.getElementById("right");
    let operatorSelect = document.getElementById("operator");
    let calculateBtn = document.getElementById("calculate");

    calculateBtn.addEventListener("click", calculate);

    setInterval(() => alert("Please, use me..."), 30000);

    function calculate() {
        let left = parseInt(leftInput.value.trim());
        let right = parseInt(rightInput.value.trim());
        let operator = operatorSelect.value;
        let result;

        if (left < 0 || right < 0 || left < 0 || right < 0) {
            alert("Error :(");
            console.log("Error :(")
            return;
        }

        if (right === 0 && (operator === "/" || operator === "%")) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        if (operator === "+") {
            result = left + right;
        } else if (operator === "-") {
            result = left - right;
        } else if (operator === "*") {
            result = left * right;
        } else if (operator === "/") {
            result = left / right;
        } else if (operator === "%") {
            result = left % right;
        }

        alert(result);
        console.log(result);
    }
});

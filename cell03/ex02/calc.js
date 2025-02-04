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

        if (left < 0 || right < 0) {
            alert("Error :(");
            return;
        }

        if (right === 0 && (operator === "/" || operator === "%")) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;
        switch (operator) {
            case "+": result = left + right; break;
            case "-": result = left - right; break;
            case "*": result = left * right; break;
            case "/": result = left / right; break;
            case "%": result = left % right; break;
        }

        alert(result);
        console.log(result);
    }
});

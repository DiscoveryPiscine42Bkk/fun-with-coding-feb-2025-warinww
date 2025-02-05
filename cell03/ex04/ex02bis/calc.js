$(document).ready(function () {

    setInterval(() => alert("Please, use me..."), 30000);

    $("#calculate").click(function() {
        let left = parseInt($("#left").val().trim());
        let right = parseInt($("#right").val().trim());
        let operator = $("#operator").val();
        let result;

        if (left < 0 || right < 0 || isNaN(left) || isNaN(right)) {
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
    });
});

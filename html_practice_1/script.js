let button = document.getElementById("calculate");

button.addEventListener("click", function() {

    let score = Number(document.getElementById("score").value);

    if (score >= 90) {
        document.getElementById("result").textContent = "Grade: A";
    }
    else if (score >= 80) {
        document.getElementById("result").textContent = "Grade: B";
    }
    else if (score >= 70) {
        document.getElementById("result").textContent = "Grade: C";
    }
    else {
        document.getElementById("result").textContent = "Grade: F";
    }

});

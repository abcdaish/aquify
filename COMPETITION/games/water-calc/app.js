
const quiz = document.getElementById("quiz");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");
const exercise = document.getElementById("activity");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

function displayResults() {
    let weightValue = weight.value;
    let weightVal = Math.round((weight.value * 2.20462) * (2/3));
    let heightVal = height.value;
    let ounces = weightVal;
    let ageVal = age.value;
    function ageCalc(){
    if (ageVal > 60) {
        let sum = ounces += 20;
        return sum;
    }
    };
    function exerciseCalc(){
    if (exercise.value > 0) {
        let parts = exercise.value / 30;
        let sum = (parts + ounces) * 12;
        return sum;
    }
};


exerciseCalc();
ageCalc();
console.log(ounces);

    let cups = Math.round(ounces / 8);
    let litres = cups / 4.227;
    let h1 = document.createElement("h1");
    h1.textContent = cups + " cups";
    document.body.appendChild(h1);

    let p = document.createElement("p");
    p.textContent = "Based on your weight of " + weightValue + " kg, you are recommended to drink a total of " + cups + " cups of water daily. Our system is also based on the total minutes of physical activity done by you. One cup is equal to 250 ml according to our system. Hence, you have to drink " + litres + " litres of water.";
    document.body.appendChild(p);

    reset.addEventListener('click', () => {
        h1.remove();
        p.remove();
    });

}

submit.addEventListener('click', displayResults);

function returnFalse() {
    return false;
}


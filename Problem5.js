// let weight = parseFloat(prompt("Enter your weight in kg: "));
// let height = parseFloat(prompt("Enter your height in meters: "));
let weight=68;
let height=1.7;
let BMI = weight / (height ** 2);
console.log(BMI.toFixed(2));

if (BMI < 18.5) {
    console.log("You are underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are normal weight.");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("You are overweight.");
} else {
    console.log("You are obese.");
}

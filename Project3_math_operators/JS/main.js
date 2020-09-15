function addition_function() {
    var addition = 10 + 1;
    document.getElementById("math").innerHTML = "10 + 1 = " + addition;
} //addition function

function subtraction_function() {
    var subtraction = 12 - 6;
    document.getElementById("math2").innerHTML = "12 - 6 = " + subtraction;
} //subtraction function

function multiplication_function() {
    var multiplication = 9 * 9;
    document.getElementById("math3").innerHTML = "9 * 9 = " + multiplication;
}  //multiplication function

function division_function() {
    var division = 8 / 4;
    document.getElementById("math4").innerHTML = "8 / 4 = " + division;
}  //division function

function more_math() {
    var simple_math = (5+5) * 2 /10 -1;
    document.getElementById("math5").innerHTML = "5 plus 5, multiplied by 2, divided by 10 and then subtracted by 1 equals " + simple_math;
}  //multiple operators

function more_math2() {
    var simple_math2 = 47 % 3;
    document.getElementById("math6").innerHTML = "when you divide 47 by 3 you have a remainder of: " + simple_math2;
}  //remainder function

function negation_function() {
    var x = 21;
    document.getElementById("math7").innerHTML = -x;
}  //negation function

function increment_function() {
    var A = 7;
    A++;
    document.write(A);
}  //increment function

function decrement_function() {
    var B = 4;
    B--;
    document.write(B);
}  //decrement function

function round_function() {
    var C = 4.75;
    document.getElementById("math10").innerHTML = Math.round(C);
}  //rounding function

window.alert(Math.random());  //random number between 0 and 1

window.alert(Math.random()*100);  //random number betweeen 0 and 100


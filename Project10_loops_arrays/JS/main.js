function Call_Loop() {
    var Digit ="";
    var X = 10;
    while (X>0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
} //while loop counting down

function string_length() {
    var M = "Rise and Shine!";
    var N = M.length;
    document.getElementById("string").innerHTML=N;
}  //string length

var Instruments = ["Trombone", "Oboe", "Harp", "Triangle"];
var content = "";
var Y;
function for_loop() {
    for (Y=0; Y<Instruments.length; Y++) {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
} //for loop

function array_Function() {
    var num=[];
    num[0]="12";
    num[1]="24";
    num[2]="48";
    document.getElementById("Array").innerHTML = "Two dozen is " + num[1] + ".";
} //create an array

function constant_function() {
    const Tree = {type: "coniferous", species: "Spruce", leaf_shape: "needle"};
    Tree.seed = "cone";
    Tree.leaf_shape = "pointy";
    document.getElementById("constant").innerHTML = "The " + Tree.species + " seed type is " + Tree.seed + 
    "and the leaf shape is " + Tree.leaf_shape;
} //creating a constant

function let_var() {
var g = 77;
document.write(g);
{
    let g = 88;
    document.write("<br>" + g);
}
document.write("<br>" + g);
} //let variable

function return_statement(name) {
    return "Hello, my name is " + name;
}
document.getElementById("return").innerHTML = return_statement("Sally");
//return statement

let burger = {
    pattie: "beef ",
    topping: "bacon ",
    veggie: "lettuce ",
    bun: "sesame seed ",
    description: function() {
        return "The burger is a " + this.pattie + "pattie with " + this.topping + "and " + this.veggie + "on a "
        + this.bun + "bun.";
    }
};
document.getElementById("burger").innerHTML = burger.description();
//object function

var text = "";
var i;
for (i = 0; i<10; i++) {
    if(i === 5) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("breakloop").innerHTML = text;
// break statement

var text2 = "";
var b;
for (b = 0; b <10; b++) {
    if (b===2) {continue;}
    text2 += "the number is " + b + "<br>";
}
document.getElementById("continue").innerHTML = text2;
//continue statement
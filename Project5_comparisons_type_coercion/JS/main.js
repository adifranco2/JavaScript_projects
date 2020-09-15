document.write(typeof 101);  //Type of operator

function NaN_function() {
    document.getElementById("test1").innerHTML = 0/0;
} //display NaN

function true_function() {
    document.getElementById("test2").innerHTML = isNaN('A text sentence');
} //ddisplay NaN true

function false_function() {
    document.getElementById("test3").innerHTML = isNaN('101');
} //display NaN false

function infinity_function() {
    document.write(3E311);
} //display infinity

function neg_infinity() {
    document.write(-4E309);
} //display negative infinity

function boolean_true() {
    document.write(67>3);
}  ///display Boolean true

function boolean_false() {
    document.write(7<5);
}  //display Boolean false

console.log(3*4); //display in console

function coercion_function() {
    document.write("20" + 20);
}  //display coercion of string and number

console.log(8<3); //display false in console

function comparison_true() {
    document.write(3==3);
} //display comparison true with doubel equal

function comparison_false() {
    document.write(4==5);
} ///display comparision false with double equal

function tripleequal_true() {
    var h=9;
    var j=9;
    document.write(h===j);
}  ///display true

function tripleequal_falseall() {
    var k="hot";
    var l=5;
    document.write(k===l);
}  //display false with different type and different value

function tripleequal_falsetype() {
    var m=3;
    var n="3";
    document.write(m===n);
}  //display false with different type but same value

function tripleequal_falsevalue() {
    var p=8;
    var q=9;
    document.write(p===q);
}  //display false with same type but different value

function and_operatortrue() {
    document.write(6>1 && 9>5);
} //boolean AND operator true

function and_operatorfalse() {
    document.write(8>11 && 23>11);
} //boolean And operator false

function or_operatortrue() {
    document.write(7>3 || 16>8);
} //Boolean OR operator true

function or_operatorfalse() {
    document.write(2>5 || 4>9);
} //boolean Or operator false

function not_function() {
    document.getElementById("not").innerHTML=!(55>33);
}  //not operator false

function not_functiontrue() {
    document.getElementById("notTrue").innerHTML=!(1>2);
}  //not operator true
function sentence(){
    var part1 = "The rain ";
    var part2 = "in Spain ";
    var part3 = "stays mainly in ";
    var part4 = "the plain.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
} //concatenate method

function slice_method() {
    var sentence = "She sells sea shells by the sea shore.";
    var section = sentence.slice(14,20);
    document.getElementById("slice").innerHTML = section;
} //slice method

function upper_function() {
    var text = document.getElementById("uppercase").innerHTML;
    document.getElementById("uppercase").innerHTML = text.toUpperCase();
} //convert to upper case

function search_function() {
var str = "Ready or not";
var pos = str.search("or");
document.getElementById("searched").innerHTML = pos;
} //searching the string

function string_method() {
    var x = 227;
    document.getElementById("numbers_to_string").innerHTML=x.toString();
} //number to string method

function precision_method() {
    var y = 357.393939488
    document.getElementById("precision").innerHTML = y.toPrecision(5);
}  //formats number to specified length

function fixed_function() {
    var p = 3.1415;
    var n = p.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
} //number to string fixed

function valueof_function() {
    var t = 27;
    var m = t.valueOf()
    document.getElementById("valueof").innerHTML = m;
} //valueof method
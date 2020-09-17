var x = 2;
function Add_numbers() {
    document.write(8 + x + "<br>");
}
function Multiple_numbers() {
    document.write(x * 10 + "<br>");
}
Add_numbers();
Multiple_numbers();
//using global variable

function Subtract_numbers() {
    var y = 4
    document.write(8 - x + "<br>");
}
function Divide_numbers() {
    document.write(8 / x);
}
Subtract_numbers();
Divide_numbers();
//using local variable

function Add_numbers1() {
    var w = 3
    console.log(7 + w);
}
function Multiple_numbers1() {
    console.log(w * 10);
}
Add_numbers1();
Multiple_numbers1();
//console test local variable

function time_function() {
    if(new Date().getHours() > 18) {
    document.getElementById("time").innerHTML = "Good Evening";
    }
}  //If statement and Time function

function aarp_function() {
    age = document.getElementById("age").value;
    if (age >= 50) {
        aarp = "Being " + age + ", you are eligible to join AARP.";
    }
    else {
        aarp = "Being " + age + ", you are not eligible to join AARP.";
    }
    document.getElementById("your_age").innerHTML = aarp;
    } //if statement with else statement added

    function time_function() {
        var time = new Date().getHours();
        var Reply;
        if (time < 12 == time > 0) {
            Reply = "It's morning time!";
        }
        else if (time > 12 == time < 18) {
            Reply = "It's the afternoon.";
        }
        else {
            Reply = "It's evening time.";
        }
        document.getElementById("time_of_day").innerHTML = Reply;
    } //else if statement
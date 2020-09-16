function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function age_function() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored "
    + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Bird(Size, Color, Movement, Purpose) {
    this.Bird_Size = Size;
    this.Bird_Color = Color;
    this.Bird_Movement = Movement;
    this.Bird_Purpose = Purpose;
} //creating the object type

var Emu = new Bird("X-Large", "Brown", "Run", "Graze");
var Eagle = new Bird("Large", "Brown", "Fly", "Predator");
function new_keyword() {
    document.getElementById("New_and_This").innerHTML = "An eagle is a " + Eagle.Bird_Size + Eagle.Bird_Color + "-colored " + Eagle.Bird_Purpose;
} //adding new objects

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count() {
        var Starting_point = 10;
        function Plus_one () {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
} //nested function
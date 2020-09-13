function My_Function() {
    var str="This text is blue.";
    var result=str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML=result;
}  //function displaying blue text

function concatenate() {
    var sentence = "This course has been";
    sentence += " a struggle.";
    document.getElementById("concatenate").innerHTML=sentence;
}  //function concatenating string
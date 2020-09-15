function my_dictionary() {
    var Fish = {
        Species:"Tarpon",
        Water_Type:"Salt",
        Color:"Silver",
        Length_Inches:84,
        Edible:"No",
    };
    delete Fish.Edible; //deleted KVP Edible
    document.getElementById("dictionary").innerHTML = Fish.Edible;
}  //created dictionary with KVP

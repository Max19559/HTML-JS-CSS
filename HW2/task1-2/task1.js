function showNewPage (){
    location.href = "https://www.google.com";
}

function deleteAndShowText (){
    var text = document.getElementById("textBlock");
    if(text.style.display === "none"){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function getName(){

    var name = prompt("Enter your name","Ivan");
    var check = parseInt(name.replace( /\D/g, '')) || 0;
    var newName="";
    if(!(check==name)){
        for(var i=0; i<name.length;i++){
            if(name[i].toUpperCase()===name[i]){
                newName += name[i].toLowerCase();
            } else{
                newName += name[i].toUpperCase();
            }
        }
        alert(newName);
    } else{
        alert(name.split("").reverse().join(""));
    }
}
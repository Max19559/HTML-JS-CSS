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

setTimeout(function getName(){

    var name = prompt("Enter your name","Ivan");
    var check = parseInt(name.replace( /\D/g, '')) || 0;
    var newName="";
    if(check == 0){
        for(var i=0; i<name.length;i++){
            if(i % 2 == 0){
                newName += name[i].toUpperCase();
            } else{
                newName += name[i].toLowerCase();
            }
        }        
    } else{
        newName = name.split("").reverse().join("");
    }
    document.getElementById('head').append(`User: ${name} - ${newName}`);
    document.getElementById("head").style.color = "red"
},200);


var a = document.querySelector(".btn");
a.addEventListener("click",function(){
    var randomNum = Math.floor(Math.random()*6+1);
    var randomDice = "dice" + randomNum + ".png";
    var randomSource = "image/" + randomDice;
    var image1= document.querySelectorAll("img")[0];
    
    image1.setAttribute("src", randomSource);
    var randomNum2 = Math.floor(Math.random()*6+1);
    var randomSource2 = "image/dice" + randomNum2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomSource2);
    
})
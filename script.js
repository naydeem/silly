//nadim

var slideIndex = 0;

$("#d1").click(function(){
    $(".pic").css("right","0px");
    slideIndex=1;
    console.log(slideIndex);
    if(slideIndex==1){
        $("#d1").css("background-color","black");
        $("#d2").css("background-color","gray");
        $("#d3").css("background-color","gray");
        $("#d4").css("background-color","gray");
    }
})
$("#d2").click(function(){
    $(".pic").css("right","500px");
    slideIndex=2;
    console.log(slideIndex);
    if(slideIndex==2){
        $("#d1").css("background-color","gray");
        $("#d2").css("background-color","black");
        $("#d3").css("background-color","gray");
        $("#d4").css("background-color","gray");
    }
})
$("#d3").click(function(){
    $(".pic").css("right","1000px");
    slideIndex=3;
    console.log(slideIndex);
    if(slideIndex==3){
        $("#d1").css("background-color","gray");
        $("#d2").css("background-color","gray");
        $("#d3").css("background-color","black");
        $("#d4").css("background-color","gray");
    }
})
$("#d4").click(function(){
    $(".pic").css("right","1500px");
    slideIndex=4;
    console.log(slideIndex);
    if(slideIndex==4){
        $("#d1").css("background-color","gray");
        $("#d2").css("background-color","gray");
        $("#d3").css("background-color","gray");
        $("#d4").css("background-color","black");
    }
})

var inputValue = $(".pic").css("right");

function button(){
    for (var i = 1; i <= 4; i++) {
        if (slideIndex == i) {
            $("#d" + i).css("background-color", "black");
        } else {
            $("#d" + i).css("background-color", "gray");
        }
        console.log(inputValue);
    }
}

function left(){
    $(".pic").animate({
        right:"-=500"
    });
    slideIndex++;
    console.log(slideIndex);
}

function left2(){
    var inputValue = $(".pic").css("right");
if (inputValue==="0px"){
    $(".pic").css("right","2000px");
slideIndex=0;
}
    left();
    button();
  if (slideIndex>=5){
    slideIndex=0;
    console.log(slideIndex);
  }

}

setInterval(left2,4000);

//hawa

//oliver
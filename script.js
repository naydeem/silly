//nadim

var slideIndex = 0;

$("#d1").click(function(){
    $(".pic").css("right","0px");
    slideIndex=1;
    if(slideIndex==1){
        $("#d1").css("background-color","white");
        $("#d2").css("background-color","gray");
        $("#d3").css("background-color","gray");
        $("#d4").css("background-color","gray");
    }
})
$("#d2").click(function(){
    $(".pic").css("right","700px");
    slideIndex=2;
    (slideIndex);
    if(slideIndex==2){
        $("#d1").css("background-color","gray");
        $("#d2").css("background-color","white");
        $("#d3").css("background-color","gray");
        $("#d4").css("background-color","gray");
    }
})
$("#d3").click(function(){
    $(".pic").css("right","1400px");
    slideIndex=3;
    if(slideIndex==3){
        $("#d1").css("background-color","gray");
        $("#d2").css("background-color","gray");
        $("#d3").css("background-color","white");
        $("#d4").css("background-color","gray");
    }
})
$("#d4").click(function(){
    $(".pic").css("right","2100px");
    if(slideIndex==4){
        $("#d1").css("background-color","gray");
        $("#d2").css("background-color","gray");
        $("#d3").css("background-color","gray");
        $("#d4").css("background-color","white");
    }
})

var inputValue = $(".pic").css("right");

function button(){
    for (var i = 1; i <= 4; i++) {
        if (slideIndex == i) {
            $("#d" + i).css("background-color", "white");
        } else {
            $("#d" + i).css("background-color", "gray");
        }
    }
}

function left(){
    $(".pic").animate({
        right:"-=700"
    });
    slideIndex++;
}

function left2(){
    var inputValue = $(".pic").css("right");
if (inputValue==="0px"){
    $(".pic").css("right","2800px");
slideIndex=0;
}
    left();
    button();
  if (slideIndex>=5){
    slideIndex=0;
  }

}

setInterval(left2,4000);




//hawa

$(document).ready(function() {
    
    const savedButton = $('<button>', {
        id: 'savedButton',
        class: 'saved-button',
        tabIndex: '0',
        text: 'Sparade'
    });

    const homeButton = $('<button>', {
        id: 'homeButton',
        class: 'home-button h_button',
        tabIndex: '1',
        text: 'Hem'
    });

    const discoverButton = $('<button>', {
        id: 'discoverButton',
        class: 'discover-button',
        tabIndex: '2',
        text: 'Upptäck'
    });

    const listButton = $('<button>', { 
        id: 'listButton',
        class: 'list-button',
        tabIndex: '3',
        text: 'Lista'
    });

    const searchButton = $('<button>', { 
        id: 'searchButton',
        class: 'search-button',
        tabIndex: '4',
        text: 'Sök'
    })

    const searchContainer = $('<div>', { 
        class: 'search-container'
    }).append(searchButton); 

    $('#UI').append(homeButton, savedButton, listButton, discoverButton,);
    
    $('#homeButton').attr("tabIndex","1");

    $("#searchButton").click(function() {
        var searchTerm = $("#searchInput").val().trim();
    });
}); 

$(document).ready(function() {
    $("#menuIcon").click(function() {
        $("#collapsedButtons").toggle();
    });
});
//oliver

// $('body').click(function(){
//     window.open('https://www.socialism101.com/basic')
// });
$('.o_play').click(function(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
});
$('#o_movie1').click(function(){
    window.open('https://www.imdb.com/title/tt1630029/')
});
$('#o_movie2').click(function(){
    window.open('https://www.imdb.com/title/tt1877830/')
});
$('#o_movie3').click(function(){
    window.open('https://www.imdb.com/title/tt1160419/')
});
$('#o_movie4').click(function(){
    window.open('https://www.imdb.com/title/tt4633694/')
});
$('#o_movie5').click(function(){
    window.open('https://www.imdb.com/title/tt9362722/')
});
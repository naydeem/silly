//nadim

//hawa

$(document).ready(function() {
    
    const HomeButton = $('<button>', {
        id: 'HomeButton',
        class: 'Home-button',
        text: 'Hem'
    });

    const DiscoverButton = $('<button>', {
        id: 'DiscoverButton',
        class: 'Discover-button',
        text: 'Upptäck'
    });

    const Savedbutton = $('<button>', {
        id: 'Saved',
        class: 'Saved-button',
        text: 'Sparade'
    });
    
    $('#UI').append(HomeButton, DiscoverButton, Savedbutton);

    
    $("#searchButton").click(function() {
        var searchTerm = $("#searchInput").val().trim();
        
    
    });
});

//oliver
//nadim

//hawa

$(document).ready(function() {
    
    const savedButton = $('<button>', {
        id: 'savedButton',
        class: 'saved-button',
        text: 'Sparade'
    });

    const homeButton = $('<button>', {
        id: 'homeButton',
        class: 'home-button',
        text: 'Hem'
    });

    const discoverButton = $('<button>', {
        id: 'discoverButton',
        class: 'discover-button',
        text: 'Upptäck'
    });

    const ListButton = $('<button>', {
        id: 'listButton',
        class: 'list-button',
        text: 'Min Lista'
    });

    
    $('#UI').append(homeButton, savedButton, ListButton,  discoverButton);

    
    $("#searchButton").click(function() {
        var searchTerm = $("#searchInput").val().trim();
        
        

    });
});

//oliver
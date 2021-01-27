$("#search-button").on("click", function(event) {
    event.preventDefault();

    var searchTerm = $("#search-topic").val();
    alert(searchTerm);



});

$("#clear-button").on("click", function(event) {
    event.preventDefault();
    
    // Clear the search fields.
    $("#search-topic").val("");

});

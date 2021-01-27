const APIKey = "OCglRxmAfirxvaaeZ3kbH5a50iDmGE1U";
var searchInput = "election";
// var searchInput = $("#search-term").val();


var querryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=${APIKey}`;


$.ajax({ 
        url: querryUrl,
        method: "GET"
}).done(function(response) {
    console.log(response);
}).fail(function(error) {
    console.log(error);
})
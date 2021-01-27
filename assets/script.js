const APIKey = "OCglRxmAfirxvaaeZ3kbH5a50iDmGE1U";
var submitBtn = $("#submit");

submitBtn.click(function(event) {
    event.preventDefault;
    searchInput = $("#search-term").val();
    var querryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=${APIKey}`;

    var startYearInput = $('#start-year').val();
    if (startYearInput) {
        var startDate = $('#start-year').val() + '0101'; //API requires 8 digit format date: e.g. today's date 20210127
        querryUrl = querryUrl + `&begin_date=${startDate}`;
    }

    var endYearInput = $('#end-year').val();
    if (endYearInput) {
        var endDate = endYearInput + '1231';
        querryUrl = querryUrl + `&begin_date=${endDate}`;
    }
    console.log("querry: " + querryUrl);


    if (searchInput) {
    $.ajax({ 
        url: querryUrl,
        method: "GET"
    }).done(function(response) {    
        var articles = response.response.docs;
        console.log(articles);
    }).fail(function(error) {
    console.log(error);
    });
    } else {
    alert("search term is required!");
    }
});




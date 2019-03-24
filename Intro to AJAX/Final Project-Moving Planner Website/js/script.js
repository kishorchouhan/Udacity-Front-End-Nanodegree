function loadData() {

    /*
    The $ that shows up in variable names, like $body for example, is just a character like any other.
    In this case, it refers to the fact that the variable referenced by $body is a jQuery collection, not a DOM node.
    */
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetName = $('#street').val();
    var cityName = $('#city').val();
    var address = streetName + ', ' + cityName;
    var streeviewKey = "Your Key Here";
    $greeting.text('So, you want to live at ' + address + '?');

    var addressUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&key=' + streeviewKey + '&location=' + address + '';
    $body.append('<img class="bgimg" src="' + addressUrl + '">');

    // Load NYTimes artical
    var nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityName + '&sort=newest&fq=news_desk:("Home")&api-key=HzVA58r2gBvpmP8yela4yfjs9yCU3sJx';
    
    $.getJSON(nytUrl, function (data) {
        console.log(data); // This will log the received data on console.
        $nytHeaderElem.text('New York Times Articles About ' + cityName);

        var articleArray = data.response.docs;

        for (var i = 0; i < articleArray.length; i++) {
            var articleData = articleArray[i];
            $nytElem.append('<li class="article">' + '<a href="' + articleData.web_url + '">' + articleData.headline.main + '</a>' + '<p>' + articleData.snippet + '</p>' + '</li>');
        };
    }).fail(function (e) {
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });

    // load wikipedia data
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityName + '&format=json&callback=wikiCallback';

    var wikiRequestTimeout = setTimeout(function () {
        $wikiElem.text("failed to get wikipedia resources");
    }, 8000);

    $.ajax(wikiUrl, {
        dataType: 'jsonp',
        success: function (response) {
            console.log(response); // To see response in console
            var articleList = response[1];
            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
            };
            clearTimeout(wikiRequestTimeout);
        }
    });

    return false;
};

$('#form-container').submit(loadData);
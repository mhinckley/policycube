var searchTerm = localStorage.getItem("userInput");
var searchResults = [];

function search() {

    //Find results by matching search term
    for (var i = 0; i < universe.length; i++) {
        if (universe[i]["title"].toLowerCase().includes(searchTerm.toLowerCase())) {
                searchResults.push(universe[i]);
        }
    };

//NEED TO FIX DATE FORMATS
/*
    //Convert date strings to intergers
    for (var result in searchResults) {
        var dateInt = parseInt(searchResults[result]["date"], 10);
        delete searchResults[result]["date"];
        searchResults[result]["date"] = dateInt; 
    };

    //Order results by date
    searchResults.sort(function (a, b) {
      if (a.date > b.date) {return 1;}
      if (a.date < b.date) {return -1;}
      return 0;
    });

    //Convert date intergers back to strings --> Not sure why, but won't print in HTML without doing so
    for (var result in searchResults) {
        var dateStr = searchResults[result]["date"].toString();
        delete searchResults[result]["date"];
        searchResults[result]["date"] = dateStr; 
    };

*/

    if (searchResults[0] != null) {
        
        $ ("#resultSum").append(searchResults.length, " results containing '", searchTerm, "':" )

        for (var i = 0; i < searchResults.length; i++) {
            
            $( "#resultList" ).append(searchResults[i]["title"] 
                , '<br />'
                , searchResults[i]["publisher"]
                , '  |  ' 
                , searchResults[i]["date"]
                , '<br />')
            $(document).ready(function() {
                $( "#resultList" ).append('<a href='+'"'+searchResults[i]["link"]+'"'+'>'+searchResults[i]["link"]+'</a>')});
            $( "#resultList" ).append('<br /><br /><br />');      
        }
    } else { 
        document.getElementById("resultArea").innerHTML = "Sorry, no results found :-(";
    }
};


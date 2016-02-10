// Needed for Algolia setup
var client = algoliasearch('SDMCCB8HOO', 'a5314e979ae881a0cf7154f9a9e78462');
var index = client.initIndex('bpc_test');

// Fetch search terms input on the index page
var searchTerm = localStorage.getItem("userInput");


var justDoIt = index.search(searchTerm, function searchDone(err, content) {
  // err is either `null` or an `Error` object, with a `message` property
  // content is either the result of the command or `undefined`

  if (err) {
    console.error(err);
    return;
  }

  if (searchTerm != null) { 
    $('#resultList').empty(); 
    if (content.hits[0] != null) {
      $(document).ready($("#resultSum").append(content.nbHits, " results for '", searchTerm, "':" ))
    } 
    else {
      document.getElementById("resultList").innerHTML = "Sorry, no results found :-("
    };
    for (var i = 0; i < content.hits.length; i++) {
       $(document).ready( $('#resultList').append(
        '<p style="font-size: 20px;">' + '<a href=' + '"' + content.hits[i].link + '"' + ' style=" color: rgba(76, 110, 158, 1);" >' + content.hits[i].title + '</a>' + '</p>'
        + '<p style=" color: rgba(99, 25, 45, .5);" >' + content.hits[i].link + '</p>' 
        + '<p style=" color: #a1a1a1;">' + content.hits[i].publisher + ' | ' + content.hits[i].date 
        + '</p>'
        + '<br/><br/>' 
        ));
    };
    localStorage.clear();
    searchTerm = null;
  }
});


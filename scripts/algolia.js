var numResults = 0;
var nextTerm = "";
var processTime = 0;

$(document).ready(function() {
  $('input').keyup(function() {
    index.search($('input').val(), searchCallback);
  });
});


function searchCallback(err, content) {
    if (err) {
      console.error(err);
      return;
    }

    $('#resultList').empty();
    $("#resultSum").empty();

    if (content.query !== "") {
        for (var i = 0; i < content.hits.length; i++) {
           $(document).ready( $('#resultList').append(
            '<p style="font-size: 20px;">' + '<a href=' + '"' + content.hits[i].link + '"' + ' style=" color: rgba(76, 110, 158, 1);" >' + content.hits[i].title + '</a>' + '</p>'
            + '<p style=" color: rgba(99, 25, 45, .5);" >' + content.hits[i].link + '</p>' 
            + '<p style=" color: #a1a1a1;">' + content.hits[i].publisher + ' | ' + content.hits[i].date 
            + '</p>'
            + '<br/><br/>' 
            ));
        }
      numResults = content.nbHits;
      nextTerm = content.query;
      processTime = (content.processingTimeMS / 1000);
      $("#resultSum").empty().append(numResults, " results for '", nextTerm, "'" )
    } 
  };
/*
$('input').blur(function() {
  if (numResults > 0) {
      $(document).ready($("#resultSum").append(numResults, " results for '", nextTerm, "':" ))
    } 
    else {  
      document.getElementById("resultArea").innerHTML = "Sorry, no results found :-("
    };
});
*/


 /*
  $('input').keyup(function() {

      index.search($('input').val(), function searchDone(err, content) {
        // err is either `null` or an `Error` object, with a `message` property
        // content is either the result of the command or `undefined`

        if (err) {
          console.error(err);
          return;
        }

        for (var i = 0; i < content.hits.length; i++) {
           $(document).ready( $('#resultList').append(
            '<p style="font-size: 20px;">' + '<a href=' + '"' + content.hits[i].link + '"' + ' style=" color: rgba(76, 110, 158, 1);" >' + content.hits[i].title + '</a>' + '</p>'
            + '<p style=" color: rgba(99, 25, 45, .5);" >' + content.hits[i].link + '</p>' 
            + '<p style=" color: #a1a1a1;">' + content.hits[i].publisher + ' | ' + content.hits[i].date 
            + '</p>'
            + '<br/><br/>' 
            ));
        }
      });

    }); */

  /*
        $('#resultList').empty(); 
        if (content.hits[0] != null) {
          $(document).ready($("#resultSum").append(content.nbHits, " results containing '", searchTerm, "':" ))
        } 
        else {
          document.getElementById("resultArea").innerHTML = "Sorry, no results found :-("
        };

    */


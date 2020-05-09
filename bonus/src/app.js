// Bonus:
// Attraverso un’altra chiamata ajax, filtrare gli album per artista

$(document).ready(function() {
  var btnSearch = $("#btn-search");
  var queryString = "";

  // init handlebars
  var source = document.getElementById("album-template").innerHTML;
  var template = Handlebars.compile(source);

  // funzione che stampa il singolo album in pagina
  function stampaAlbum(album) {
    var context = {
      urlImg: album.poster,
      titolo: album.title.toUpperCase(),
      artista: album.author,
      anno: album.year
    };
    var html = template(context);

    $(".container").append(html);
  }

  // chiamata ajax alla mia api.php
  $.ajax({
    url: 'api.php',
    method: 'GET',
    data: {
      query: queryString
    },
    success: function(data) {
      // console.log(data);

      for (var key in data) {
        var album = data[key];

        stampaAlbum(album);
      }
    },
    error: function(errore) {
      console.error("ERRORE");
    }
  });

  // al click sul btn "FILTRA"
  btnSearch.click(function() {
    // cancello il contenuto della pagina
    $(".container").html("");
    // memorizzo il valore dell'input
    queryString = $("#search-input").val();
    console.log(queryString);
    // chiamata ajax
    $.ajax({
      url: 'api.php',
      method: 'GET',
      data: {
        query: queryString
      },
      success: function(data) {
        for (var key in data) {
          var album = data[key];

          stampaAlbum(album);
        }
      },
      error: function() {
        console.log("ERRORE");
      }
    });
  });
});

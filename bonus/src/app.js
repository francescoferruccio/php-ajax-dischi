// Bonus:
// Attraverso un’altra chiamata ajax, filtrare gli album per artista

$(document).ready(function() {
  // variabili globali
  var btnSearch = $("#btn-search");
  var queryString = "";
  var searchInput = $("#search-input");

  // init handlebars
  var source = document.getElementById("album-template").innerHTML;
  var template = Handlebars.compile(source);

// DICHIARAZIONE FUNZIONI-------------------------------------------------------

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

  // funzione che ottiene gli album dall'api
  // e filtra in base alla query
  function getAlbums(query) {
    $.ajax({
      url: 'api.php',
      method: 'GET',
      data: {
        query: query
      },
      success: function(data) {
        for (var key in data) {
          var album = data[key];

          stampaAlbum(album);
        }
      },
      error: function(errore) {
        console.error("ERRORE");
      }
    });
  }

  function filtra() {
    // cancello il contenuto della pagina
    $(".container").html("");
    // memorizzo il valore dell'input
    queryString = searchInput.val();
    // svuoto l'input
    searchInput.val("");
    // chiamata ajax
    getAlbums(queryString);
  }

// CODICE-----------------------------------------------------------------------

  // svuoto il campo di input
  searchInput.val("");

  // carico tutti i dischi in pagina
  getAlbums(queryString);

  // al click sul btn "FILTRA"
  btnSearch.click(function() {
    filtra();
  });

  // alla pressione del tasto invio sull'input
  searchInput.keydown(function(event) {
    if(event.which == 13) {
      filtra();
    }
  })
});

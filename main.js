$(document).ready(function() {
  // init handlebars
  var source = document.getElementById("album-template").innerHTML;
  var template = Handlebars.compile(source);


  $.ajax({
    url: 'api.php',
    success: function(data) {
      // console.log(data);
      for (var key in data) {
        var album = data[key];

        var context = {
          urlImg: album.poster,
          titolo: album.title.toUpperCase(),
          artista: album.author,
          anno: album.year
        };
        var html = template(context);

        $(".container").append(html);
      }
    },
    error: function(errore) {
      console.error("ERRORE");
    }
  });
});

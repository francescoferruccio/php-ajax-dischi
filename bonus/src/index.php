<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP Dischi BONUS</title>
    <link rel="stylesheet" href="app.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <script src="app.js"></script>
  </head>
  <body>
    <header>
      <div class="top-container">
        <img src="img/logo.png" alt="logo">
        <div class="search">
          <input id="search-input" type="text" name="filtro" value="" placeholder="Inserisci artista">
          <button id="btn-search" type="button" name="button">FILTRA</button>
        </div>
      </div>
    </header>
    <main>
      <div class="container">

      </div>
    </main>

    <!-- TEMPLATE -->
    <script id="album-template" type="text/x-handlebars-template">
      <div class="album">
        <div class="album-top">
          <img src="{{urlImg}}" alt="cover">
        </div>
        <div class="album-bottom">
          <span class="title">{{titolo}}</span>
          <span>{{artista}}</span>
          <span>{{anno}}</span>
        </div>
      </div>
    </script>

  </body>
</html>

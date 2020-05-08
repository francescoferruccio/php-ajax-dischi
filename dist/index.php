<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP Dischi</title>
    <link rel="stylesheet" href="app.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <script src="app.js"></script>
  </head>
  <body>
    <header>
      <div class="logo">
        <img src="img/logo.png" alt="logo">
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

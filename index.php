<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP Dischi</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <script src="main.js"></script>
  </head>
  <body>
    <div class="container">

    </div>

    <!-- TEMPLATE -->
    <script id="album-template" type="text/x-handlebars-template">
      <div class="album">
        <img src="{{urlImg}}" alt="cover">
        <span>{{titolo}}</span>
        <span>{{artista}}</span>
        <span>{{anno}}</span>
      </div>
    </script>

  </body>
</html>

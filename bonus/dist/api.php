<?php
  header('Content-Type: application/json');
  $risultato = [];

  // includo il file db.php
  require_once "db.php";

  // memorizzo la query passata dalla chiamata ajax
  $query = $_GET["query"];

  // controllo se la query è vuota
  // se è vuota ritorno tutto il db
  // altrimenti controllo se la query corrisponde ad un artista presente nel db
  // e inserisco l'album nell'array dei risultati
  if($query != "") {
    foreach ($db as $album) {
      if(stristr($album['author'], $query)) {
        $risultato[] = $album;
      }
    }
    echo json_encode($risultato);
  } else {
    echo json_encode($db);
  }

?>

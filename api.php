<?php
  header('Content-Type: application/json');
  // includo il file db.php
  require_once "db.php";
  // restituisco al js la variabile $db (contenuta nel file che ho
  // incluso prima) encodata in json
  echo json_encode($db);
?>

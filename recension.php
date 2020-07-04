<?php
/*if (!isset($_SESSION['id'])) {
  header('Location: books.php');
  exit();
}*/
?>

<?php


include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";

?>

<body>
<div id="container">
    <h1>Book Recension</h1>
    <hr>
    <ul style= " list-style: none; background-color: #ccddff; "id="orders"></ul>

    <section id="control-center">
    <button id="get-btn">GET Recensions</button>
    <hr>
    <p>title: <input type="text" id="name"></p>
    <p>text: <input type="text" id="text"></p>
    <button id="post-btn">POST Recension</button>
    <button id="put-btn">PUT Recension</button>
    <button id="del-btn">Delete Recension</button>
    

  </section>

    <script>
    </script>
</div>
</body>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


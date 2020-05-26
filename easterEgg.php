<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>
<body>
    <!-- diese Seite muss auf einem Harry Potter Buch verlinkt werden!-->
    <div class="container">
        <div class="text-center">
        <h1>&#x2728;Harry Potter Characters &#x2728;</h1> <!-- Unicode Hex Characters -->
        <div id="searchWrapper">
            <input type="text" name="searchBar" id="searchBar" class="form-control" placeholder="search for a character" />
        </div>

        <ul id="charactersList"></ul>
        </div>
    </div>
    <script src="js/app.js"></script>
</body>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>
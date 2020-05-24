<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>

<body>
<div id="container">
    <h1>Books</h1>
    <hr>
    <!--load books position-->
    <p id="books"></p>
    <script>
        getBookLists(9781451648546);
        getBookLists(9780061847011);
        getBookLists(9783827324658);
    </script>

</div>
</body>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


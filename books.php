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
        getBookLists(9781451648546,22.99);
        getBookLists(9780061847011,14.99);
        getBookLists(9780596002855,16.99);
    </script>

</div>
</body>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


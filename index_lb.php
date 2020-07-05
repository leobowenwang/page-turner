<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>

<body>

<div id="container">

    <br>
    <h1 class="text-center">Top Seller</h1>
    <hr>
    <!--load books position-->
    <p id="books"></p>
    <script>
        getBookLists(9781451648546,22.99); //Steve Jobs
        getBookLists(9780061847011,14.99); //Love is a Dog From Hell
        getEBookLists(9781453286142); //Playing for Keeps
    </script>

</div>
</body>
<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>

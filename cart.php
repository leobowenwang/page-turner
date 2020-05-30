<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>
<body>
    <div class="container">
        <div class="text-center">
        <h1>Shopping Cart</h1>
        <!--load books position-->
        <p id="books"></p>
    <script>
        getBook(9781451648546,22.99);
    </script>
    <hr>
    </div>
   <script src="/page-turner/js/shoppingcart.js"></script>
</body>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


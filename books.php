<?php
include('./includes/header.php');
include('./includes/nav.php');
?>
<body>
<div class="container">
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
include('./includes/footer.php');
?>

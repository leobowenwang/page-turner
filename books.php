<?php
include('./includes/header.php');
include('./includes/nav.php');
?>
<body>
<div id="container">

    <!--load books position-->
    <p id="books"></p>
    <script>getBookDetails(9781451648546);</script>

    <script>getBookDetails(9780061847011); </script>

</div>
</body>

<?php
include('./includes/footer.php');
?>

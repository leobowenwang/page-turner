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
        getBookLists(9781451648546,22.99); //Steve Jobs
        getBookLists(9780061847011,14.99); //Love is a Dog From Hell
        getBookLists(9780596002855,16.95); //Learning Java
        //getBookLists(9780060597184,12.99);
        //getBookLists(9780349701448,19.99);
        getBookLists(9780062941947,11.95); //The Book of Rosy
        //getBookLists(9781474613477,15.99);
        //getBookLists(9780711250710,24.99);
        //getBookLists(9780262061414,7.95);
        getBookLists(9780062407818,28.99); //Never Split the Difference
        getBookLists(9780345816047,13.95); //12 Rules for Life
        //getBookLists(9781401958244,10.99);
    </script>

    <!-- Pagination -->
    <ul class="pagination justify-content-center">
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
        </li>
    </ul>


</div>
</body>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


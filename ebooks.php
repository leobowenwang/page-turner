<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>

<body>
<div id="container">
    <h1>E-Books</h1>
    <hr>
    <!--load books position-->
    <p id="books"></p>
    <script>
        getEBookLists(9783527821259); //HTML & CSS für Dummies
        getEBookLists(9781473554436); //The Testaments
        getEBookLists(9780812998962); //American Spy
        //getEBookLists(9781416995753); //City of Bones
        //getEBookLists(9781501119934); //Thanks A Thousand
        getEBookLists(9781315303901); //Sigmund Freud
        //getEBookLists(9780062881861); //The Bad Seed
        getEBookLists(9781453286142); //Playing for Keeps
        //getEBookLists(9781524763152); !!doesnt work because no price BECOMING: Meine Geschichte
        getEBookLists(9781623367091); //The Code of the Extraordinary Mind
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


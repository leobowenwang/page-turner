
<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>

<body>
<div id="container">

    <section class="breadcrumb-section">
        <h2 class="sr-only">Site Breadcrumb</h2>
        <div class="breadcrumb-contents">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/page-turner/index.php">Home</a></li>
                    <li class="breadcrumb-item"><a href="/page-turner/ebooks.php">E-Books</a></li>
                    <li class="breadcrumb-item active">Product Details</li>
                </ol>
            </nav>
        </div>
    </section>

    <p id="books"></p>

    <script>

    let isbn = findGetParameter("isbn");
    // todo ebook link doesnt work
    getEBookDetails(isbn);

    </script>

</div>
</body>


<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>

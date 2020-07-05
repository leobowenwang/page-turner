<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>

    <body>

    <div id="container">

        <!--https://getbootstrap.com/docs/4.0/components/carousel/-->
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="img/slideshow1.jfif" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="img/slideshow2.jfif" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <a href="easterEgg.php">
                    <img class="d-block w-100" src="img/harry-porter.png" alt="Third slide">
                    </a>
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

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

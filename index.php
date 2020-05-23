<?php
include('./includes/header.php');
include('./includes/nav.php');
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
                    <img class="d-block w-100" src="img/slideshow3.jfif" alt="Third slide">
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
            getBookLists(9781451648546);
            getBookLists(9780061847011);
            getBookLists(9783827324658);
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
include('./includes/footer.php');
?>
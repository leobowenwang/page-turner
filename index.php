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






        <!-- Page Heading -->
        <h1 class="my-4">Top Seller This Week
        </h1>

        <!-- Project One -->
        <div class="row">
            <div class="col-md-7">
                <a href="#">
                    <img class="img-fluid mx-auto d-block mb-3 mb-md-0" src="img/books/001.jpg" alt="">
                </a>
            </div>
            <div class="col-md-5">
                <h3>Love is a Dog From Hell</h3>
                <h3><small>Charles Bukowski</small></h3>
                <p>A classic in the Bukowski poetry canon, Love Is a Dog from Hell is a raw, lyrical, exploration of the
                    exigencies, heartbreaks, and limits of love.</p>
                <a class="btn btn-primary" href="#">View Project</a>
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <!-- Project Two -->
        <div class="row">
            <div class="col-md-7">
                <a href="#">
                    <img class="img-fluid mx-auto d-block mb-3 mb-md-0" src="img/books/002.jpg" alt="">
                </a>
            </div>
            <div class="col-md-5">
                <h3>What Matters Most is How Well You</h3>
                <h3><small>Charles Bukowski</small></h3>
                <p>This second posthumous collection from Charles Bukowski takes readers deep into the raw, wild vein of
                    writing that extends from the early 70s to the 1990s.</p>
                <a class="btn btn-primary" href="#">View Project</a>
            </div>
        </div>
        <!-- /.row -->

        <hr>

        <!-- Project Three -->
        <div class="row">
            <div class="col-md-7">
                <a href="#">
                    <img class="img-fluid mx-auto d-block mb-3 mb-md-0" src="img/books/003.jpg" alt="">
                </a>
            </div>
            <div class="col-md-5">
                <h3>Hacking: Hacking For Beginners Guide On How To Hack, Computer Hacking, And The Basics Of Ethical
                    Hacking</h3>
                <h3><small>Josh Thompsons</small></h3>
                <p>With Hacking: Hacking for Beginners Guide on How to Hack, Computer Hacking, and the Basics of Ethical
                    Hacking, you'll learn everything you need to know to enter the secretive world of computer hacking.
                    It contains proven steps and strategies on how to start your education and practice in the field of
                    hacking and provides demonstrations of hacking techniques and actual code. It not only will teach
                    you some fundamental basic hacking techniques, it will also give you the knowledge of how to protect
                    yourself and your information from the prying eyes of other malicious Internet users.

                    This book dives deep into basic security procedures you should follow to avoid being exploited.
                    You’ll learn about identity theft, password security essentials, what to be aware of, and how
                    malicious hackers are profiting from identity and personal data theft.</p>
                <a class="btn btn-primary" href="#">View Project</a>
            </div>
        </div>
        <!-- /.row -->

        <hr>


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
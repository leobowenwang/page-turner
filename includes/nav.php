<!-- navigation  -->

<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/page-turner/index.php"><img class="logo" src="/page-turner/img/logo.png"
                                                                   alt="Page Turner"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="/page-turner/books.php">Books </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/page-turner/ebooks.php">E-Books</a>
                </li>
            </ul>

            <a class="nav-link" href="/page-turner/login/index.php"><img class="icon" src="/page-turner/img/account.png"
                                                                         alt="account"></a>
            <a class="nav-link" href="/page-turner/cart.php"><img class="icon" src="/page-turner/img/shopping_cart.png"
                                                                  alt="shopping-cart"><span>0</span></a>

            <!-- update cart size everytime -->
            <script>updateCartSize();</script>

            <form action="/page-turner/search.php">
                <input type="text" placeholder="Search" id="searchbar">
            </form>

            <!-- search js only works if its implemented after the html form -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                  crossorigin="anonymous">
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
                    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
                    crossorigin="anonymous"></script>

        </div>
    </nav>
</header>



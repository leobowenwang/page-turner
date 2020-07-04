<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>



<body>
<div class="container">

    <div class="container py-5 text-center">
        <h1 class="display-4">Search Results:</h1>
    </div>

    <div class="card-img-top justify-content-center">
        <p id="result"></p>
    </div>
    <div class="card-body justify-content-center">
        <p id="result"></p>
    </div>


    <script>
        $('#searchbar').keypress(function (e) {
            if (e.which == 13) {
                sessionStorage.setItem("searchTerm", $('#searchBar').val());
            }
        });


        $(document).ready(function () {
            let search = sessionStorage.getItem('searchTerm');
            if (search == "") {
                alert("Please enter something in the field");
            }
            else {
                let url = "";
                let img = "";
                let title = "";
                let author = "";
                let button = "";
                $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

                    for (i = 0; i < response.items.length; i++) {
                        title = $('<h5 class="text-center">' + response.items[i].volumeInfo.title + '</h5>');
                        author = $('<h5 class="text-center">' + response.items[i].volumeInfo.authors + '</h5>');
                        img = $('<img class="img-fluid mx-auto d-block mb-3 mb-md-0" width="130px" ><br>');
                        button = $('<a href=' + response.items[i].volumeInfo.infoLink + '><button class="btn btn-light mx-auto d-block">Read More</button></a><hr>');
                        url = response.items[i].volumeInfo.imageLinks.thumbnail;
                        img.attr('src', url);
                        title.appendTo('#result');
                        author.appendTo('#result');
                        img.appendTo('#result');
                        button.appendTo('#result');
                    }
                });
            }
            return false;
        });
    </script>

</div>
</body>



<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>

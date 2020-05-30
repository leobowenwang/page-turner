function initbook(isbn) {
    // Query the book database by ISBN code
    isbn = isbn;
    apikey = "AIzaSyC3mb5Qp27hxqkPxnU4RNAMvtZ16q10i4I";

    var url =
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
        isbn +
        "&key=" +
        apikey;
    return url;
}

function getBookLists(isbn, price) {
    var results = fetch(initbook(isbn)) //Caution: asynchronous call, it may load certain books in a different order & it may load other commands before this one
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];

            let title, authors, description, categories, publisher, publishedDate, averageRating, img;

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title"; //ternary Operator: How? --> Bedingung ? Ausdruck1: Ausdruck2
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
            (book["searchInfo"]["textSnippet"] != undefined) ? description = book["searchInfo"]["textSnippet"] : description = "No Text Snippet";
            (book["volumeInfo"]["categories"] != undefined) ? categories = book["volumeInfo"]["categories"] : categories = "";
            (book["volumeInfo"]["publisher"] != undefined) ? publisher = book["volumeInfo"]["publisher"] : publisher = "Unknown Publisher";
            (book["volumeInfo"]["publishedDate"] != undefined) ? publishedDate = book["volumeInfo"]["publishedDate"] : publishedDate = "Unknown Published Date";
            (book["volumeInfo"]["averageRating"] != undefined) ? averageRating = book["volumeInfo"]["averageRating"] : averageRating = "0";
            (book["volumeInfo"]["imageLinks"]["thumbnail"] != undefined) ? img = book["volumeInfo"]["imageLinks"]["thumbnail"] : img = "https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png";

            //to create in html
            let books = document.createElement("p");
            //to display in html
            books.innerHTML = (
                "<div class=\"row\">\n" +
                "            <div class=\"col\">\n" +
                "                <a href='/page-turner/books/details.php?isbn=" + isbn + "&price=" + price + "'>\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 300px' src='" + img + "' alt='" + title + "'>\n" +
                "                </a>\n" +
                "            </div>\n" +
                "            <div class=\"col\">\n" +
                "                <h3>" + title + "</h3>\n" +
                "                <h3><small>" + authors + "</small></h3>\n" +
                "                <h4><small>" + categories + "</small></h4>\n" +
                "                <p>" + description + "</p>\n" +
                "                <a class=\"btn btn-primary\" href='/page-turner/books/details.php?isbn=" + isbn + "&price=" + price + "'>View Details</a>\n" +
                "                <br><small>Publisher: " + publisher + "</small>\n" +
                "                <br><small>Published Date: " + publishedDate + "</small>\n" +
                "                <br><small>Rating: " + averageRating + "/5</small>\n" +
                "                <br><h4>Price: " + price + " €</h4>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
            );
            document.getElementById("books").appendChild(books); //appending
        });
}

function getBookDetails(isbn, price) {
    var addCartButton = document.querySelectorAll('.add-cart-btn');

    for (let i = 0; i < addCartButton.length; i++) {
        console.log("my loop");
    }


    var results = fetch(initbook(isbn))
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];

            let title, authors, description, pageCount, categories, publisher, publishedDate, averageRating,
                ratingsCount, img;

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title";
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
            (book["volumeInfo"]["description"] != undefined) ? description = book["volumeInfo"]["description"] : description = "No Description";
            (book["volumeInfo"]["pageCount"] != undefined) ? pageCount = book["volumeInfo"]["pageCount"] : pageCount = "Unknown";
            (book["volumeInfo"]["categories"] != undefined) ? categories = book["volumeInfo"]["categories"] : categories = "";
            (book["volumeInfo"]["publisher"] != undefined) ? publisher = book["volumeInfo"]["publisher"] : publisher = "Unknown Publisher";
            (book["volumeInfo"]["publishedDate"] != undefined) ? publishedDate = book["volumeInfo"]["publishedDate"] : publishedDate = "Unknown Published Date";
            (book["volumeInfo"]["averageRating"] != undefined) ? averageRating = book["volumeInfo"]["averageRating"] : averageRating = "No Ratings yet";
            (book["volumeInfo"]["ratingsCount"] != undefined) ? ratingsCount = book["volumeInfo"]["ratingsCount"] : ratingsCount = "0";
            (book["volumeInfo"]["imageLinks"]["thumbnail"] != undefined) ? img = book["volumeInfo"]["imageLinks"]["thumbnail"] : img = "https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png";

            //to create in html
            let books = document.createElement("p");

            //to display in html
            books.innerHTML = (
                "            <div class=\"row\">\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 400px' src='" + img + "' alt='" + title + "'><br>\n" +
                "                <div class=\"col-lg-6\">\n" +
                "                    <div class=\"product-details-info pl-lg--30 \">\n" +
                "                        <p class=\"tag-block\">Categories: " + categories + "" +
                "                        <h2 class=\"product-title\">" + title + "</h2>\n" +
                "                        <h4>" + authors + "</h4>\n" +
                "                        <ul class=\"list-unstyled\">\n" +
                "                            <li>Pages: " + pageCount +
                "                            <li>Publisher: " + publisher + "</li>\n" +
                "                            <li>Published Date: <span class=\"list-value\">  " + publishedDate + "</span></li>\n" +
                "                            <li>ISBN: <span class=\"list-value\"> " + isbn + "</span></li>\n" +
                "                            <li>Ratings: " + averageRating + "</li>\n" +
                "                        </ul>\n" +
                "                        <div class=\"price-block\"><hr>\n" +
                "                        <div class=\"row\">\n" +
                "                        <span class=\"price ml-3\"><h3>" + price + " €</h3></span>\n" +
                "                        </div><hr>\n" +
                "                        </div>\n" +
                "                        <div class=\"row\">\n" +
                "                            <div class=\"count ml-3 w-10\">" +
                "                                <input type=\"number\" class=\"form-control text-center\" value=\"1\" min='1' >\n" +
                "                            </div>\n" +
                "                            <div class=\"add-cart-btn\">\n" +
                "                                <a href=\"\" class=\"btn btn-primary\">+ Add to Cart</a>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "            <div class=\"sb-custom-tab section-padding\"><br>\n" +
                "                <ul class=\"nav nav-tabs nav-style-2\" id=\"myTab2\" role=\"tablist\">\n" +
                "                    <li class=\"nav-item\">\n" +
                "                        <a class=\"nav-link active\" id=\"tab1\" data-toggle=\"tab\" href=\"#tab-1\" role=\"tab\"\n" +
                "                           aria-controls=\"tab-1\" aria-selected=\"true\">\n" +
                "                            DESCRIPTION\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                    <li class=\"nav-item\">\n" +
                "                        <a class=\"nav-link\" id=\"tab2\" data-toggle=\"tab\" href=\"#tab-2\" role=\"tab\"\n" +
                "                           aria-controls=\"tab-2\" aria-selected=\"true\">\n" +
                "                            REVIEWS (" + ratingsCount + ")\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                </ul>\n" +
                "                <div class=\"tab-content space-db--20\" id=\"myTabContent\">\n" +
                "                    <div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"tab1\">\n" +
                "                        <article class=\"review-article\">\n" +
                "                            <h1 class=\"sr-only\">Tab Article</h1>\n" +
                "                            <p>" + description + "</p>\n" +
                "                        </article>\n" +
                "                    </div>\n" +
                "                    <div class=\"tab-pane fade\" id=\"tab-2\" role=\"tabpanel\" aria-labelledby=\"tab2\">\n" +
                "                        <div class=\"review-wrapper\">\n" +
                "                            <h2 class=\"title-lg mb--20\"> REVIEWS (" + ratingsCount + ")</h2>\n" +
                "                            <div class=\"review-comment mb--20\">\n" +
                "                                <div class=\"text\">\n" +
                "                                    <div class=\"rating-block mb--15\">\n" + //TODO stars
                "                                    </div>\n" +
                "                                    <h6 class=\"author\">ADMIN – <span class=\"font-weight-400\">March 23, 2015</span>\n" +
                "                                    </h6>\n" +
                "                                    <p>Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio\n" +
                "                                        quis mi.</p>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                            <h2 class=\"title-lg mb--20 pt--15\">ADD A REVIEW</h2>\n" +
                "                            <div class=\"rating-row pt-2\">\n" +
                "                                <p class=\"d-block\">Your Rating</p>\n" +
                "                                <span class=\"rating-widget-block\">\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star1\">\n" +
                "                                        <label for=\"star1\"></label>\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star2\">\n" +
                "                                        <label for=\"star2\"></label>\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star3\">\n" +
                "                                        <label for=\"star3\"></label>\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star4\">\n" +
                "                                        <label for=\"star4\"></label>\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star5\">\n" +
                "                                        <label for=\"star5\"></label>\n" +
                "                                    </span>\n" +
                "                                <form action=\"./\" class=\"mt--15 site-form \">\n" +
                "                                    <div class=\"row\">\n" +
                "                                        <div class=\"col-12\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"message\">Comment</label>\n" +
                "                                                <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"5\"\n" +
                "                                                          class=\"form-control\"></textarea>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-lg-6\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"name\">Name *</label>\n" +
                "                                                <input type=\"text\" id=\"name\" class=\"form-control\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-lg-6\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"email\">Email *</label>\n" +
                "                                                <input type=\"text\" id=\"email\" class=\"form-control\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-lg-4\">\n" +
                "                                            <div class=\"submit-btn\">\n" +
                "                                                <a href=\"#\" class=\"btn btn-primary\">Post Review</a>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                </form>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n"
            );

            document.getElementById("books").appendChild(books);
        });
}

function getEBookLists(isbn) {
    var results = fetch(initbook(isbn))
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];

            let title, authors, description, listPrice, categories, publisher, publishedDate, averageRating, img;

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title";
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
            (book["searchInfo"]["textSnippet"] != undefined) ? description = book["searchInfo"]["textSnippet"] : description = "No Text Snippet";
            (book["saleInfo"]["listPrice"]["amount"] != undefined) ? listPrice = book["saleInfo"]["listPrice"]["amount"] : listPrice = "";
            (book["volumeInfo"]["categories"] != undefined) ? categories = book["volumeInfo"]["categories"] : categories = "";
            (book["volumeInfo"]["publisher"] != undefined) ? publisher = book["volumeInfo"]["publisher"] : publisher = "Unknown Publisher";
            (book["volumeInfo"]["publishedDate"] != undefined) ? publishedDate = book["volumeInfo"]["publishedDate"] : publishedDate = "Unknown Published Date";
            (book["volumeInfo"]["averageRating"] != undefined) ? averageRating = book["volumeInfo"]["averageRating"] : averageRating = "0";
            (book["volumeInfo"]["imageLinks"]["thumbnail"] != undefined) ? img = book["volumeInfo"]["imageLinks"]["thumbnail"] : img = "https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png";

            //to create in html
            let books = document.createElement("p");
            //to display in html
            books.innerHTML = (
                "<div class=\"row\">\n" +
                "            <div class=\"col\">\n" +
                "                <a href='/page-turner/ebooks/details.php?isbn=" + isbn + "'>\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 300px' src='" + img + "' alt='" + title + "'>\n" +
                "                </a>\n" +
                "            </div>\n" +
                "            <div class=\"col\">\n" +
                "                <h3>" + title + "</h3>\n" +
                "                <h3><small>" + authors + "</small></h3>\n" +
                "                <h4><small>" + categories + "</small></h4>\n" +
                "                <p>" + description + "</p>\n" +
                "                <a class=\"btn btn-primary\" href='/page-turner/ebooks/details.php?isbn=" + isbn + "'>View Details</a>\n" +
                "                <br><small>Publisher: " + publisher + "</small>\n" +
                "                <br><small>Published Date: " + publishedDate + "</small>\n" +
                "                <br><small>Rating: " + averageRating + "/5</small>\n" +
                "                <br><h4>Price: " + listPrice + " €</h4>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
            );
            document.getElementById("books").appendChild(books);
        });
}

function getEBookDetails(isbn) {
    var results = fetch(initbook(isbn))
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];

            let title, authors, description, listPrice, pageCount, categories, publisher, publishedDate, averageRating,
                ratingsCount, img;

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title";
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
            (book["volumeInfo"]["description"] != undefined) ? description = book["volumeInfo"]["description"] : description = "No Description";
            (book["saleInfo"]["listPrice"]["amount"] != undefined) ? listPrice = book["saleInfo"]["listPrice"]["amount"] : listPrice = "";
            (book["volumeInfo"]["pageCount"] != undefined) ? pageCount = book["volumeInfo"]["pageCount"] : pageCount = "Unknown";
            (book["volumeInfo"]["categories"] != undefined) ? categories = book["volumeInfo"]["categories"] : categories = "";
            (book["volumeInfo"]["publisher"] != undefined) ? publisher = book["volumeInfo"]["publisher"] : publisher = "Unknown Publisher";
            (book["volumeInfo"]["publishedDate"] != undefined) ? publishedDate = book["volumeInfo"]["publishedDate"] : publishedDate = "Unknown Published Date";
            (book["volumeInfo"]["averageRating"] != undefined) ? averageRating = book["volumeInfo"]["averageRating"] : averageRating = "No Ratings yet";
            (book["volumeInfo"]["ratingsCount"] != undefined) ? ratingsCount = book["volumeInfo"]["ratingsCount"] : ratingsCount = "0";
            (book["volumeInfo"]["imageLinks"]["thumbnail"] != undefined) ? img = book["volumeInfo"]["imageLinks"]["thumbnail"] : img = "https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png";

            //to create in html
            let books = document.createElement("p");

            //to display in html
            books.innerHTML = (
                "            <div class=\"row\">\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 400px' src='" + img + "' alt='" + title + "'><br>\n" +
                "                <div class=\"col-lg-6\">\n" +
                "                    <div class=\"product-details-info pl-lg--30 \">\n" +
                "                        <p class=\"tag-block\">Categories: " + categories + "" +
                "                        <h2 class=\"product-title\">" + title + "</h2>\n" +
                "                        <h4>" + authors + "</h4>\n" +
                "                        <ul class=\"list-unstyled\">\n" +
                "                            <li>Pages: " + pageCount +
                "                            <li>Publisher: " + publisher + "</li>\n" +
                "                            <li>Published Date: <span class=\"list-value\">  " + publishedDate + "</span></li>\n" +
                "                            <li>ISBN: <span class=\"list-value\"> " + isbn + "</span></li>\n" +
                "                            <li>Ratings: " + averageRating + "</li>\n" +
                "                        </ul>\n" +
                "                        <div class=\"price-block\"><hr>\n" +
                "                        <div class=\"row\">\n" +
                "                        <span class=\"price ml-3\"><h3>" + listPrice + " €</h3></span>\n" +
                "                        </div><hr>\n" +
                "                        </div>\n" +
                "                        <div class=\"row\">\n" +
                "                            <div class=\"count ml-3 w-10\">" +
                "                                <input type=\"number\" class=\"form-control text-center\" value=\"1\" min='1' >\n" +
                "                            </div>\n" +
                "                            <div class=\"add-cart-btn\">\n" +
                "                                <a href=\"\" class=\"btn btn-primary\">+ Add to Cart</a>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "            <div class=\"sb-custom-tab section-padding\"><br>\n" +
                "                <ul class=\"nav nav-tabs nav-style-2\" id=\"myTab2\" role=\"tablist\">\n" +
                "                    <li class=\"nav-item\">\n" +
                "                        <a class=\"nav-link active\" id=\"tab1\" data-toggle=\"tab\" href=\"#tab-1\" role=\"tab\"\n" +
                "                           aria-controls=\"tab-1\" aria-selected=\"true\">\n" +
                "                            DESCRIPTION\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                    <li class=\"nav-item\">\n" +
                "                        <a class=\"nav-link\" id=\"tab2\" data-toggle=\"tab\" href=\"#tab-2\" role=\"tab\"\n" +
                "                           aria-controls=\"tab-2\" aria-selected=\"true\">\n" +
                "                            REVIEWS (" + ratingsCount + ")\n" +
                "                        </a>\n" +
                "                    </li>\n" +
                "                </ul>\n" +
                "                <div class=\"tab-content space-db--20\" id=\"myTabContent\">\n" +
                "                    <div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"tab1\">\n" +
                "                        <article class=\"review-article\">\n" +
                "                            <h1 class=\"sr-only\">Tab Article</h1>\n" +
                "                            <p>" + description + "</p>\n" +
                "                        </article>\n" +
                "                    </div>\n" +
                "                    <div class=\"tab-pane fade\" id=\"tab-2\" role=\"tabpanel\" aria-labelledby=\"tab2\">\n" +
                "                        <div class=\"review-wrapper\">\n" +
                "                            <h2 class=\"title-lg mb--20\"> REVIEWS (" + ratingsCount + ")</h2>\n" +
                "                            <div class=\"review-comment mb--20\">\n" +
                "                                <div class=\"text\">\n" +
                "                                    <div class=\"rating-block mb--15\">\n" + //stars
                "                                    </div>\n" +
                "                                    <h6 class=\"author\">ADMIN – <span class=\"font-weight-400\">March 23, 2015</span>\n" +
                "                                    </h6>\n" +
                "                                    <p>Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio\n" +
                "                                        quis mi.</p>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                            <h2 class=\"title-lg mb--20 pt--15\">ADD A REVIEW</h2>\n" +
                "                            <div class=\"rating-row pt-2\">\n" +
                "                                <p class=\"d-block\">Your Rating</p>\n" +
                "                                <span class=\"rating-widget-block\">\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star1\">\n" +
                "                                        <label for=\"star1\"></label>\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star2\">\n" +
                "                                        <label for=\"star2\"></label>\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star3\">\n" +
                "                                        <label for=\"star3\"></label>\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star4\">\n" +
                "                                        <label for=\"star4\"></label>\n" +
                "                                        <input type=\"radio\" name=\"star\" id=\"star5\">\n" +
                "                                        <label for=\"star5\"></label>\n" +
                "                                    </span>\n" +
                "                                <form action=\"./\" class=\"mt--15 site-form \">\n" +
                "                                    <div class=\"row\">\n" +
                "                                        <div class=\"col-12\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"message\">Comment</label>\n" +
                "                                                <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"5\"\n" +
                "                                                          class=\"form-control\"></textarea>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-lg-6\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"name\">Name *</label>\n" +
                "                                                <input type=\"text\" id=\"name\" class=\"form-control\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-lg-6\">\n" +
                "                                            <div class=\"form-group\">\n" +
                "                                                <label for=\"email\">Email *</label>\n" +
                "                                                <input type=\"text\" id=\"email\" class=\"form-control\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-lg-4\">\n" +
                "                                            <div class=\"submit-btn\">\n" +
                "                                                <a href=\"#\" class=\"btn btn-primary\">Post Review</a>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                </form>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n"
            );

            document.getElementById("books").appendChild(books);
        });
}

function findGetParameter(parameterName) { //method to retrieve GET data from url
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

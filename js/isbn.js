function getBookLists(isbn) { // Query the book database by ISBN code
    isbn = isbn;
    apikey = "AIzaSyDkVS2k68mGg-33bPJvnBFsJewZAGLDqgo";

    var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn + "&key=" + apikey;

    var results = fetch(url)
        .then(results => results.json())
        .then(function (results) {
            var book = results.items[0];

            var title = (book["volumeInfo"]["title"]);
            var authors = (book["volumeInfo"]["authors"]);
            var description = (book["volumeInfo"]["description"]);
            var printType = (book["volumeInfo"]["printType"]);
            var pageCount = (book["volumeInfo"]["pageCount"]);
            var publisher = (book["volumeInfo"]["publisher"]);
            var publishedDate = (book["volumeInfo"]["publishedDate"]);
            var averageRating = (book["volumeInfo"]["averageRating"]);
            var img = (book["volumeInfo"]["imageLinks"]["thumbnail"]);

            //to create in html
            var book = document.createElement("book");

            //to display in html
            book.innerHTML = (
                "<div class=\"row\">\n" +
                "            <div class=\"col-md\">\n" +
                "                <a href='/page-turner/books/" + isbn + "'>\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 300px' src='" + img + "' alt='" + title + "'>\n" +
                "                </a>\n" +
                "            </div>\n" +
                "            <div class=\"col-md\">\n" +
                "                <h3>" + title + "</h3>\n" +
                "                <h3><small>" + authors + "</small></h3>\n" +
                "                <p>" + description + "</p>\n" +
                "                <a class=\"btn btn-primary\" href='/page-turner/books/" + isbn + "'>View Details</a>\n" +
                //    "                <br>Type: " + printType + "\n" +
                "                <br><small>Publisher: " + publisher + "</small>\n" +
                "                <br><small>Published Date: " + publishedDate + "</small>\n" +
                "                <br><small>Rating: " + averageRating + "/5</small>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
            );

            document.getElementById("books").appendChild(book);
        });
}

function getBookDetails(isbn) { // Query the book database by ISBN code
    isbn = isbn;
    apikey = "AIzaSyDkVS2k68mGg-33bPJvnBFsJewZAGLDqgo";

    var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn + "&key=" + apikey;

    var results = fetch(url)
        .then(results => results.json())
        .then(function (results) {
            var book = results.items[0];

            var title = (book["volumeInfo"]["title"]);
            var authors = (book["volumeInfo"]["authors"]);
            var description = (book["volumeInfo"]["description"]);
            var printType = (book["volumeInfo"]["printType"]);
            var pageCount = (book["volumeInfo"]["pageCount"]);
            var publisher = (book["volumeInfo"]["publisher"]);
            var publishedDate = (book["volumeInfo"]["publishedDate"]);
            var averageRating = (book["volumeInfo"]["averageRating"]);
            var img = (book["volumeInfo"]["imageLinks"]["thumbnail"]);

            //to display in html
            var vtitle = createElement("p");
            var vauthors = createElement("p");
            var vdescription = createElement("p");
            var vprintType = createElement("p");
            var vpageCount = createElement("p");
            var vpublisher = createElement("p");
            var vpublishedDate = createElement("p");
            var vaverageRating = createElement("p");
            var vimg = createElement("img");

            vtitle.innerHTML = title;
            vauthors.innerHTML = authors;
            vdescription.innerHTML = description;
            vprintType.innerHTML = printType;
            vpageCount.innerHTML = pageCount;
            vpublisher.innerHTML = publisher;
            vpublishedDate.innerHTML = publishedDate;
            vaverageRating.innerHTML = averageRating;
            vimg.id = "booksimg";

            //define position
            document.getElementById("books").appendChild(vtitle);
            document.getElementById("books").appendChild(vauthors);
            document.getElementById("books").appendChild(vdescription);
            document.getElementById("books").appendChild(vprintType);
            document.getElementById("books").appendChild(vpageCount);
            document.getElementById("books").appendChild(vpublisher);
            document.getElementById("books").appendChild(vpublishedDate);
            document.getElementById("books").appendChild(vaverageRating);
            document.getElementById("books").appendChild(vimg).src = img;
        });
}

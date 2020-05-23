function getBookLists(isbn) { // Query the book database by ISBN code
    isbn = isbn;
    apikey = "AIzaSyDkVS2k68mGg-33bPJvnBFsJewZAGLDqgo";

    var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn + "&key=" + apikey;

    var results = fetch(url)
        .then(results => results.json())
        .then(function (results) {
            var book = results.items[0];

            var vtitle = (book["volumeInfo"]["title"]);
            var vauthors = (book["volumeInfo"]["authors"]);
            var vdescription = (book["volumeInfo"]["description"]);
            var vprintType = (book["volumeInfo"]["printType"]);
            var vpageCount = (book["volumeInfo"]["pageCount"]);
            var vpublisher = (book["volumeInfo"]["publisher"]);
            var vpublishedDate = (book["volumeInfo"]["publishedDate"]);
            var vaverageRating = (book["volumeInfo"]["averageRating"]);
            var vimg = (book["volumeInfo"]["imageLinks"]["thumbnail"]);

            //to create in html
            var book = document.createElement("book");

            //to display in html
            book.innerHTML = (
                "<div class=\"row\">\n" +
                "            <div class=\"col-md\">\n" +
                "                <a href=\"#\">\n" +
                "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 300px' src='" + vimg + "' alt='"+vtitle+"'>\n" +
                "                </a>\n" +
                "            </div>\n" +
                "            <div class=\"col-md\">\n" +
                "                <h3>" + vtitle + "</h3>\n" +
                "                <h3><small>" + vauthors + "</small></h3>\n" +
                "                <p>" + vdescription + "</p>\n" +
                "                <a class=\"btn btn-primary\" href='/page-turner/books/"+isbn+"'>View Project</a>\n" +
                //    "                <br>Type: " + vprintType + "\n" +
                "                <br><small>Publisher: " + vpublisher + "</small>\n" +
                "                <br><small>Published Date: " + vpublishedDate + "</small>\n" +
                "                <br><small>Rating: " + vaverageRating + "/5</small>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
            );

            document.getElementById("books").appendChild(book);


            //style
            title.style.fontSize = "25px";
            authors.style.fontSize = "20px";
            img.style.height = "100px";
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

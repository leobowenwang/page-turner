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
            /*
                        document.getElementById("title").innerHTML = title;
                        document.getElementById("subtitle").innerHTML = subtitle;
                        document.getElementById("authors").innerHTML = authors;
                        document.getElementById("printType").innerHTML = printType;
                        document.getElementById("pageCount").innerHTML = pageCount;
                        document.getElementById("publisher").innerHTML = publisher;
                        document.getElementById("publishdate").innerHTML = publishedDate;
                        document.getElementById("imageid").src = img;
             */
            //load books

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

            //style
            vtitle.style.textAlign = "center";
            vimg.style.height = "100px";
        });
}

function createElement(type) {
    var element = document.createElement(type);
    return element;
}


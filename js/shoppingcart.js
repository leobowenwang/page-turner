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
function getCartBook(isbn, price) {
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
                "                <br><h3><small>" + "Amount: " + "</small></h3>\n" +             
                "                <h4>Price: " + price + " €</h4>\n" +
                "                <br><a href=\"\"class=\"btn btn-primary\">Remove</a>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
            );
            document.getElementById("books").appendChild(books); //appending
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
getCartBooks(9781451648546,22.99);

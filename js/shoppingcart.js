document.addEventListener("DOMContentLoaded", function(event) {

    const maxQuantity = 5;

    


document.getElementsByClassName("buy-btn")[0].addEventListener('click', 
 purchaseClicked)


function purchaseClicked (){
    alert("Thank you for purchasing");
}








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
function getCartBooks(isbn, price) {
    var results = fetch(initbook(isbn)) //Caution: asynchronous call, it may load certain books in a different order & it may load other commands before this one
        .then((results) => results.json())
        .then(function (results) {
            let book = results.items[0];
            let title, authors, img;
            var count = document.getElementsByClassName("count")[0];

            (book["volumeInfo"]["title"] != undefined) ? title = book["volumeInfo"]["title"] : title = "No Title"; //ternary Operator: How? --> Bedingung ? Ausdruck1: Ausdruck2
            (book["volumeInfo"]["authors"] != undefined) ? authors = book["volumeInfo"]["authors"] : authors = "Unknown Author";
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
                "                        <div><hr>\n" +
                "                        <div class=\"row\">\n" +
                "                            <div class=\"count ml-3 w-10\">" +
                "                                <input type=\"number\" class=\"form-control text-center\" value=\"1\" min='1' >\n" +
                "                            </div>\n" +
                "                           </div>\n" +
                "                <br><h3><small>" + "Amount: " + count +  "</small></h3>\n" +             
                "                <h4>Price: " + price + " €</h4>\n" +
                "                <br><a href=\"\"class=\"btn btn-primary\" >Remove</a>\n" +
                "                        </div>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
            );
            var totalprice = 0;
            console.log(price);
            totalprice = price + price;
            document.getElementsByClassName("total-price")[0].innerText = totalprice + '€';
            document.getElementById("books").appendChild(books); //appending
        });
        
    }
    getCartBooks(9781451648546,22.99);
    getCartBooks(9780061847011,14.99);
});
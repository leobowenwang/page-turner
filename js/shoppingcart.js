if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
}

function ready () {
    document.getElementsByClassName("buy-btn")[0].addEventListener('click',removeAll)
    document.getElementsByClassName("buy-btn")[0].addEventListener('click', purchaseClicked)
    


function purchaseClicked (){
    alert("Thank you for purchasing");
}
function removeAll() {
    document.getElementById("books").remove(books); //removing books
    document.getElementsByClassName("total-price")[0].innerText =  '0€';

    console.log("removed all books");

  }
 
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
                "                       <div>\n" +
                "                <br><h3><small>" + "Amount: " +  "</small></h3>\n" +       
                "                        <div class=\"row\">\n" +
                "                            <div class=\"count ml-3 w-10\">" +
                "                                <input type=\"number\" class=\"form-control text-center\" value=\"1\" min='1' >\n" +
                "                              </div>\n" +
                "                             </div>\n" +
                "                           </div>\n" +     
                "                <h4> Price: " + price + " €</h4>\n" +
                "                            <div class=\"remove-book-btn\">\n" +
                "                                <br><class=\"btn btn-primary\" style='background-color: #007bff; cursor: pointer; border: none; color: white; padding: 15px 25px; text-decoration: none; display: inline-block; font-size: 15px; border-radius: .25rem;' >Remove</a>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "            </div>" +
                "</div>" +
                " <hr>"
               
            );
            
            var quantityElement = books.getElementsByClassName("form-control")[0];
            var quantity = quantityElement.value;
            console.log(quantity);

            var totalprice = 0;
            totalprice = totalprice + (price * quantity)
            document.getElementsByClassName("total-price")[0].innerText = totalprice + '€';
           
        
          
            books.getElementsByClassName("remove-book-btn")[0].addEventListener("click", removeBook);

            function removeBook() {
                document.getElementById("books").removeChild(books)
                 console.log("removed book");
                 totalprice = totalprice - (price * quantity);
                document.getElementsByClassName("total-price")[0].innerText = totalprice + '€';
                 
            }

    
            document.getElementById("books").appendChild(books); //appending

    
            
        });
           
        
       
        
    }
    /*
    let isbn = findGetParameter("isbn");
    let price = findGetParameter("price");
    getBookDetails(isbn, price);
    */


   getCartBooks(9780061847011,14.99);
   getCartBooks(9781451648546,22.99);
   getCartBooks(9780345816047,13.95);


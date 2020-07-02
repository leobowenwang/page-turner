if (document.readyState == 'loading') {    //wenn seite noch ladet, warten wenns fertig is -> ready
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
}

function ready () {
 
    let isbn = localStorage.getItem('isbn');
    let price = localStorage.getItem('price');



    document.getElementsByClassName("buy-btn")[0].addEventListener('click',purchaseClicked);
    document.getElementsByClassName("buy-btn")[0].addEventListener('click',removeAll);

function purchaseClicked (){
    if(price == null) {
        alert("Your Cart is empty");
    } else {
        alert("Thank you for purchasing");
    }
}
function removeAll() {
    document.getElementById("books").remove(books); //removing books
    document.getElementsByClassName("total-price")[0].innerText =  '0€';
    localStorage.clear();

    console.log("removed all books");

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
            
            var quantityElement = books.getElementsByClassName("form-control");
            for (var i = 0 ; i < quantityElement.length; i++) {
            var input = quantityElement[i];
            input.addEventListener('change', quantityChanged);
        
           
            }

            function quantityChanged(event) {
               var input = event.target;
               if(isNaN(input.value) || input.value <= 0) {
                   input.value = 1;
                  
               }
            
               console.log(input.value);
               cartTotal();
            }
            function cartTotal() {
            var totalprice = 0;
            totalprice = totalprice + (price * input.value)
            totalprice  = Math.round(totalprice * 100)/ 100;  // ansonsten entstehen rundungsfehler
            document.getElementsByClassName("total-price")[0].innerText = totalprice + '€';
            
        }
        
          
            books.getElementsByClassName("remove-book-btn")[0].addEventListener("click", removeBook);

            function removeBook() {
                document.getElementById("books").removeChild(books);
                localStorage.removeItem('isbn');
                localStorage.removeItem('price');
                 console.log("removed book");
                 var totalprice = price;
                 totalprice = totalprice - (price * input.value)
                 document.getElementsByClassName("total-price")[0].innerText = totalprice + '€';
                 
            }
           
    
            document.getElementById("books").appendChild(books); //appending 
            document.getElementById("text").remove();
            cartTotal();
        });
        
    }
    getCartBooks(isbn,price);
    //getCartBooks(9780345816047,13.95);
}
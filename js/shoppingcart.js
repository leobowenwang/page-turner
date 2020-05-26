
/*//to create in html
let books = document.createElement("p");
//to display in html
books.innerHTML = (
    "<div class=\"row\">\n" +
    "            <div class=\"col\">\n" +
    "                <a href='/page-turner/books/details.php?isbn=" + isbn + "'>\n" +
    "                    <img class=\"img-fluid mx-auto d-block mb-3 mb-md-0 \" style='height: 300px' src='" + img + "' alt='" + title + "'>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col\">\n" +
    "                <h3>" + title + "</h3>\n" +
    "                <h3><small>" + authors + "</small></h3>\n" +
    "                <h4><small>" + categories + "</small></h4>\n" +
    "                <p>" + description + "</p>\n" +
    "                <a class=\"btn btn-primary\" href='/page-turner/books/details.php?isbn=" + isbn + "'>View Details</a>\n" +
    "                <br><small>Publisher: " + publisher + "</small>\n" +
    "                <br><small>Published Date: " + publishedDate + "</small>\n" +
    "                <br><small>Rating: " + averageRating + "/5</small>\n" +
    "                <br><h4>Price: " + price + " €</h4>\n" +
    "            </div>" +
    "</div>" +
    " <hr>"
);
document.getElementById("books").appendChild(books); //appending */

document.addEventListener("DOMContentLoaded", function(event) {

    const maxQuantity = 50; // the maximum number of books that can be added to the shopping cart
  
     function updateBookInShoppingCart(bookObject) {
        var cartBookContainer = document.getElementsByClassName('books')[0]
        var cartBook =  cartBookContainer.getElementsByClassName('row  mb--60')
        for(var i = 0; i < cartBook.length; i++){
            var cartBook = cartBook[i]
            var cartBookPrice = cartBook.getElementsByClassName('price-block')[0]
            var bookQuantity = cartBook.getElementsByClassName('count ml-3 w-10')
        } 

      }
  
      function deleteBookFromShoppingCart(bookObject) {
        
      }
  
    function addBookToShoppingCart(event) {
        var addBookToShoppingCart = document.getElementsByClassName('btn-primary')
        for(var i = 0; i < addBookToShoppingCart.length; i++) {
            var button = addBookToShoppingCart [i];
            button.addEventListener('click', addToCartClicked);
        }
      var button = event.target
      var shopItem = button.parentElement.parentElement
      var title = shopItem.getElementsByClassName('books')
      console.log("book added")
      }
      addBookToShoppingCart()
     function showSum() {

      var Sum = 0;
      Sum = Sum + (cartBookPrice * bookQuantity)
      document.getElementById("total").innerHTML = 'total' + Sum + '€'
      }
      showSum()
      
    }   
 );

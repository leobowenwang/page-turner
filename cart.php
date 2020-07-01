<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>
<body>
<style>
.button {
  border: none;
  color: white;
  padding: 15px 40px;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 950px;
  cursor: pointer;
  border-radius: .25rem;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: #007bff; /* Blue */
  transition-duration: 0.4s;
}
.button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
.total-price-text {
  color: black;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 950px;
}

</style>
    <div class="container">
    <section class="breadcrumb-section">
        <h2 class="sr-only">Site Breadcrumb</h2>
        <div class="breadcrumb-contents">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/page-turner/index.php">Home</a></li>
                    <li class="breadcrumb-item active">Shopping Cart</li>
                </ol>
            </nav>
        </div>
    </section>
        <h1>Shopping Cart</h1> 
        <hr>
        </div>
        <div>
        <strong class= "total-price-text">Total:</strong>
        <span class= "total-price" style= "font-size: 25px;">0€</span>
        <button class="button buy-btn">Buy Now</button>
        <p style= "margin-left: 950px;">Pay by Paypal, Credit Cart or Account</p>
        </div>
      <hr>

    </div>
   <!--load books position-->
   <p id="books"></p>
   
   <script src="/page-turner/js/shoppingcart.js"></script>

   <!-- Pagination -->
   <ul class="pagination justify-content-center">
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
        </li>
    </ul>

</body>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


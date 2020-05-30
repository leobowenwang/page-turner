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
</body>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


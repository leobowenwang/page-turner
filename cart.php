<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>
<body>
<!--
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


   <p id="books"></p>
   <p id="text" style = "margin-left: 500px; font-size: 25px;">Your Cart is Empty <br> 
   You should have a look at our awesome Books, you’ll certainly find one you need.</p>
   


   <script src="/page-turner/js/shoppingcart.js"></script>
-->

<div class="px-4 px-lg-0">
    <!-- For demo purpose -->
    <div class="container py-5 text-center">
        <h1 class="display-4">Shopping Cart</h1>
    </div>
    <!-- End -->

    <div class="pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                    <!-- Shopping cart table -->
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col-6" class="border-0 bg-light">
                                    <div class="p-2 px-3 text-uppercase">Product</div>
                                </th>
                                <th scope="col-2" class="border-0 bg-light">
                                    <div class="py-2 text-uppercase">Price</div>
                                </th>
                                <th scope="col-2" class="border-0 bg-light">
                                    <div class="py-2 text-uppercase">Quantity</div>
                                </th>
                                <th scope="col-2" class="border-0 bg-light">
                                    <div class="py-2 text-uppercase">Total</div>
                                </th>
                            </tr>
                            </thead>

                            <tbody>


                            <!--
                                                            <tr>
                                                                <th scope="row" class="border-0">
                                                                    <div class="p-2">
                                                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" class="img-fluid rounded shadow-sm">
                                                                        <div class="ml-3 d-inline-block align-middle">
                                                                            <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Timex Unisex Originals</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                                <td class="border-0 align-middle"><strong>$79.00</strong></td>
                                                                <td class="border-0 align-middle"><strong>3</strong></td>
                                                                <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div class="p-2">
                                                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-3_cexmhn.jpg" alt="" width="70" class="img-fluid rounded shadow-sm">
                                                                        <div class="ml-3 d-inline-block align-middle">
                                                                            <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">Lumix camera lense</a></h5><span class="text-muted font-weight-normal font-italic">Category: Electronics</span>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                                <td class="align-middle"><strong>$79.00</strong></td>
                                                                <td class="align-middle"><strong>3</strong></td>
                                                                <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div class="p-2">
                                                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-2_qxjis2.jpg" alt="" width="70" class="img-fluid rounded shadow-sm">
                                                                        <div class="ml-3 d-inline-block align-middle">
                                                                            <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block">Gray Nike running shoe</a></h5><span class="text-muted font-weight-normal font-italic">Category: Fashion</span>
                                                                        </div>
                                                                    </div>
                                                                <td class="align-middle"><strong>$79.00</strong></td>
                                                                <td class="align-middle"><strong>3</strong></td>
                                                                <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                                                </td>
                                                            </tr>
                            -->

                            </tbody>

                        </table>
                        <div class="product"></div>
                    </div>

                    <div class="sum">
                    </div>
                    <!-- End -->
                </div>
            </div>
            <!--
            <div class="row py-5 p-4 bg-white rounded shadow-sm">
                <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                    <div class="p-4">
                        <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                        <div class="input-group mb-4 border rounded-pill p-2">
                            <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0">
                            <div class="input-group-append border-0">
                                <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                    <div class="p-4">
                        <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                        <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                    <div class="p-4">
                        <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                        <ul class="list-unstyled mb-4">
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
                            <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                <h5 class="font-weight-bold">$400.00</h5>
                            </li>
                        </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                    </div>
                </div>
            </div>
            -->

        </div>
    </div>
</div>
</body>
<script>
    displayCart();
</script>
<script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>

<body>
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
                            </tbody>

                        </table>
                        <div class="product"></div>
                    </div>

                    <div class="sum">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>

<script src="https://www.paypal.com/sdk/js?client-id=AaW-5qnZi0F3LVdMPHyqunGhW4JnRFi_G_RxppHE9gf1ft9ViivJQtOKk8dKm7-_aIijH8xG2d6rZkOC"></script>
<script>
    displayCart();

    let total = localStorage.getItem('totalcost');
    total = parseFloat(total);

    paypal.Buttons({
        createOrder: function(data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: totalCost()
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function(details) {
                // This function shows a transaction success message to your buyer.
                alert('Transaction completed by ' + details.payer.name.given_name);
            });
        }
    }).render('#paypal-button-container');
</script>


<script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


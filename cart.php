<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";
?>

<body>
<div class="px-4 px-lg-0">
    <!-- For demo purpose -->
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
                                    <h3 class="p-2 px-3 text-uppercase text-center">Shopping Cart</h3>
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
                        value: total,
                        currency: 'EUR'
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


<script type="module" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"></script>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


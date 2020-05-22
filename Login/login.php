<?php require_once 'controllers/authController.php';
include('C:\xampp\htdocs\page-turner\includes/header.php');
include('C:\xampp\htdocs\page-turner\includes/nav.php');
?>

<body>

<div class="container bg">
    <div class="row">
        <div class="col-md-4 offset-md-4 form-div login">
            <form action="login.php" method="post">
                <h3 class="text-center">Login</h3>
                <?php if (count($errors)): ?>
                    <div class="alert alert-danger">
                        <?php foreach ($errors as $error): ?>
                            <li><?php echo $error; ?></li>
                        <?php endforeach; ?>

                    </div>
                <?php endif; ?>

                <div class="form-group">
                    <label for="username">Username/E-Mail</label>
                    <input type="text" name="username" value="<?php echo $username; ?>"
                           class="form-control form-control-lg">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="form-control form-control-lg">
                </div>

                <div class="form-group">
                    <button type="submit" name="login-btn" class="btn btn-primary btn-block btn-lg">Login</button>
                </div>
                <p class="text-center">Not yet a member? <a href="signup.php">Sign Up</a></p>
        </div>
    </div>
</div>

</body>
</html>
<?php
include('C:\xampp\htdocs\page-turner\includes\footer.php');
?>

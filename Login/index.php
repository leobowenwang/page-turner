<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/page-turner/login/controllers/authController.php'; //session is started there, other things set here like set Session
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/header.php";
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/nav.php";


//verify user using
if (isset($_GET['token'])) { //set in URL , authController Line 103 in Body
    $token = $_GET['token'];
    verifyUser($token);
}

//we need to check if user not logged in he cannot see the page therefore
if (!isset($_SESSION['id'])) {
    header('Location: login.php');
    exit();
}
?>
<body>
<div class="container bg">
    <div class="row">
        <div class="col-md-4 offset-md-4 form-div login">
            <?php if (isset($_SESSION['message'])): ?>
                <div class="alert <?php echo $_SESSION['alert-class']; ?>"> <!-- call of global variable session -->
                    <?php
                    echo $_SESSION['message'];
                    unset($_SESSION['message']);
                    unset($_SESSION['alert-class']);

                    ?>
                </div>
            <?php endif; ?>

            <h3>Welcome, <?php echo $_SESSION['username']; ?> </h3>

            <a href="index.php?logout=1"">
            <button class="btn btn-block btn-lg btn-danger">Logout</button>
            <br>
            </a>

            <?php if (!$_SESSION['verified']): //if not verified,
                ?>
                <div class="alert alert-warning">

                    You need to verify your account. Sign in to your email account and click on the
                    verification link we just emailed you at
                    <strong><?php echo $_SESSION['email']; ?></strong> <!-- call of global variable session -->

                </div>
            <?php endif; ?>

            <?php if ($_SESSION['verified']): //if verified,
                ?>
                <div class="alert alert-success" role="alert">You have been verified!</div>
            <?php endif; ?>

<!--
            <?php if ($_SESSION['isAdmin']): //if isAdmin
                ?>
                <a href="adminPage.php">Delete Users</a>
            <?php endif; ?>
    -->
        </div>
    </div>
</div>

</body>
</html>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/page-turner/includes/footer.php";
?>


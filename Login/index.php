<?php 
require_once 'controllers/authController.php'; //session is started there, other things set here like set Session
include('C:\xampp\htdocs\page-turner\includes/header.php'); //PLEASE CHANGE PATH
include('C:\xampp\htdocs\page-turner\includes/nav.php');


//verify user using
if(isset($_GET['token'])){
    $token = $_GET['token'];
    verifyUser($token);
}

//we need to check if user not logged in he cannot see the page therefore
if(!isset($_SESSION['id'])){
    header('location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Homepage</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<div class="container">
    <div class="row">
        <div class="col-md-4 offset-md-4 form-div login">
        
        <?php if(isset($_SESSION['message'])): ?>
        <div class="alert <?php echo $_SESSION['alert-class']; ?>"> <!-- call of global variable session -->
         <?php 
         echo $_SESSION['message'];
         unset($_SESSION['message']);
         unset($_SESSION['alert-class']);
         
         ?> 
        </div>
        <?php endif; ?>

        <h3>Welcome, <?php echo $_SESSION['username']; ?> </h3>

        <a href="index.php?logout=1" class="logout">logout</a>
        

        <?php if(!$_SESSION['verified']): //if not verified,
            ?> 
        <div class="alert alert-warning">

            You need to verify your account. Sign in to your email account and click on the
            verification link we just emailed you at 
            <strong><?php echo $_SESSION['email']; ?></strong> <!-- call of global variable session -->
            
        </div>
        <?php endif; ?>

        <?php if($_SESSION['verified']): //if verified,
            ?>
        <button class="btn btn-block btn-lg btn-primary">You are verified!</button>
        <?php endif; ?>
        </div>
    </div>
</div>

</body>
</html>

<?php
include('C:\xampp\htdocs\page-turner\includes\footer.php');
?>
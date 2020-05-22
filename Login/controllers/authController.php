<?php
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;

session_start();

require 'config/db.php';

$errors = array();
$username = ""; //use of them in signup.php in form
$email = "";

//if user clicks on the sign up button
if(isset($_POST['signup-btn'])){ //we take from Post form in signup.php
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $passwordConf = $_POST['passwordConf'];
    
    //validation
    if(empty($username)){
        $errors['username'] = "Username required";
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){ //php function
        $errors['email'] = "Email address is invalid";
    }

    if(empty($email)){
        $errors['email'] = "Email required";
    }

    if(empty($password)){
        $errors['password'] = "Password required";
    }

    if($password !== $passwordConf){
        $errors['password'] = "The two passwords do not match";
    }


    $emailQuery = "SELECT * FROM users WHERE email=? LIMIT 1"; //like in programming 2 exercise 4 SQL statements
    $stmt = $conn->prepare($emailQuery);
    $stmt->bind_param('s', $email); //adding to query
    $stmt->execute();
    $result = $stmt->get_result();
    $userCount = $result->num_rows;
    $stmt->close(); //closing

    if($userCount > 0){
        $errors['email'] = "Email already exists";
    }

    if(count($errors) === 0){ //if no errors then this
        $password = password_hash($password, PASSWORD_DEFAULT); //for security reasons encryption
        $token = bin2hex(random_bytes(50)); //generate unique random string for email validation later, couldnt solve
        $verified = false;

        $sql = "INSERT INTO users (username, email, verified, token, password) VALUES (?, ?, ?, ?, ?)"; //prepared Statement
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('ssbss', $username, $email, $verified, $token, $password); //adding to query, s string b boolean

        if($stmt->execute()){ //if succesfull
            //login user - use of session
            $user_id = $conn->insert_id;
            $_SESSION['id'] = $user_id;
            $_SESSION['username'] = $username;
            $_SESSION['email'] = $email;
            $_SESSION['verified'] = $verified;

            //sendVerificationEmail($email, $token);
           
        require 'PHPMailer-master/src/Exception.php';
        require 'PHPMailer-master/src/PHPMailer.php';
        require 'PHPMailer-master/src/SMTP.php';


    if(isset($_POST['signup-btn'])){
          $to_email = $_SESSION['email'];
          $mail = new PHPMailer();
          $mail->isSMTP();
          $mail->Host = "smtp.gmail.com";
          $mail->SMTPAuth = true;
          $mail->Username = "OffiziellPageTurner@gmail.com";
          $mail->Password = "tquxsixczkoeivql";

          $mail->setFrom("offiziellpageturner@gmail.com", "PageTurner");
          $mail->addAddress("offiziellpageturner@gmail.com", "PageTurner");

        $body = '<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verify email</title>
        </head>
        <body>
        <div>
        <p>
        Thank you for signing up on our website. Click on the link below for verification.</p>
        </div>
        
        <a href="http://localhost/loginfolder/index.php?token=' . $token . '">Verify your email address</a>
        
            </body>
        </body>
        </html>';

          $mail->isHtml(true);
          $mail->Subject = "Verify your Email Address";
          $mail->Body = $body;

          if($mail->send()){
        } else {
          }

        }

            




            //set flash message
            $_SESSION['message'] = "You are now logged in!";
            $_SESSION['alert-class'] = "alert-success";
            header('location: index.php'); //redirection to index.php
            exit();

             
        }else{
            $errors['db_error'] = "Database error: failed to register";
        }




    }



}

//if user click on login button

if(isset($_POST['login-btn'])){ //we take from Post form in signup.php
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    //validation
    if(empty($username)){
        $errors['username'] = "Username required";
    }

    if(empty($password)){
        $errors['password'] = "Password required";
    }

    if(count($errors) === 0){

    $sql = "SELECT * FROM users WHERE email=? OR username=? LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $username, $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc(); //if user exists, returns us a user

    if (password_verify($password, $user['password'])){ //php method, takes 2 parameters and verifies, if true 
        //login success
        $_SESSION['id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['email'] = $user['email'];
        $_SESSION['verified'] =  $user['verified'];
        //set flash message
        $_SESSION['message'] = "You are now logged in!";
        $_SESSION['alert-class'] = "alert-success";
        header('location: index.php'); //redirection to index.php
        exit();

    } else {
        $errors['login_fail'] = "Wrong credentials";
    }

}

}

//logout user
if(isset($_GET['logout'])){
    session_destroy;
    unset($_SESSION['id']);
    unset($_SESSION['username']);
    unset($_SESSION['email']);
    unset($_SESSION['verified']);
    header('location: login.php'); //here to HOMEPAGE !!
    exit();
}

//verify user
function verifyUser($token){
    global $conn;
    $sql = "SELECT * FROM users WHERE token='$token'LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result)>0){
        //user exists
        $user = mysqli_fetch_assoc($result); //associative array
        $update_query = "UPDATE users SET verified=1 WHERE token='$token'"; //changing it to 1

        if(mysqli_query($conn, $update_query)){
            //log user in after verifying
            $_SESSION['id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['verified'] =  1; //new verified important for later!
            //set flash message
            $_SESSION['message'] = "Your email address was successfully verified!";
            $_SESSION['alert-class'] = "alert-success";
            header('location: index.php'); //redirection to index.php
            exit();

        }
    } else {
        echo 'User not found'; 
    }
}
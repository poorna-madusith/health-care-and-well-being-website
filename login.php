<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
    <link rel="stylesheet" href="navigationbar.css">
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="topnavbar">
        <img src="images/logo.png" alt="Logo" class="logo">
        <a href="home.html">HOME</a>
        <a href="about_us.html">ABOUT US</a>
        <a href="gallery.html">GALLERY</a>
        <a href="shop.html">SHOP</a>
        <a href="sitemap.html">SITE MAP</a>
        <a href="#comments">COMMENTS</a>
        <a href="User_Profile.html">
            <img src="images/profile-user.png" alt="Login" class="login">
        </a>
    </div>

    <div class="form-container">
        <form class="loginform" action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
            <label for="username">Username:</label><br>
            <input type="text" name="username" ><br>
            <label for="password">Password:</label><br>
            <input type="password" name="password" ><br>
            <input type="submit" value="Login"><br><br>
            <label for="createacc">if you dont have an account?</label><br><br>
            <a href="User_profile.html" class="create-account-btn">Create Account</a>
        </form>
    </div>

    

    <div class="bottomnavbar">
        <div class="logowithmission">
            <img src="images/logo.png" alt="logo" class="logo">
            <span class="logo-text">Good Health....Good Life....</span>
        </div>
        <div class="navgroup">
            <a href="home.html">HOME</a>
            <a href="about_us.html">ABOUT US</a>
            <a href="gallery.html">GALLERY</a>
        </div>
        <div class="navgroup">
            <a href="shop.html">SHOP</a>
            <a href="sitemap.html">SITE MAP</a>
            <a href="#comments">COMMENTS</a>
        </div>
        <a href="feedback.html" class="feedbackbutton">Give Us A Feedback</a>
        <div class="socialmedia">
            <a href=""><img src="images/Facebook_f_logo_(2019).svg" alt="facebook" ></a>
            <a href=""><img src="images/Instagram_icon.png" alt="instagram" ></a>
            <a href=""><img src="images/Gmail_icon_(2020).svg" alt="email" ></a>
        </div>
    </div>
    <script src="gellery.js"></script>
    <script src="navigationbar.js"></script>
</body>
</html>

<?php

    if($_SERVER["REQUEST_METHOD"]=="POST"){
        if (isset($_POST['create_account'])) {
            // Redirect to create_account.html
            header("User_Profile.html");
            exit();
        }
        if (isset($_POST['login'])) {
            // Handle login logic
        }
    }

?>
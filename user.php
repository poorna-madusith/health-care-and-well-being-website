<?php
session_start(); // Ensure session is started

// Check if the user is logged in by checking if session variables are set
if (!isset($_SESSION['username'])) {
    echo "<script>alert('You must be logged in to view this page.'); window.location.href = 'login.php';</script>";
    exit();
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="user_profile.css">
        <meta charset="UTF-8" >
        <meta http-equiv="X-UA-Compatible" content="IE=edge" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" >
        <title>Profile</title>
        <link rel="stylesheet" href="navigationbar.css">
        <link rel="stylesheet" href="user.css">
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
            <a href="login.php">
                <img src="images/profile-user.png" alt="Login" class="login">
            </a>
    </div>

    <div class="profile-container">
        <div>
            <h1>Welcome, <?php echo htmlspecialchars($_SESSION['full_name']); ?>!</h1>
            <p><strong>Username:</strong> <?php echo htmlspecialchars($_SESSION['username']); ?></p>
            <p><strong>Age:</strong> <?php echo htmlspecialchars($_SESSION['age']); ?></p>
            <p><strong>Email:</strong> <?php echo htmlspecialchars($_SESSION['email']); ?></p>
            <a href="login.php">Logout</a>
        </div>
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

   
    <script src="navigationbar.js"></script>
</body>

</html>



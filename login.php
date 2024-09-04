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
        <a href="login.php">
            <img src="images/profile-user.png" alt="Login" class="login">
        </a>
    </div>

    <div class="form-container">
        <form class="loginform" action="login.php" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br>
            <input type="submit" value="Login"><br><br>
            <label for="createacc">if you dont have an account?</label><br><br>
            <a href="User_profile.php" class="create-account-btn">Create Account</a>
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
session_start();

// Database connection
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "health_care"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ensure that both fields are set
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $form_username = $_POST['username'];
        $form_password = $_POST['password'];

        // SQL query to fetch the user data
        $sql = "SELECT full_name, age, email, username, password FROM user_details WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $form_username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $hashed_password = $row['password'];

            // Verify the password
            if (password_verify($form_password, $hashed_password)) {
                // Store user details in session
                $_SESSION['full_name'] = $row['full_name'];
                $_SESSION['age'] = $row['age'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['username'] = $row['username'];

                echo "<script> window.location.href = 'user.php';</script>";
            } else {
                echo "<script>alert('Incorrect password. Please try again.'); window.history.back();</script>";
            }
        } else {
            echo "<script>alert('Username not found. Please check your username or create a new account.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Both username and password are required.'); window.history.back();</script>";
    }
}

$conn->close();
?>

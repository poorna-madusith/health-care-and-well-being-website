<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="user_profile.css">
        <meta charset="UTF-8" >
        <meta http-equiv="X-UA-Compatible" content="IE=edge" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" >
        <title>User Profile</title>
        <link rel="stylesheet" href="navigationbar.css">
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

    <div class="user-profile-form">
        <form  action="User_Profile.php" method="post">
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required><br>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="1" max="100" required><br>

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br>

            <button type="submit">Submit</button>
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

    <script src="user_profile.js"></script>
    <script src="navigationbar.js"></script>
</body>

</html>

<?php
// Define database connection parameters
$servername = "localhost"; // or your database server
$username = "root";
$password = "";
$dbname = "health_care";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $fullName = mysqli_real_escape_string($conn, $_POST['fullName']);
    $age = mysqli_real_escape_string($conn, $_POST['age']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Hash the password for security
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    
    $sql = "INSERT INTO user_details (full_name, age, email, username, password)
            VALUES ('$fullName', '$age', '$email', '$username', '$hashedPassword')";


        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Successfully registered'); </script>";
        }
         else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

}

// Close connection
$conn->close();
?>

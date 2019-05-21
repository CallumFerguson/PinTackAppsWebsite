<?php
    $username = empty($_COOKIE["username"]) ? '' : $_COOKIE["username"];
    if(!$username)
    {
        header("Location: /login/info.html");
        exit;
    }

    header("Cache-Control: no-store, no-cache, must-revalidate, pre-check=0, post-check=0, max-age=0, s-maxage=0");
    header("Pragma:no-cache");
    header("Expires: 0");
?>

<!DOCTYPE html>

<html lang="en">
    <head>
        
        <title>Final</title>
        
        <meta charset="utf-8">
        
        <link rel="stylesheet" href="/shared.css">
        <link rel="stylesheet" href="/Navbar/navbar.css">
        <link rel="stylesheet" href="/GameWindow/GameWindow.css">
        <link rel="stylesheet" href="styles.css">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="/GameWindow/GameWindow.js" aspectRatio="9" by="16"></script>
        <script src="/Navbar/navbar.js" page="1"></script>
        
    </head>
    <body>
        
        <div id="gameWindowContainer">
            <div>
                <!-- iframe is set to fill the div because the iframe cannot always display its size correctly
                     while resizing, so the div shows what the size will be once it is done loading.

                     The game is hosted on an S3 bucket and displayed in an iframe because while I programmed
                     the entirety of the game, it's not related to this class, and the html was auto generated
                     by the Unity game engine and just fills the page, so it must be in an iframe. Also, putting
                     the game files on an S3 bucket takes load off of the server -->
                <iframe src="http://cfh5foverkilldrill.net.s3-website.us-east-2.amazonaws.com/"></iframe>
            </div>
        </div>
        <h2>This game was designed to be played on a touchscreen phone, but it can still be played with a mouse. There are no keyboard controls.</h2>
        
    </body>
</html> 
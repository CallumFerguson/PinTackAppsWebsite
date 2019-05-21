<!DOCTYPE html>

<html lang="en">
    <head>
        <title>Final</title>
        
        <meta charset="utf-8">
        
        <link rel="stylesheet" href="/shared.css">
        <link rel="stylesheet" href="/Navbar/navbar.css">
        <link rel="stylesheet" href="styles.css">
        
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="/Navbar/navbar.js" page="-1"></script>
        
        <script>
            $(function(){
                $("input[type=submit]").button();
            });
        </script>
    </head>
    <body>
        <div id="loginWidget" class="ui-widget">
            <h1 class="ui-widget-header">Login</h1>

            <?php
                if ($error) {
                    print "<div class=\"ui-state-error\">$error</div>\n";
                }
            ?>

            <form action="login.php" method="POST">
                
                <input type="hidden" name="action" value="login">

                <div class="stack">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" class="ui-widget-content ui-corner-all" autofocus value="<?php print $username; ?>">
                </div>

                <div class="stack">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" class="ui-widget-content ui-corner-all">
                </div>

                <div class="stack">
                    <input type="submit" value="Submit">
                </div>
            </form>
            <h3>Use username="test" and password="pass" to login </h3>
        </div>
    </body>
</html>
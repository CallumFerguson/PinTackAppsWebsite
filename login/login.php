<?php

    $username = empty($_COOKIE["username"]) ? '' : $_COOKIE["username"];

    if($username)
    {
        setcookie("username", "", 1, "/");
        header("Location: login.php");
        exit;
    }

    $action = empty($_POST['action']) ? '' : $_POST['action'];

    if($action == "login")
        login();
    else
        loginForm();

    function login() {
        $username = empty($_POST["username"]) ? "" : $_POST["username"];
        $password = empty($_POST["password"]) ? "" : $_POST["password"];
        
        if($username == "test" && $password == "pass")
        {
            setcookie("username", $username, time() + (60 * 60 * 24 * 365), "/"); //one year
            header("Location: /");
        }
        else
        {
            $error = "Error: Incorrect username or password";
            require "loginform.php";
        }
    }

    function loginForm() {
        header("Location: loginform.php");
    }
?>
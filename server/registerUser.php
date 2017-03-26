<?php
session_start();

include_once "../config/database.php";
include_once "./register.php";

$error = array();

$database = new Database();
$db = $database->getConnection();
$user = new Register($db);

if ($user->is_loggedin() != "") {
    $user->redirect('./index.php');
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $uname = trim($_POST['username']);
    $umail = trim($_POST['email']);
    $upswd = trim($_POST['pswd']);

    if ($uname == "" || $umail == "" || $upswd == "") {
        $error[] = "Please provide all details.";
    }
    else if (!filter_var($umail, FILTER_VALIDATE_EMAIL)) {
        $error[] = 'Please enter a valid email address.';
    }
    else if(strlen($upswd) < 6){
        $error[] = "Password must be at least 6 characters";
    }
    else {
         try {
            $stmt = $db->prepare("SELECT name, email FROM members WHERE name=:uname OR email=:umail");
             $stmt->execute(array(':uname'=>$uname, ':umail'=>$umail));
             $row = $stmt->fetch(PDO::FETCH_ASSOC);

             if($row['name'] == $uname) {
                 $error[] = "Sorry username already taken !";
             }
             else if($row['email'] == $umail) {
                 $error[] = "sorry email id already taken !";
             }
             else {
                 if($user->register($uname, $umail, $upass))
                 {
                     $user->redirect('./index.php');
                 }
             }
         }
         catch(PDOException $e)
         {
             echo $e->getMessage();
         }
    }
}
?>
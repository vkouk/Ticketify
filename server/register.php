<?php
class Register {
    private $con;

    public function __construct($db) {
        $this->con = $db;
    }

    public function register($uname, $umail, $upass)
    {
        try
        {
            $new_password = password_hash($upass, PASSWORD_DEFAULT);

            $stmt = $this->con->prepare("INSERT INTO members(name, email, pswd) VALUES('".$uname."', '".$umail."', '".$new_password."')");

            $stmt->execute();

            $user = array(
                "name" => $uname,
                "email" => $umail,
                "pswd" => $new_password
            );

            return json_encode($user);
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }

    public function is_loggedin()
    {
        if(isset($_SESSION['user_session']))
        {
            return true;
        }
    }

    public function redirect($url)
    {
        header("Location: $url");
    }
}
?>
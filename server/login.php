<?php
class Login {
    private $con;

    public function __construct($db) {
        $this->con = $db;
    }

    public function login($uname, $upass)
    {
        try
        {
            $stmt = $this->con->prepare("SELECT * FROM members WHERE name = '".$uname."' AND  pswd = '".$upass."'");
            $userRow = $stmt->fetchAll();
            if($stmt->rowCount() > 0)
            {
                if(password_verify($upass, $userRow['pswd']))
                {
                    $_SESSION['user_session'] = $userRow['id'];
                    return true;
                }
                else
                {
                    return false;
                }
            } else {
                echo "User not found";
            }

            echo '<script>';
            echo 'var userRow = ' . json_encode($userRow, JSON_PRETTY_PRINT) . ';';
            echo '</script>';
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
<?php
class Login {
    private $con;

    public function __construct($db) {
        $this->con = $db;
    }

    public function login($uname, $umail, $upass)
    {
        try
        {
            $stmt = $this->db->prepare("SELECT * FROM members WHERE username=:uname OR email=:umail AND pswd=:upass LIMIT 1");
            $stmt->execute(array(':uname'=>$uname, ':umail'=>$umail, ':upass'=>$upass));
            $userRow = $stmt->fetch(PDO::FETCH_ASSOC);
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
            }
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
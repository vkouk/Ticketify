<?php
class User
{
    private $con;
    public $id, $name, $email, $pswd;

    public function __construct($db) {
        $this->con = $db;
    }

    public function fetchUsers()
    {
        $query = "SELECT * FROM members ORDER BY id ASC";

        $statement = $this->con->prepare($query);
        $statement->execute();

        $users = $statement->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($users);
    }

    public function login()
    {
        try
        {
            $query = "SELECT * FROM members WHERE name=:name AND pswd=:pswd";

            $stmt = $this->con->prepare($query);

            $name = htmlspecialchars(strip_tags($this->name));
            $pswd = htmlspecialchars(strip_tags($this->pswd));

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':pswd', $pswd);

            $stmt->execute();
            $userRow = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if($stmt->rowCount() > 0)
            {
                if(password_verify($pswd, $userRow['pswd']))
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
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }

    public function register()
    {
        try
        {
            $query = "INSERT INTO members
                SET name=:name, email=:email, pswd=:pswd";

            $stmt = $this->con->prepare($query);

            $name = htmlspecialchars(strip_tags($this->name));
            $email = htmlspecialchars(strip_tags($this->email));
            $pswd = htmlspecialchars(strip_tags($this->pswd));
            $new_password = password_hash($pswd, PASSWORD_DEFAULT);

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':pswd', $new_password);

            $stmt->execute();
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }

    public function logout()
    {
        session_destroy();
        unset($_SESSION['user_session']);
        return true;
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
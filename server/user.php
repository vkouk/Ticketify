<?php
class User
{
    private $con;
    public $id, $name, $email, $pswd, $isLoggedin;

    public function __construct($db) {
        $this->con = $db;
    }

    public function fetchUser()
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
                    try
                    {
                        $query = "INSERT INTO member_session SET user_id=:user_id, session_id=:session_id ";
                        $stmt = $this->con->prepare($query);

                        $stmt->bindParam(':user_id', $userRow['id']);
                        $stmt->bindParam(':session_id', $_SESSION['id']);

                        $stmt->execute();

                        $this->isLoggedin = true;
                    }
                    catch(PDOException $e)
                    {
                        echo $e->getMessage();
                    }
                }
                else
                {
                    $this->isLoggedin = false;
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
        unset($_SESSION['id']);
        return true;
    }

    public function is_loggedin()
    {
        return json_encode($this->isLoggedin);
    }

    public function redirect($url)
    {
        header("Location: $url");
    }
}
?>
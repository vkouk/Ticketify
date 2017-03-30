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
        $query = "SELECT id, name FROM members ORDER BY id";

        $statement = $this->con->prepare($query);
        $statement->execute();

        $users = $statement->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($users);

        echo $users;
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

    public function redirect($url)
    {
        header("Location: $url");
    }
}
?>
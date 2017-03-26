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

            $stmt = $this->con->prepare("INSERT INTO members(name, email, pswd) 
                                                       VALUES(:uname, :umail, :upass)");

            $stmt->bindparam(":uname", $uname);
            $stmt->bindparam(":umail", $umail);
            $stmt->bindparam(":upass", $new_password);
            $stmt->execute();

            return json_encode($stmt);
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }
}
?>
<?php
class Database {

    private $host = "localhost", $db_name = "ticketify", $username = "root", $password = "vasi2326";
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        } catch(PDOException $ex) {
            echo "Connection error: " . $ex->getMessage();
        }

        return $this->conn;
    }
}
?>
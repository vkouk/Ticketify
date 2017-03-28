<?php
class Database {

    private $host = "db24.papaki.gr:3306", $db_name = "n91264atha_ticketify", $username = "n9126_ticketify", $password = "vasi2326";
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
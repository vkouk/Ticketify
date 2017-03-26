<?php
class Tickets {
    private $con, $table_n = "tickets";
    public $id, $name;

    public function __construct($db) {
        $this->con = $db;
    }

    public function displayTickets() {
        $q = "SELECT id, name FROM tickets ORDER BY name";

        $statement = $this->con->prepare($q);
        $statement->execute();

        $tickets = $statement->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($tickets);
    }
}
?>
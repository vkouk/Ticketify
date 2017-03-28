<?php
class TicketCategory {
    private $con, $table_n = "tickets_categories";
    public $category_id, $cat_name;

    public function __construct($db) {
        $this->con = $db;
    }

    public function displayTicketCategory() {
        $q = "SELECT category_id, name FROM tickets_categories ORDER BY cat_name";

        $statement = $this->con->prepare($q);
        $statement->execute();

        $tickets = $statement->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($tickets);
    }
}
?>
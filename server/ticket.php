<?php
class Ticket
{
    private $conn;
    private $table_name = "tickets";

    public $id, $name, $price, $description, $category_id;

    public function __construct($db){
        $this->conn = $db;
    }

    public function readAll()
    {
        $query = "SELECT t.id, t.name, t.description, t.price, c.cat_name as category_name
                FROM " . $this->table_name . " t
                    LEFT JOIN tickets_categories c
                        ON t.category_id=c.category_id
                ORDER BY id DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    public function create()
    {
        try
        {
            $query = "INSERT INTO tickets
                SET name=:name, description=:description, price=:price, category_id=:category_id";

            $stmt = $this->conn->prepare($query);

            $name = htmlspecialchars(strip_tags($this->name));
            $description = htmlspecialchars(strip_tags($this->description));
            $price = htmlspecialchars(strip_tags($this->price));
            $category_id = htmlspecialchars(strip_tags($this->category_id));

            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':category_id', $category_id);

            $stmt->execute();

        }
        catch(PDOException $exception)
        {
            die('ERROR: ' . $exception->getMessage());
        }
    }
}
<?php
class cart
{
    private $conn;
    public $t_name, $t_description, $cat_id;

    public function __construct($db){
        $this->conn = $db;
    }

    public function displayCart()
    {
        try
        {
            $query = "SELECT c.ticket_name, c.ticket_description, cat.cat_name FROM tickets_cart c 
            LEFT JOIN tickets_categories cat ON c.cat_id = cat.category_id ORDER BY cart_id DESC";

            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

            return json_encode($results);
        }
        catch(PDOException $exception)
        {
            die('ERROR: ' . $exception->getMessage());
        }
    }

    public function addToCart()
    {
        try
        {
            $query = "INSERT INTO tickets_cart SET ticket_name=:t_name, ticket_description=:t_description,
              cat_id=:cat_id";

            $stmt = $this->conn->prepare($query);
            $stmt->execute(array(
                ':t_name' => $this->t_name,
                ':t_description' => $this->t_description,
                ':cat_id' => $this->cat_id
            ));
        }
        catch(PDOException $exception)
        {
            die('ERROR: ' . $exception->getMessage());
        }
    }

    public function deleteFromCart()
    {
        try
        {
            $query = "UPDATE tickets_cart SET ticket_name=:t_name, ticket_description=:t_description,
              cat_id=:cat_id WHERE cart_id=:cart_id";

            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        }
        catch(PDOException $exception)
        {
            die('ERROR: ' . $exception->getMessage());
        }
    }
}
?>
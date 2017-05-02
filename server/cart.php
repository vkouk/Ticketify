<?php
class Cart
{
    private $conn;
    public $cart_id, $t_name, $t_description, $t_id, $t_category_id;

    public function __construct($db){
        $this->conn = $db;
    }

    public function displayCart()
    {
        try
        {
            $query = "SELECT c.cart_id, c.ticket_name, c.ticket_description, cat.cat_name FROM tickets_cart c 
            LEFT JOIN tickets_categories cat ON c.cat_id = cat.category_id ORDER BY cart_id ASC";

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
            /*$query = "INSERT INTO tickets_cart SET ticket_name=:t_name, ticket_description=:t_description,
              cat_id=:cat_id";*/
            $query = "INSERT INTO tickets_cart (ticket_name, ticket_description, ticket_id, cat_id) SELECT
                name, description, id, category_id FROM tickets
                WHERE name=:t_name, description=:t_description, id=:t_id, category_id=:t_category_id";

            $stmt = $this->conn->prepare($query);
            $stmt->execute(array(
                ':t_name' => $_POST['name'],
                ':t_description' => $_POST['description'],
                ':t_id' => $_POST['id'],
                ':t_category_id' => $_POST['category_id']
            ));
            /*$stmt->execute(array(
                ':t_name' => $this->t_name,
                ':t_description' => $this->t_description,
                ':cat_id' => $this->cat_id
            ));*/
        }
        catch(PDOException $exception)
        {
            die('ERROR: ' . $exception->getMessage());
        }
    }

    public function deleteFromCart($ins)
    {
        try
        {
            $query = "DELETE FROM tickets_cart WHERE cart_id IN (:ins)";
            $stmt = $this->conn->prepare($query);
            $ins=htmlspecialchars(strip_tags($ins));
            $stmt->bindParam(':ins', $ins);

            if($stmt->execute()){
                return true;
            }else{
                return false;
            }
        }
        catch(PDOException $exception)
        {
            die('ERROR: ' . $exception->getMessage());
        }
    }
}
?>
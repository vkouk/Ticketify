<?php
class Cart
{
    private $conn;
    public $cart_id, $t_name, $t_description, $id, $t_category_id;

    public function __construct($db){
        $this->conn = $db;
    }

    public function displayCart()
    {
        try
        {
            $query = "SELECT c.cart_id, c.id, c.ticket_name, c.ticket_description, c.ticket_price, cat.cat_name FROM tickets_cart c 
            LEFT JOIN tickets_categories cat ON c.cat_id = cat.category_id ORDER BY cart_id ASC";

            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

            //For javascript futured usage.
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
              cat_id=:t_category_id WHERE tickets_id=:id";

            $stmt = $this->conn->prepare($query);

            $t_name = htmlspecialchars(strip_tags($this->t_name));
            $t_description = htmlspecialchars(strip_tags($this->t_description));
            $t_category_id = htmlspecialchars(strip_tags($this->t_category_id));
            $id = htmlspecialchars(strip_tags($this->id));

            $stmt->execute(array(
                ':t_name' => $t_name,
                ':t_description' => $t_description,
                ':t_category_id' => $t_category_id,
                ':id' => $id
            ));
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
            $query = "DELETE FROM tickets_cart WHERE cart_id =:ins";
            $stmt = $this->conn->prepare($query);
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
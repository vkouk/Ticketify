<?php
class Logout {

    public function logout()
    {
        session_destroy();
        unset($_SESSION['user_session']);
        return true;
    }
}
?>
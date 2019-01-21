<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);



$email = $_POST['email'];


$query = "DELETE FROM restaurant_users WHERE email = $email";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
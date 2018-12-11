<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);


$phone_number = intval($_POST['phone_number']);


$query = "DELETE FROM clients WHERE phone_number = $phone_number";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
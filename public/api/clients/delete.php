<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);


$ID = ($_POST['ID']);


$query = "DELETE FROM clients WHERE ID = '$ID'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);


$ID = ($_POST['ID']);
$status = $_POST['status'];


$query = "UPDATE clients SET status = 2 WHERE ID = '$ID'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);


$ID = ($_POST['ID']);
$status = $_POST['status'];
$wait_end = $_POST['wait_end'];


$query = "UPDATE clients SET status = 3, wait_end = NOW() WHERE ID = '$ID'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
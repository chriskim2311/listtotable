<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);


$ID = ($_POST['ID']);
$status = $_POST['status'];
$wait_notify = $_POST['wait_notify'];


$query = "UPDATE clients SET status = 2, wait_notify = NOW() WHERE ID = '$ID'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);

$restaurant_id = $_POST['restaurant_id'];
$status = $_POST['status'];

$query = "SELECT * FROM clients WHERE status = 1 AND restaurant_id = '$restaurant_id'";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result)>0) {
    while($row = mysqli_fetch_assoc($result)) {
        $output['clients'][] = $row;
    }
    $output['success'] = true;
} else {
    $output['message'] = 'No users found';
}

?>
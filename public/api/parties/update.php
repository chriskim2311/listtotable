<?php
$restaurant_ID = $_POST['restaurant_ID'];
$restaurant_users_ID = $_POST['r_users_ID'];
$comments = $_POST['comments'];
$status = $_POST['status'];

$query = "UPDATE parties SET comments = '$comments' WHERE r_users_ID = '$restaurant_users_ID'";


if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>

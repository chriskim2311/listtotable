<?php
$restaurant_ID = $_POST['restaurant_ID'];
$restaurant_users_ID = $_POST['r_users_ID'];
$comments = $_POST['comments'];
$status = $_POST['status'];

$query = "INSERT INTO parties (restaurant_ID, r_users_ID, comments, status) VALUES ('$restaurant_ID', '$restaurant_users_ID', '$comments', '$status')";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
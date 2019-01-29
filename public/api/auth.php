<?php
session_start();

$output = [];
$output['auth'] = false;


if(isset($_SESSION['userID'])){
    $user = $_SESSION['userID'];

    $output['restaurant_ID'] = $user['restaurant_ID'];
    $output['restaurant_name'] = $user['restaurant_name'];
    $output['restaurant_address'] = $user['restaurant_address'];
    $output['auth'] = true;
}

print(json_encode($output));

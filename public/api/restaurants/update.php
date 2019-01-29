<?php
$google_ID = $_POST['google_ID'];
$restaurant_name = $_POST['restaurant_name'];
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$address = $_POST['address'];
$cuisine_type = $_POST['cuisine_type'];

$query = "UPDATE restaurants SET restaurant_name = '$restaurant_name' WHERE cuisine_type = '$cuisine_type'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
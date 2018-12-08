<?php
$google_ID = $_POST['google_ID'];
$restaurant_name = $_POST['restaurant_name'];
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$address = $_POST['address'];
$cuisine_type = $_POST['cuisine_type'];

$query = "DELETE FROM restaurants WHERE restaurant_name = $restaurant_name";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>


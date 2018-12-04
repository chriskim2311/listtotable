<?php


$query = "UPDATE restaurants SET restaurant_name = '$restaurant_name' WHERE cuisine_type = '$cuisine_type'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
<?php


$query = "DELETE FROM restaurants WHERE restaurant_name = $restaurant_name";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>


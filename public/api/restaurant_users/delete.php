<?php


$query = "DELETE FROM restaurant_users WHERE status = $status";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
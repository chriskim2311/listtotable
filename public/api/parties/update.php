<?php


$query = "UPDATE parties SET comments = '$comments' WHERE r_users_ID = '$restaurant_users_ID'";


if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>

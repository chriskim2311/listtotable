<?php

$query = "SELECT * FROM restaurant_users";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result)>0) {
    while($row = mysqli_fetch_assoc($result)) {
        $output['restaurant users'][] = $row;
    }
    $output['success'] = true;
} else {
    $output['message'] = 'No restaurant users found';
}

?>
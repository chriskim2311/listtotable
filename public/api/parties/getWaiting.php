<?php

$query = "SELECT * FROM parties WHERE status = 3";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result)>0) {
    while($row = mysqli_fetch_assoc($result)) {
        $output['parties'][] = $row;
    }
    $output['success'] = true;
} else {
    $output['message'] = 'No users found';
}

?>
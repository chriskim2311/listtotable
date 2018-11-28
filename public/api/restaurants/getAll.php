<?php

$query = "SELECT * FROM Restaurant";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result)>0) {
    while($row = mysqli_fetch_assoc($result)) {
        $output['restaurant'][] = $row;
    }
    $output['success'] = true;
} else {
    $output['message'] = 'No restaurants found';
}

?>
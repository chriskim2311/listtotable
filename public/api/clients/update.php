<?php



$query = "UPDATE clients SET first_name = '$first_name' WHERE last_name = '$last_name'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
<?php



$query = "DELETE FROM clients WHERE first_name = $first_name";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
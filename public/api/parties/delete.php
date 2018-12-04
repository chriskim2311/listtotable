<?php



$query = "DELETE FROM parties WHERE status = $status";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>
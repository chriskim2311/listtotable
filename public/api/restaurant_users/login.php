<?php
session_start();

$postdata = file_get_contents('php://input');
$_POST = json_decode($postdata, true);

$email = addslashes($_POST['email']);
$password = sha1($_POST['password']);

$query = "SELECT * FROM restaurant_users WHERE email = '$email' AND password = '$password'";


$result = mysqli_query($conn, $query);
if($result){
    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        $token = makeToken();
        $loginQuery = "INSERT INTO connections SET token='$token', r_users_ID'{$row['ID']}'";
        mysqli_query($conn, $loginQuery);
        setcookie('phpcookie', $token, time() + (86400 * 30), "/"); // 86400 = 1 day
        $_SESSION['userID'] = $row;
        $output['success'] = true;
        $output['restaurant_ID'] = $row;
    } else {
        $output['errors'] = 'Login unsuccessful';
    }
} else {
    $output['errors'] = 'DB Error';
}

function makeToken($length = 20){
    $values = 'abcdefghijklmnopqrstuvwxyz0123456789';
    $output = '';
    srand( explode(" ", microtime())[1]);
    while( strlen($output) < $length){
        $randomInt = rand(0, strlen($output));
        $output .= substr($values, $randomInt, 1);
    }
    return $output;
}
?>
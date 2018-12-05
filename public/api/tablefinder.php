<?php
header("Access-Control-Allow-Origin: *");

require_once('config/mysqlConnect.php');

$output = [
    "success" => false
];

$action = $_GET['action'];


switch($action) {
    case 'restaurants':
        require_once('restaurants/index.php');
        break;

    case 'clients':
        require_once('clients/index.php');
        break;

    case 'restaurant_users':
        require_once('restaurant_users/index.php');
        break;

    case 'parties':
        require_once('parties/index.php');
        break;
}


$output = json_encode($output);

print $output;

?>
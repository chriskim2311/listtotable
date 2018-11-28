<?php

require_once('config/mysqlConnect.php');

$output = [
    "success" => false
];

$action = $_GET['action'];

switch($action) {
    case 'restaurants':
        require_once('restaurants/getAll.php');
        break;
}

$output = json_encode($output);

print $output;

?>
<?php

$method = $_GET['method'];

switch($method) {
    case 'getAll':
        require_once('./getAll.php');
        break;

    case 'insert':
        require_once('./insert.php');
        break;

    case 'delete':
        require_once('./delete.php');
        break;

    case 'login':
        require_once('./login.php');
        break;

    case 'logout':
        require_once('./logout.php');
        break;
}
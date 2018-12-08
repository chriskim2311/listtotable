<?php

$method = $_GET['method'];

switch($method) {
    case 'getAll':
        require_once('getAll.php');
        break;

    case 'insert':
        require_once('insert.php');
        break;

    case 'delete':
        require_once('delete.php');
        break;

    case 'getNotified':
        require_once('getNotified.php');
        break;

    case 'update':
        require_once('update');
        break;

    case 'getSeated':
        require_once('getSeated');
        break;

    case 'getWaiting':
        require_once('getWaiting');
        break;
}
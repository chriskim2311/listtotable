<?php

// $data = file_get_contents('php://input');

// $_POST = json_decode($data, true);

echo '<pre>';
print_r($_POST);
echo '</pre>';


print json_encode(['success' => true]);

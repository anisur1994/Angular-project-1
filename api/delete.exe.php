<?php
header("Access-Control-Allow-Origin: *");
$getData = file_get_contents("php://input");

$con = new mysqli('localhost', 'root', '', 'library');

$data = array();

if (isset($getData) && !empty($getData)) {
    $users = json_decode($getData);
    $result = $con->query("Delete from books where id = '" . $users->id . "'");
    if ($con->affected_rows > 0) {
        $getData = array('status' => 1);
    }
} else {
    $getData = array('status' => 0);
}
echo json_encode($getData);

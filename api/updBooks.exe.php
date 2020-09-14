<?php
header("Access-Control-Allow-Origin: *");
$getData = file_get_contents("php://input");

$con = new mysqli('localhost', 'root', '', 'library');

$data = array();

if (isset($getData) && !empty($getData)) {
    $users = json_decode($getData);
    $result = $con->query("Update books set 
    name = '".$users->bname."',
    author = '".$users->aname."',
    category = '".$users->bcate."',
    isbn = '".$users->bIsbn."',
    edition = '".$users->bEdition."',
    price = '".$users->bPrice."',
    description = '".$users->bDescription."'

    where id = '".$users->bId."'
    ");
    if ($con->affected_rows > 0) {
        $getData = array('status' => 1);
    }
} else {
    $getData = array('status' => 0);
}
echo json_encode($getData);

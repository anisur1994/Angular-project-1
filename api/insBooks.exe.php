<?php
header("Access-Control-Allow-Origin: *");    

$name = $_POST['name'];
$author = $_POST['author'];
$category = $_POST['category'];
$isbn = $_POST['isbn'];
$description = $_POST['description'];
$rand = rand(1,100);
$image =$rand.$_FILES['image']['name'];
$file_tmp =$_FILES['image']['tmp_name'];


$con = new mysqli("localhost", "root", "", "library");
$data = array();

if ($name) {
    if($con->query(
        "INSERT INTO books (name, author, isbn, category, description, image) VALUES (
            '".$name."',
            '".$author."',
            '".$isbn."',
            '".$category."',
            '".$description."',
            '".$image."'
        )"
    )){
        move_uploaded_file($file_tmp,"../src/assets/img/".$image);
        $data = array('status' => 1);  
    }
} else {
    $data = array('status' => 0);
}
echo json_encode($data);
?>
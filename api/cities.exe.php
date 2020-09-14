<?php
    header("Access-Control-Allow-Origin: *");
    $getData = file_get_contents("php://input");
    $con = new mysqli("localhost", "root", "", "library");

    $data = array();
    if($getData){
        $request = json_decode($getData);
        $query = $con->query("Select * from cities where country_id = '".$request->country."'");
        while($results = $query->fetch_object()){
            $data[] = $results;
        }
    }
    echo json_encode($data);
?>
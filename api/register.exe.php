<?php
    header("Access-Control-Allow-Origin: *");
    $getData = file_get_contents('php://input');

    $con = new mysqli('localhost', 'root', '','library');

    if(isset($getData) && !empty($getData)){
        $users = json_decode($getData);
        $con->query("Insert into users set
                    name = '".$users->username."',
                    email = '".$users->email."',
                    country_id = '".$users->country."',
                    city_id = '".$users->city."',
                    password = '".$users->password."',
                    address = '".$users->adrs."'"
                  );

        $getData = array('status' => 1);
    }else{
        $getData = array('status' => 0);
    }
    echo json_encode($getData);
?>

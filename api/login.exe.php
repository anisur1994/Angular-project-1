<?php
    header("Access-Control-Allow-Origin: *");
    $getData = file_get_contents("php://input");

    $con = new mysqli('localhost', 'root', '', 'library');

    if(isset($getData) && !empty($getData)){
        $users = json_decode($getData);
        $result = $con->query("Select * from users where email = '".$users->username."' and password = '".$users->password."'");
        if($result->num_rows > 0){
            echo 1;
        }
        else{
            echo 0;
        }
    }
    // echo json_encode($data);
    // if(isset($getData) && !empty($getData)){
    //     $users = json_decode($getData);
    //     $result = $con->query("Select * from users where email = '".$users->username."' and password = '".$users->password."'");
    //         if($result->num_rows > 0){
    //             $getData = array('status' => 1);
    //             while($d = $result->fetch_object()){
    //             $data = array('id' => $d->id);
    //         }
    //     }
    // }else{
    //     $data = array('id' => 0);
    // }
    // echo json_encode($data);
?>

<?php
    header("Access-Control-Allow-Origin: *");

    $con = new mysqli("localhost", "root", "", "library");

    $data = array();

    $query = $con->query("Select * from category");
    while($results = $query->fetch_assoc()){
        $data[] = $results;
    }

    echo json_encode($data);

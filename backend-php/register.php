<?php
require './connection/connect.php';
$username=mysqli_real_escape_string($con,$_POST['username']);
$password=mysqli_real_escape_string($con,$_POST['password']);

$sql=mysqli_query($con,"SELECT * FROM users WHERE username='".$username."' AND password='".$password."'");
$check=mysqli_num_rows($sql);
if($check !=0){
   echo "username"; 
}else{

     $query="INSERT INTO users(username,password) VALUES ('$username','$password')";

    if($con->query($query))
    {
        echo "success";
    }
}

?>
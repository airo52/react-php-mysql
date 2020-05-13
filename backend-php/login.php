<?php
require './connection/connect.php';
$username = mysqli_real_escape_string($con,$_POST['username']);
$password = mysqli_real_escape_string($con,$_POST['password']);

$query=mysqli_query($con,"SELECT * FROM users WHERE username='".$username."'");
$check = mysqli_num_rows($query);

if($check !=0)
{
while($row=mysqli_fetch_assoc($query))
 {
   $db_pass=$row['password'];  
 }
 if($password === $db_pass){
     echo "success";
 }
 else
 {
  echo "password";
 }
}
else
{
    echo "username";
}



?>
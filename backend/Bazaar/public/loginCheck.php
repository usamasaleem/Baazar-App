<?php



try {
  
$email=$_POST["email"];
$password=$_POST["password"];
$rad_teacher =$_POST['Teacher'];
  if( $rad_teacher=="Teacher"){
    $sql="SELECT * FROM TEACHERS WHERE Email = '$email' AND Password = '$password'";
  }


  if($_POST['Student'] =="Student"){
    $sql="SELECT * FROM STUDENTS WHERE Email = '$email' AND Password = '$password'";
  }

  
  
  $dbh = new PDO('mysql:host=localhost;dbname=tutormanagementsystem', "root", "");
  
// prepareing the queires
  $getquery = $dbh->prepare($sql);
  $getquery->execute();  
  $id;
  // fetching the ID
  while($result = $getquery->fetch(PDO::FETCH_BOTH))
{

    $id = $result['StudentID'];
  

}

  

  if($getquery->rowCount()>0){
    
   

    if($_POST['Teacher'] =="Teacher"){
      header('location: ../studentPortal/student_dashboard.php?id=');
    }
    if($_POST['Student'] =="Student"){
      
      header("Location: http://localhost/StudentPortal/Student/student_dashboard.php?id=".$id);
   
        }
    
  }
  else{
    echo"invalid credentials";
    header('refresh:2;url=http://localhost/StudentPortal/TEACHERS/teacher/authentication/login.php');  }


  $dbh = null;
}
catch (PDOException $e) {
  print "Error!: " . $e->getMessage() . "<br/>";
  die();
}
?>



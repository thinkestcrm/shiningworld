<?php
    require("Smarty.class.php");
    $smarty = new smarty();
    $smarty->caching = 0;
        
    $mysqli = new mysqli();
    $mysqli->connect("localhost","root","","yingtu");
    $mysqli->query("SET NAMES utf8");  
        
    if(!$smarty->isCached("publishactivity.html")){
        /*
        $smarty->assign("userid",$_GET["id"]);

        $tags = "";
        $stmt = $mysqli->stmt_init();
        $stmt->prepare("select * from tagtbl");
        $stmt->execute();
        $stmt->bind_result($i,$c1,$c2,$t);
        while($stmt->fetch()){
            $tags = $tags . "." . $t;
        }
        
        $stmt->close();
        $mysqli->close();
        
        $smarty->assign("tags",$tags);
        */
    }
    //need to delete the cache instance when user infomation changed!
    $smarty->display("../ui/publishactivity.html");
    
?>
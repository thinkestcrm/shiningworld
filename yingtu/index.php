<?php
    require("Smarty.class.php");
    $smarty = new smarty();
    $smarty->caching = 0;
        
    $mysqli = new mysqli();
    $mysqli->connect("localhost","root","","yingtu");
    $mysqli->query("SET NAMES utf8");  
        
    if(!$smarty->isCached("index.html")){
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
        // assign the linke address for header.blk
        if(file_exists("a.php")){
            ;
        }else{
            ;
        }
        
        $smarty->assign("activity_link","action.php?tgrid=5");
        $smarty->assign("usercenter_link","action.php?tgrid=4");
        $smarty->assign("photographer_mainpage_link","action.php?tgrid=6");
        $smarty->assign("register_link","action.php?tgrid=7");
        $smarty->assign("login_link","action.php?tgrid=1");
        $smarty->assign("person_take_link","action.php?tgrid=8");
        $smarty->assign("food_take_link","action.php?tgrid=10");        
    }
    //need to delete the cache instance when user infomation changed!
    $smarty->display("ui/index.html");
    
?>
/**
 * Created by 123 on 2016/6/13.
 */

$(function(){
    $(".activity_wrapper,.activity_con,.activity_main").css({
        width:window.screen.width+"px"
    });
    $("#activityProjectcon").hover(function(){

        $(".activity_projectcon_light").css({
            display:"block"
        });
        //$(".activity_projectcon_detailed").css({
        //    display:"block"
        //})
    },function(){
        $(".activity_projectcon_light").css({
            display:"none"
        });
        //$(".activity_projectcon_detailed").css({
        //    display:"none"
        //})
    });
});
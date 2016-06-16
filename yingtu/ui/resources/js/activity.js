/**
 * Created by 123 on 2016/6/13.
 */

$(function(){

    $("#activityProjectcon").hover(function(){

        $(".activity_projectcon_light").css({
            display:"block"
        });
        $(".activity_projectcon_detailed").css({
            display:"block"
        })
    },function(){
        $(".activity_projectcon_light").css({
            display:"none"
        });
        $(".activity_projectcon_detailed").css({
            display:"none"
        })
    });
});
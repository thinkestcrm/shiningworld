/**
 * Created by 123 on 2016/6/23.
 */
$(function(){
    $(".his_works_nav,.foodproduct_wrapper,.foodproduct_main,.foodproduct_info_box").css({
        width:window.screen.width+"px"
    });
    $(".supporting_services_addclothing").hover(function(){
        var addclothing=$(this).clone();
        $(this).parent("li").prepend(addclothing);
        $(this).attr("src","../ui/resources/image/AddClothing2.jpg");
        $(this).css({
            position:"absolute",
            top:"0",left:"-160px"
        });
        $(this).animate({
            left:"0px"
        }, "slow",function(){
            $(this).prev().remove();
            $(this).css({position:"relative"})
        });
    },function(){

    });
    $(".supporting_services_addscenario").hover(function(){
        var addclothing=$(this).clone();
        $(this).parent("li").prepend(addclothing);
        $(this).attr("src","../ui/resources/image/AddScenario2.jpg");
        $(this).css({
            position:"absolute",
            top:"0",left:"-160px"
        });
        $(this).animate({
            left:"0px"
        }, "slow",function(){
            $(this).prev().remove();
            $(this).css({position:"relative"})
        });
    },function(){

    });
    $(".supporting_services_addmakeup").hover(function(){
        var addclothing=$(this).clone();
        $(this).parent("li").prepend(addclothing);
        $(this).attr("src","../ui/resources/image/AddMakeup2.jpg");
        $(this).css({
            position:"absolute",
            top:"0",left:"-160px"
        });
        $(this).animate({
            left:"0px"
        }, "slow",function(){
            $(this).prev().remove();
            $(this).css({position:"relative"})
        });
    },function(){

    });

}) ;
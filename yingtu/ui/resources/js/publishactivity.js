/**
 * Created by 123 on 2016/6/20.
 */
$(function(){
    $(".photographer_homepage_wrapper,.photographer_homepage").css({
        width:window.screen.width+"px"
    });
    $("body").click(function(e){
        switch(e.target.id){
            case "publishactivityName":
                var proNtext=$("#publishactivityName").text();
                $("#publishactivityName").html(''+
                    '<input type="text" id="publishactivityNameInput" value="'+proNtext+'"/>'+
                    '');
                $("#publishactivityNameInput").focus();
                $("#publishactivityNameInput").blur(function(){
                    $("#publishactivityName").html($("#publishactivityNameInput").val());
                });
                break;
            case "publishactivityIntroduction":
                var proBtext=$("#publishactivityIntroduction").text();
                $("#publishactivityIntroduction").html(''+
                    '<input type="text" id="publishactivityIntroductionInput" value="'+proBtext+'"/>'+
                    '');
                $("#publishactivityIntroductionInput").focus();
                $("#publishactivityIntroductionInput").blur(function(){
                    $("#publishactivityIntroduction").html($("#publishactivityIntroductionInput").val());
                });
                break;
            default:

                break;
        }
    });
}) ;
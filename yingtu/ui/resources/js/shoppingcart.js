/**
 * Created by 123 on 2016/6/17.
 */
$(function(){
    $(".shoppingcart_wrapper").css({
        width:window.screen.width+"px"
    });
    $("body").click(function(e){
        switch(e.target.id){
            case  "projectAmountAdd":
                var SmountShow= parseInt($("#projectSmountShow").val())+1;
                $("#projectSmountShow").val(SmountShow);
                break;
            case  "projectAmountSubtract":
                var SmountShow= parseInt($("#projectSmountShow").val())-1;
                if(SmountShow<0){
                    SmountShow=0;
                }
                $("#projectSmountShow").val(SmountShow);
                break;
            case  "projectTimeAdd":
                var timeShow= parseInt($("#projectTimeShow").val())+1;
                $("#projectTimeShow").val(timeShow);
                break;
            case  "projectTimeSubtract":
                var timeShow= parseInt($("#projectTimeShow").val())-1;
                if(timeShow<0){
                    timeShow=0;
                }
                $("#projectTimeShow").val(timeShow);
                break;
            default :
                break;
        }
    })
});

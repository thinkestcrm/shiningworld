/**
 * Created by 123 on 2016/6/10.
 */
$(document).ready(function() {
    //事件处理入口
    $("body").click(function(e){
        switch(e.target.id){
            case "ytLoginButton":
                EventListener.loginButtonClick(e);
            break;
            default:
                
            break;
        }
    });
    
    
    //导航条固定定位
    $(window.document).scroll(function(){
        if($(window.document).scrollTop()==0){
            $("#navigationBar").css({
                background:"none",
                boxShadow: "none"
            });
        }
        else{
            $("#navigationBar").css({
                background:"#fff",
                boxShadow: "#aaa -3px 2px 10px"
            });
        }

    });
    $("#navigationBar").hover(function(){
        $("#navigationBar").css({
            background:"#fff",
            boxShadow: "#aaa -3px 2px 10px"
        });
    },function(){
        $("#navigationBar").css({
            background:"none",
            boxShadow: "none"
        });
    });


    //动态样式
    $(".all_categories_bar").hover(function(){
            $(".all_categories_unfold").css({display:"block"});
        },function(){
            $(".all_categories_unfold").css({display:"none"});
        }
    );
    $(".photography_services_list").hover(function(){
        $(".photography_services_list a").css({
            color:"#fff"
        });
    },
    function(){
        $(".photography_services_list a").css({
            color:"#333"
        });
    });
    $(".supporting_services_list").hover(function(){
        $(".supporting_services_list a").css({
            color:"#fff"
        });
    },
    function(){
        $(".supporting_services_list a").css({
            color:"#333"
        });
    });
    $(".warpper,.head,.company_profile_box,.detailed_introduction_back").css({
        width:window.screen.width+"px"
    })



});

var EventListener = {
    loginButtonClick:function(e){
        window.location.href = "action.php?tgrid=1"
    }
};
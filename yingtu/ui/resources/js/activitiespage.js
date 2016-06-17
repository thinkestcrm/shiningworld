/**
 * Created by 123 on 2016/6/17.
 */
$(function(){


    $("body").click(function(e){
        switch(e.target.id){
            case "recommendAllUnfold":
                $(".recommend_content").css({
                    height:"515px"
                });
                $(".activitypage_content_box").css({
                    height:"800px"
                });
                break;
            default :
                break;
        }
    });
    $("#toParticipateInBut").hover(function(){
        $(".join_us_icon").css({
            "-webkit-transform":"rotate(35deg)",
            "-webkit-animation-name":"left",
            "-webkit-animation-duration":"1s",
            "-webkit-animation-direction":"alternate",
            "-webkit-animation-iteration-count":"2",
            "-webkit-animation-timing-function":"ease-in"
        });
    },function(){
        $(".join_us_icon").css({
            transform:"none"
        });
    })
});
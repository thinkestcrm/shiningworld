/**
 * Created by 123 on 2016/6/12.
 */

$(function(){
    $(".food_wrapper,.food_con,.food_main").css({
        width:window.screen.width+"px"
    });
    $("#photoNicheUnlimited,#photographyMethodUnlimited,#wayTOChargeUnlimited,#priceRangeUnlimited").css({
        color:"#fff"
    });
    var yingtu_img_light_height=$(".yingtu_img_light").siblings("img").css("height");
    $(".yingtu_img_light").css({
        height:yingtu_img_light_height
    });
    $("body").click(function(e){
        switch(e.target.id){
            case "photoNicheUnlimited":
            case "foodMadeGuangdongHKSeafood":
            case "foodMadeSpicySichuanHunan":
            case "foodMadeDrinkSnack":
            case "foodMadeJapaneseSouthKoreanCuisine":
            case "foodMadeRestaurantScene":
                $(".food_photography_niche a").removeClass("unlimited_style");
                $(".food_photography_niche a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                $(".food_photography_niche a").hover(function(){
                    $(this).css({
                        color: "#fff"
                    });
                },function(){
                    if($(this).hasClass("unlimited_style")){
                        $(this).css({
                            color: "#fff"
                        });
                    }
                    else{
                        $(this).css({
                            color: "#333"
                        });
                    }

                });
                break;
            case "photographyMethodUnlimited":
            case "foodMadeMailShot":
            case "foodMadeDoorToShoot":
                $(".food_photographyMethod a").removeClass("unlimited_style");
                $(".food_photographyMethod a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                $(".food_photographyMethod a").hover(function(){
                    $(this).css({
                        color: "#fff"
                    });
                },function(){
                    if($(this).hasClass("unlimited_style")){
                        $(this).css({
                            color: "#fff"
                        });
                    }
                    else{
                        $(this).css({
                            color: "#333"
                        });
                    }

                });
                break;
            case "wayTOChargeUnlimited":
            case "foodMadePayPerDay":
            case "foodMadeAccordingToCharge":
            case "foodMadeChargeByHour":
                $(".food_wayTOCharge a").removeClass("unlimited_style");
                $(".food_wayTOCharge a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                $(".food_wayTOCharge a").hover(function(){
                    $(this).css({
                        color: "#fff"
                    });
                },function(){
                    if($(this).hasClass("unlimited_style")){
                        $(this).css({
                            color: "#fff"
                        });
                    }
                    else{
                        $(this).css({
                            color: "#333"
                        });
                    }

                });
                break;
            case "priceRangeUnlimited":
            case "foodMadepriceRange500To800":
            case "foodMadepriceRange800To1200":
            case "foodMadepriceRange1200To1800":
            case "foodMadeMoreThan1800":
                $(".food_priceRange a").removeClass("unlimited_style");
                $(".food_priceRange a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                $(".food_priceRange a").hover(function(){
                    $(this).css({
                        color: "#fff"
                    });
                },function(){
                    if($(this).hasClass("unlimited_style")){
                        $(this).css({
                            color: "#fff"
                        });
                    }
                    else{
                        $(this).css({
                            color: "#333"
                        });
                    }

                });
                break;
            default:

                break;
        }
    });
    $('.heart_info').click(function(){
        $('.heart_info').css({
            color:"#FE2D2D"
        });
        var heartNo=parseInt($("#likeDegreeNo").text())+1;
        $("#likeDegreeNo").text(heartNo);


    })

});

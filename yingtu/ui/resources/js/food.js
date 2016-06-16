/**
 * Created by 123 on 2016/6/12.
 */

$(function(){
    $("#photoNicheUnlimited,#photographyMethodUnlimited,#wayTOChargeUnlimited,#priceRangeUnlimited").css({
        color:"#fff"
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
                break;
            default:

                break;
        }
    });

});/**
 * Created by 123 on 2016/6/13.
 */

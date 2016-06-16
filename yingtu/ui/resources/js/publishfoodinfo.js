

$(function(){
    $("body").click(function(e){
        switch(e.target.id){
            case "foodMadeGuangdongHKSeafood":
            case "foodMadeSpicySichuanHunan":
            case "foodMadeDrinkSnack":
            case "foodMadeJapaneseSouthKoreanCuisine":
            case "foodMadeRestaurantScene":
                $(".classification_of_works a").removeClass("unlimited_style");
                $(".classification_of_works a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                break;
            default:

                break;
        }
    });

});

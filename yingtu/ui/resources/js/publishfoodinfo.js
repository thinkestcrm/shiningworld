

$(function(){
    $(".photographer_homepage_wrapper,.photographer_homepage").css({
        width:window.screen.width+"px"
    });
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
                $(".classification_of_works a").hover(function(){
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
            case "productionName":
                var proNtext=$("#productionName").text();
                $("#productionName").html(''+
                    '<input type="text" id="productionNameInput" value="'+proNtext+'"/>'+
                '');
                $("#productionNameInput").focus();
                $("#productionNameInput").blur(function(){
                    $("#productionName").html($("#productionNameInput").val());
                });
                break;
            case "productionBriefIntroduction":
                var proBtext=$("#productionBriefIntroduction").text();
                $("#productionBriefIntroduction").html(''+
                    '<input type="text" id="productionBriefInput" value="'+proBtext+'"/>'+
                    '');
                $("#productionBriefInput").focus();
                $("#productionBriefInput").blur(function(){
                    $("#productionBriefIntroduction").html($("#productionBriefInput").val());
                });
                break;

            default:

                break;
        }
    });

});

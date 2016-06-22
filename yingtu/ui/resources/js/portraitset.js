/**
 * Created by 123 on 2016/6/12.
 */

$(function(){
    $(".photographer_homepage_wrapper,.photographer_homepage").css({
        width:window.screen.width+"px"
    });
    $("body").click(function(e){
        switch(e.target.id){
            case "portraitMirror":
            case "portraitPersonalPortrait":
            case "portraitKidsPhotography":
            case "portraitWeddingDress":
            case "portraitWeddingPhoto":
            case "portraitTravelWith":
            case "portraitWeddingWithPat":
            case "portraitCompany":
            case "portraitConferenceWithPat":
            case "portraitManyPeople":
            case "portraitGraduationPhoto":
            case "portraitGirlfriendsAs":
            case "portraitCouplesAs":
            case "portraitParentChildPhotos":
            case "portraitFleshCocktail":
            case "portraitPregnancyPhoto":
                $(".photo_niche_list a").removeClass("por_unlimited_style");
                $(".photo_niche_list a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("por_unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                $(".photo_niche_list a").hover(function(){
                    $(this).css({
                        color: "#fff"
                    });
                },function(){
                    if($(this).hasClass("por_unlimited_style")){
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
            case "portraitsetProductionName":
                var proNtext=$("#portraitsetProductionName").text();
                $("#portraitsetProductionName").html(''+
                    '<input type="text" id="portraitsetNameInput" value="'+proNtext+'"/>'+
                    '');
                $("#portraitsetNameInput").focus();
                $("#portraitsetNameInput").blur(function(){
                    $("#portraitsetProductionName").html($("#portraitsetNameInput").val());
                });
                break;
            case "portraitsetProductionIntroduction":
                var proBtext=$("#portraitsetProductionIntroduction").text();
                $("#portraitsetProductionIntroduction").html(''+
                    '<input type="text" id="portraitsetIntroductionInput" value="'+proBtext+'"/>'+
                    '');
                $("#portraitsetIntroductionInput").focus();
                $("#portraitsetIntroductionInput").blur(function(){
                    $("#portraitsetProductionIntroduction").html($("#portraitsetIntroductionInput").val());
                });
                break;

            default:

                break;
        }
    });

});
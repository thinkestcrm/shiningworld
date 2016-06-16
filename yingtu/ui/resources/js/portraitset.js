/**
 * Created by 123 on 2016/6/12.
 */

$(function(){
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
                break;

            default:

                break;
        }
    });

});
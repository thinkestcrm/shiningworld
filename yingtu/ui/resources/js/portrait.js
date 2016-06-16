/**
 * Created by 123 on 2016/6/12.
 */

$(function(){
    $("#portraitPhotoNicheUnlimited,#portraitPhotographerLevelUnlimited,#portraitPriceRangeUnlimited").css({
        color:"#fff"
    });
    $("#portraitNavigationr").css({
        color: "#fff",
        background:" #54688D"
    });

    $('.portrait_label>li').click(function(){
        var ord=$(this).index('.portrait_label>li');
        $('.portrait_label>li').each(function(index){
            if(ord!=index){
                $(this).find("a").css({
                    background:'#fff',
                    color: "#333"
                });
                $(this).find("a").remove("adcss");

            }else{
                $(this).find("a").css({
                    color: "#fff",
                    background:" #54688D"
                });
                $(this).find("a").addClass("adcss");
            }
        });
    });
    $(".portrait_label>li").hover(function(){
        $(this).find("a").css({
            color: "#fff",
            background: "#54688D"
        });
    },function(){
        if($(this).find("a").hasClass("adcss")){
            $(this).find("a").css({
                color: "#fff",
                background: "#54688D"
            });
        }
        else{
            $(this).find("a").css({
                color: "#333",
                background: "#fff"
            });
        }

    });


    $("body").click(function(e){
        switch(e.target.id){
            case "portraitPhotoNicheUnlimited":
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

                $(".portraitdetailedClass a").removeClass("por_unlimited_style");
                $(".portraitdetailedClass a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("por_unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                break;
            case "portraitPhotographerLevelUnlimited":
            case "portraitminimumLevelPhotograph":
            case "portraitLowLevelPhotograph":
            case "portraitMediumLevelPhotograph":
            case "portraitHighLevelPhotograph":
            case "portraitHighestLevelPhotograph":
                $(".portrait_photographer_level a").removeClass("por_unlimited_style");
                $(".portrait_photographer_level a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("por_unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                break;
            case "portraitPriceRangeUnlimited":
            case "portraitPriceRange50to300":
            case "portraitPriceRange300to800":
            case "portraitPriceRange800to1700":
            case "portraitPriceRangeMoreThan1700":
                $(".portrait_price_range a").removeClass("por_unlimited_style");
                $(".portrait_price_range a").css({color:"#333"});

                $("#"+e.target.id+"").addClass("por_unlimited_style");
                $("#"+e.target.id+"").css({
                    color:"#fff"
                });
                break;
            case "clothingLease":
                $(".portrait_main").css({
                    height:"1155px"
                });
                $(".portrait_main").html('' +
                    '<div class="clothingLease_con">'+
                        '<ul class="clothinglease_header">'+
                            '<li>' +
                                '<span>��װ���ޣ�</span><p>����Ӱͽ�ٷ��Ա��꣬�ɶ��������ʡ�</p>'+
                            '</li>'+
                            '<li>' +
                                '<span>���ͣ�</span><p>�ɶ�����2�����͵���</p>'+
                            '</li>'+
                            '<li>' +
                                '<span>��ַ��</span><p>www.taobao.com</p>'+
                            '</li>'+
                        '</ul>'+
                        '<ul class="address_point_info">'+
                            '<li>�Ĵ���ѧ</li>'+
                            '<li><span>����㣺</span><p>�ɶ���������Ĵ���ѧ�ٶ�С��14��13¥��</p></li>'+
                        '</ul>'+
                        '<ul class="address_point_info">'+
                            '<li>�ɶ���</li>'+
                            '<li>'+
                                '<span>����㣺</span><p>�ɶ���������Ĵ���ѧ�ٶ�С��14��13¥��</p>'+
                            '</li>'+
                        '</ul>'+
                        '<ul class="address_point_info">'+
                            '<li>���ӿƼ���ѧ</li>'+
                            '<li>'+
                                '<span>����㣺</span><p>�ɶ���������Ĵ���ѧ�ٶ�С��14��13¥��</p>'+
                            '</li>'+
                        '</ul>'+
                        '<ul class="working_time">'+
                            '<li><span>����ʱ�䣺</span><p>8��00-17��00</p></li>'+
                            '<li><span>����ʱ�䣺</span><p>������Ϣ</p></li>'+
                        '</ul>'+
                        '<div class="clothingLease_show"></div>'+
                    '</div>'+
                "");
                break;
            default:

                break;
        }
    });

});
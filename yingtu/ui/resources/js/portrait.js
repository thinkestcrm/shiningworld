/**
 * Created by 123 on 2016/6/12.
 */

$(function(){
    $(".portrait_wrapper,.portrait_main,.portrait_taken_navigation").css({
        width:window.screen.width+"px"
    });
    $("#portraitPhotoNicheUnlimited,#portraitPhotographerLevelUnlimited,#portraitPriceRangeUnlimited").css({
        color:"#fff"
    });
    $("#portraitNavigationr").css({
        color: "#fff",
        background:"#54688D"
    });
    $(".portrait_label>li>a").click(function(){
        $(".portrait_label a").removeClass("portraitthecurrent");
        $(".portrait_label a").css({color:"#333",background:"#fff"});

        $(this).addClass("portraitthecurrent");
        $(this).css({
            color:"#fff",
            background:"#54688D"
        });
        $(".portrait_label a").hover(function(){
            $(this).css({
                color: "#fff",
                background:"#54688D"
            });
        },function(){
            if($(this).hasClass("portraitthecurrent")){
                $(this).css({
                    color: "#fff",
                    background:"#54688D"
                });
            }
            else{
                $(this).css({
                    color: "#333",background:"#fff"
                });
            }

        });

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
                $(".portraitdetailedClass a").hover(function(){
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
                $(".portrait_photographer_level a").hover(function(){
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
                $(".portrait_price_range a").hover(function(){
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
            case "clothingLease":
                $(".portrait_main").css({
                    height:"1155px"
                });
                $(".portrait_main").html('' +
                    '<div class="clothingLease_con">'+
                        '<ul class="clothinglease_header">'+
                            '<li>' +
                                '<span>服装租赁：</span><p>请上影徒官方淘宝店，成都地区包邮。</p>'+
                            '</li>'+
                            '<li>' +
                                '<span>配送：</span><p>成都地区2天内送到。</p>'+
                            '</li>'+
                            '<li>' +
                                '<span>网址：</span><p>www.taobao.com</p>'+
                            '</li>'+
                        '</ul>'+
                        '<ul class="address_point_info">'+
                            '<li>四川大学</li>'+
                            '<li><span>自提点：</span><p>成都市武侯区四川大学踪东小区14栋13楼。</p></li>'+
                        '</ul>'+
                        '<ul class="address_point_info">'+
                            '<li>成都理工</li>'+
                            '<li>'+
                                '<span>自提点：</span><p>成都市武侯区四川大学踪东小区14栋13楼。</p>'+
                            '</li>'+
                        '</ul>'+
                        '<ul class="address_point_info">'+
                            '<li>电子科技大学</li>'+
                            '<li>'+
                                '<span>自提点：</span><p>成都市武侯区四川大学踪东小区14栋13楼。</p>'+
                            '</li>'+
                        '</ul>'+
                        '<ul class="working_time">'+
                            '<li><span>工作时间：</span><p>8：00-17：00</p></li>'+
                            '<li><span>工作时间：</span><p>周日休息</p></li>'+
                        '</ul>'+
                        '<div class="clothingLease_show"></div>'+
                    '</div>'+
                "");
                break;
            case "placeselect":
                $(".portrait_main").html('' +
                    '<div class="allCategorieslist">'+
                    '</div>'+
                    '<div class="classification_subsidiary" style="height:268px">'+
                        '<ul>'+
                            '<li style="height: 119px">'+
                                '<ul class="portraitdetailedClass get_user_area" >'+
                                    '<li style="width:78px">所在地区 :</li>'+
                                    '<li><a href="#" class="por_unlimited_style" id="GetUserAreaUnlimited">不限</a></li>'+
                                    '<li>'+
                                        '<ul class="photo_niche_list">'+
                                            '<li>'+
                                                '<ul class="photo_niche_specific">'+
                                                    '<li><a href="#">成都：</a></li>'+
                                                    '<li><a href="#">武侯</a></li>'+
                                                    '<li><a href="#">高新</a></li>'+
                                                    '<li><a href="#">青羊</a></li>'+
                                                    '<li><a href="#">锦江</a></li>'+
                                                    '<li><a href="#">金牛</a></li>'+
                                                    '<li><a href="#">成华</a></li>'+
                                                    '<li><a href="#">新都</a></li>'+
                                                    '<li><a href="#">新津</a></li>'+
                                                    '<li><a href="#">龙泉驿</a></li>'+
                                                    '<li><a href="#">温江</a></li>'+
                                                    '<li><a href="#">郫县</a></li>'+
                                                    '<li><a href="#">双流</a></li>'+
                                                    '<li><a href="#">金堂</a></li>'+
                                                    '<li><a href="#">大邑</a></li>'+
                                                '</ul>'+
                                            '</li>'+
                                            '<li>'+
                                                '<ul class="photo_niche_specific" style="margin-top: 15px">'+
                                                    '<li><a href="#">成都周边：</a></li>'+
                                                    '<li><a href="#">彭州</a></li>'+
                                                    '<li><a href="#">崇州</a></li>'+
                                                    '<li><a href="#">其他</a></li>'+
                                                '</ul>'+
                                            '</li>'+
                                        '</ul>'+
                                    '</li>'+
                                '</ul>'+
                            '</li>'+
                            '<li>'+
                                '<ul class="detailedClasslist placeselect_site_style">'+
                                    '<li style="width:78px">场地风格 :</li>'+
                                    '<li><a href="#" class="por_unlimited_style" id="placeselectSiteStyleUnlimited">不限</a></li>'+
                                    '<li><a href="#" >自然风格</a></li>'+
                                    '<li><a href="#" >古风</a></li>'+
                                    '<li><a href="#" >欧式</a></li>'+
                                    '<li><a href="#" >韩式</a></li>'+
                                    '<li><a href="#" >其他</a></li>'+
                                '</ul>'+
                            '</li>'+
                            '<li>'+
                                '<ul class="detailedClasslist placeselect_scene_type">'+
                                    '<li style="width:78px">场景类型 :</li>'+
                                    '<li><a href="#" class="por_unlimited_style" id="placeselectSceneTypeUnlimited">不限</a></li>'+
                                    '<li><a href="#" >外景</a></li>'+
                                    '<li><a href="#" >室内实景</a></li>'+
                                    '<li><a href="#" >室内棚拍</a></li>'+
                                '</ul>'+
                            '</li>'+
                            '<li style="border: none">'+
                                '<ul class="detailedClasslist place_price_range" >'+
                                    '<li style="width:78px">价格区间 :</li>'+
                                    '<li><a href="#" class="por_unlimited_style" id="placePriceRangeUnlimited">不限</a></li>'+
                                    '<li><a href="#" >免费</a></li>'+
                                    '<li><a href="#" >300-800</a></li>'+
                                    '<li><a href="#" >800-1700</a></li>'+
                                    '<li><a href="#" >1700以上</a></li>'+
                                '</ul>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="placeselect_con">'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">九寨沟景区的</p><p class="placeselect_info_placeprice"><span>免费</span></p>'+
                            '</div>'+
                            '<p class="placeselect_info_tip">九寨沟是一个简介的家呢就开饭了打飞机啦上飞机了开始减肥；撒地方凉快；是地方开始加大房间开了多少解放啦师发撒旦法撒旦法发生大幅少</p>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">九寨沟景区的</p><p class="placeselect_info_placeprice">￥<span>200~400</span>元/小时</p>'+
                            '</div>'+
                            '<p class="placeselect_info_tip">九寨沟是一个简介的家呢就开饭了打飞机啦上飞机了开始减肥；撒地方凉快；是地方开始加大房间开了多少解放啦师发撒旦法撒旦法发生大幅少</p>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">九寨沟景区的</p><p class="placeselect_info_placeprice">￥<span>200</span>元/小时</p>'+
                            '</div>'+
                            '<p class="placeselect_info_tip">九寨沟是一个简介的家呢就开饭了打飞机啦上飞机了开始减肥；撒地方凉快；是地方开始加大房间开了多少解放啦师发撒旦法撒旦法发生大幅少</p>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">九寨沟景区的</p><p class="placeselect_info_placeprice"><span>免费</span></p>'+
                            '</div>'+
                            '<p class="placeselect_info_tip">九寨沟是一个简介的家呢就开饭了打飞机啦上飞机了开始减肥；撒地方凉快；是地方开始加大房间开了多少解放啦师发撒旦法撒旦法发生大幅少</p>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">九寨沟景区的</p><p class="placeselect_info_placeprice">￥<span>200~400</span>元/小时</p>'+
                            '</div>'+
                            '<p class="placeselect_info_tip">九寨沟是一个简介的家呢就开饭了打飞机啦上飞机了开始减肥；撒地方凉快；是地方开始加大房间开了多少解放啦师发撒旦法撒旦法发生大幅少</p>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">九寨沟景区的</p><p class="placeselect_info_placeprice">￥<span>200</span>元/小时</p>'+
                            '</div>'+
                            '<p class="placeselect_info_tip">九寨沟是一个简介的家呢就开饭了打飞机啦上飞机了开始减肥；撒地方凉快；是地方开始加大房间开了多少解放啦师发撒旦法撒旦法发生大幅少</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="placeselect_paging_box">'+
                        '<ul class="placeselect_paging">'+
                            '<li><a href="#">首页</a></li>'+
                            '<li><a href="#">上一页</a></li>'+
                            '<li><a href="#">1</a></li>'+
                            '<li><a href="#">2</a></li>'+
                            '<li><a href="#">3</a></li>'+
                            '<li><a href="#">下一页</a></li>'+
                            '<li><a href="#">尾页</a></li>'+
                        '</ul>'+
                    '</div>'+
                    "");

                $("#placePriceRangeUnlimited,#GetUserAreaUnlimited,#placeselectSiteStyleUnlimited,#placeselectSceneTypeUnlimited").css({
                    color:"#fff"
                });
                $(".get_user_area a").click(function(){
                    $(".get_user_area a").removeClass("por_unlimited_style");
                    $(".get_user_area a").css({color:"#333"});

                    $(this).addClass("por_unlimited_style");
                    $(this).css({
                        color:"#fff"
                    });
                    $(".get_user_area a").hover(function(){
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
                });
                $(".placeselect_site_style a").click(function(){
                    $(".placeselect_site_style a").removeClass("por_unlimited_style");
                    $(".placeselect_site_style a").css({color:"#333"});

                    $(this).addClass("por_unlimited_style");
                    $(this).css({
                        color:"#fff"
                    });
                    $(".placeselect_site_style a").hover(function(){
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
                });
                $(".placeselect_scene_type a").click(function(){
                    $(".placeselect_scene_type a").removeClass("por_unlimited_style");
                    $(".placeselect_scene_type a").css({color:"#333"});

                    $(this).addClass("por_unlimited_style");
                    $(this).css({
                        color:"#fff"
                    });
                    $(".placeselect_scene_type a").hover(function(){
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
                });
                $(".place_price_range a").click(function(){
                    $(".place_price_range a").removeClass("por_unlimited_style");
                    $(".place_price_range a").css({color:"#333"});

                    $(this).addClass("por_unlimited_style");
                    $(this).css({
                        color:"#fff"
                    });
                    $(".place_price_range a").hover(function(){
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
                });

                break;
            case "mendface":
                $(".portrait_main").html('' +
                    '<div class="allCategorieslist">'+
                    '</div>'+
                    '<div class="classification_subsidiary" style="height:206px">'+
                    '<ul>'+
                    '<li style="height: 119px">'+
                    '<ul class="portraitdetailedClass get_user_area" >'+
                    '<li style="width:78px">所在地区 :</li>'+
                    '<li><a href="#" class="por_unlimited_style" id="GetUserAreaUnlimited">不限</a></li>'+
                    '<li>'+
                    '<ul class="photo_niche_list">'+
                    '<li>'+
                    '<ul class="photo_niche_specific">'+
                    '<li><a href="#">成都：</a></li>'+
                    '<li><a href="#">武侯</a></li>'+
                    '<li><a href="#">高新</a></li>'+
                    '<li><a href="#">青羊</a></li>'+
                    '<li><a href="#">锦江</a></li>'+
                    '<li><a href="#">金牛</a></li>'+
                    '<li><a href="#">成华</a></li>'+
                    '<li><a href="#">新都</a></li>'+
                    '<li><a href="#">新津</a></li>'+
                    '<li><a href="#">龙泉驿</a></li>'+
                    '<li><a href="#">温江</a></li>'+
                    '<li><a href="#">郫县</a></li>'+
                    '<li><a href="#">双流</a></li>'+
                    '<li><a href="#">金堂</a></li>'+
                    '<li><a href="#">大邑</a></li>'+
                    '</ul>'+
                    '</li>'+
                    '<li>'+
                    '<ul class="photo_niche_specific" style="margin-top: 15px">'+
                    '<li><a href="#">成都周边：</a></li>'+
                    '<li><a href="#">彭州</a></li>'+
                    '<li><a href="#">崇州</a></li>'+
                    '<li><a href="#">其他</a></li>'+
                    '</ul>'+
                    '</li>'+
                    '</ul>'+
                    '</li>'+
                    '</ul>'+
                    '</li>'+
                    '<li>'+
                    '<ul class="detailedClasslist placeselect_site_style">'+
                    '<li style="width:78px">妆面风格 :</li>'+
                    '<li><a href="#" class="por_unlimited_style" id="placeselectSiteStyleUnlimited">不限</a></li>'+
                    '<li><a href="#" ></a></li>'+
                    '<li><a href="#" ></a></li>'+
                    '<li><a href="#" ></a></li>'+
                    '</ul>'+
                    '</li>'+
                    '<li style="border: none">'+
                    '<ul class="detailedClasslist place_price_range" >'+
                    '<li style="width:78px">价格区间 :</li>'+
                    '<li><a href="#" class="por_unlimited_style" id="placePriceRangeUnlimited">不限</a></li>'+
                    '<li><a href="#" >免费</a></li>'+
                    '<li><a href="#" >300-800</a></li>'+
                    '<li><a href="#" >800-1700</a></li>'+
                    '<li><a href="#" >1700以上</a></li>'+
                    '</ul>'+
                    '</li>'+
                    '</ul>'+
                    '</div>'+
                    '<div class="placeselect_con">'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                                '<p class="placeselect_info_placename">青春学生妆</p><p class="placeselect_info_placeprice"><span>免费</span></p>'+
                            '</div>'+
                            '<div class="mendface_info_box">'+
                                '<div class="mendface_info_box_left">'+
                                    '<p>化妆师：<span>李小姐</span></p>'+
                                    '<p class="mendface_phonenumr">181****9878</p><a href="#">[查看]</a>'+
                                '</div>'+
                                '<div class="mendface_info_box_right"><input type="button" value="加入购物车" class="mendface_add_to_cart"/></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">青春学生妆</p><p class="placeselect_info_placeprice">￥<span>200~400</span>元/小时</p>'+
                            '</div>'+
                            '<div class="mendface_info_box">'+
                            '<div class="mendface_info_box_left">'+
                            '<p>化妆师：<span>李小姐</span></p>'+
                            '<p class="mendface_phonenumr">181****9878</p><a href="#">[查看]</a>'+
                            '</div>'+
                            '<div class="mendface_info_box_right"><input type="button" value="加入购物车" class="mendface_add_to_cart"/></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">青春学生妆</p><p class="placeselect_info_placeprice"><span>￥<span>200</span>元/小时</span></p>'+
                            '</div>'+
                            '<div class="mendface_info_box">'+
                            '<div class="mendface_info_box_left">'+
                            '<p>化妆师：<span>李小姐</span></p>'+
                            '<p class="mendface_phonenumr">181****9878</p><a href="#">[查看]</a>'+
                            '</div>'+
                            '<div class="mendface_info_box_right"><input type="button" value="加入购物车" class="mendface_add_to_cart"/></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">青春学生妆</p><p class="placeselect_info_placeprice"><span>免费</span></p>'+
                            '</div>'+
                            '<div class="mendface_info_box">'+
                            '<div class="mendface_info_box_left">'+
                            '<p>化妆师：<span>李小姐</span></p>'+
                            '<p class="mendface_phonenumr">181****9878</p><a href="#">[查看]</a>'+
                            '</div>'+
                            '<div class="mendface_info_box_right"><input type="button" value="加入购物车" class="mendface_add_to_cart"/></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">青春学生妆</p><p class="placeselect_info_placeprice">￥<span>200~400</span>元/小时</p>'+
                            '</div>'+
                            '<div class="mendface_info_box">'+
                            '<div class="mendface_info_box_left">'+
                            '<p>化妆师：<span>李小姐</span></p>'+
                            '<p class="mendface_phonenumr">181****9878</p><a href="#">[查看]</a>'+
                            '</div>'+
                            '<div class="mendface_info_box_right"><input type="button" value="加入购物车" class="mendface_add_to_cart"/></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="place_list">'+
                            '<img src="../image/activityProjectimg.jpg" alt=""/>'+
                            '<div class="placeselect_info">'+
                            '<p class="placeselect_info_placename">青春学生妆</p><p class="placeselect_info_placeprice"><span>￥<span>200</span>元/小时</span></p>'+
                            '</div>'+
                            '<div class="mendface_info_box">'+
                            '<div class="mendface_info_box_left">'+
                            '<p>化妆师：<span>李小姐</span></p>'+
                            '<p class="mendface_phonenumr">181****9878</p><a href="#">[查看]</a>'+
                            '</div>'+
                            '<div class="mendface_info_box_right"><input type="button" value="加入购物车" class="mendface_add_to_cart"/></div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="placeselect_paging_box">'+
                    '<ul class="placeselect_paging">'+
                    '<li><a href="#">首页</a></li>'+
                    '<li><a href="#">上一页</a></li>'+
                    '<li><a href="#">1</a></li>'+
                    '<li><a href="#">2</a></li>'+
                    '<li><a href="#">3</a></li>'+
                    '<li><a href="#">下一页</a></li>'+
                    '<li><a href="#">尾页</a></li>'+
                    '</ul>'+
                    '</div>'+
                    "");

                //$("#placePriceRangeUnlimited,#GetUserAreaUnlimited,#placeselectSiteStyleUnlimited,#placeselectSceneTypeUnlimited").css({
                //    color:"#fff"
                //});
                //$(".get_user_area a").click(function(){
                //    $(".get_user_area a").removeClass("por_unlimited_style");
                //    $(".get_user_area a").css({color:"#333"});
                //
                //    $(this).addClass("por_unlimited_style");
                //    $(this).css({
                //        color:"#fff"
                //    });
                //    $(".get_user_area a").hover(function(){
                //        $(this).css({
                //            color: "#fff"
                //        });
                //    },function(){
                //        if($(this).hasClass("por_unlimited_style")){
                //            $(this).css({
                //                color: "#fff"
                //            });
                //        }
                //        else{
                //            $(this).css({
                //                color: "#333"
                //            });
                //        }
                //    });
                //});
                //$(".placeselect_site_style a").click(function(){
                //    $(".placeselect_site_style a").removeClass("por_unlimited_style");
                //    $(".placeselect_site_style a").css({color:"#333"});
                //
                //    $(this).addClass("por_unlimited_style");
                //    $(this).css({
                //        color:"#fff"
                //    });
                //    $(".placeselect_site_style a").hover(function(){
                //        $(this).css({
                //            color: "#fff"
                //        });
                //    },function(){
                //        if($(this).hasClass("por_unlimited_style")){
                //            $(this).css({
                //                color: "#fff"
                //            });
                //        }
                //        else{
                //            $(this).css({
                //                color: "#333"
                //            });
                //        }
                //    });
                //});
                //$(".placeselect_scene_type a").click(function(){
                //    $(".placeselect_scene_type a").removeClass("por_unlimited_style");
                //    $(".placeselect_scene_type a").css({color:"#333"});
                //
                //    $(this).addClass("por_unlimited_style");
                //    $(this).css({
                //        color:"#fff"
                //    });
                //    $(".placeselect_scene_type a").hover(function(){
                //        $(this).css({
                //            color: "#fff"
                //        });
                //    },function(){
                //        if($(this).hasClass("por_unlimited_style")){
                //            $(this).css({
                //                color: "#fff"
                //            });
                //        }
                //        else{
                //            $(this).css({
                //                color: "#333"
                //            });
                //        }
                //    });
                //});
                //$(".place_price_range a").click(function(){
                //    $(".place_price_range a").removeClass("por_unlimited_style");
                //    $(".place_price_range a").css({color:"#333"});
                //
                //    $(this).addClass("por_unlimited_style");
                //    $(this).css({
                //        color:"#fff"
                //    });
                //    $(".place_price_range a").hover(function(){
                //        $(this).css({
                //            color: "#fff"
                //        });
                //    },function(){
                //        if($(this).hasClass("por_unlimited_style")){
                //            $(this).css({
                //                color: "#fff"
                //            });
                //        }
                //        else{
                //            $(this).css({
                //                color: "#333"
                //            });
                //        }
                //    });
                //});
                break;

            default:

                break;
        }
    });

});
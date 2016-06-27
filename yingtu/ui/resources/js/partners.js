/**
 * Created by 123 on 2016/6/24.
 */
$(function(){
    $(".partners_wrapper,.partners,.portrait_taken_navigation").css({
        width:window.screen.width+"px"
    });
    $(".partners_management_barlist>li>input").click(function(){
        $(".partners_management_barlist input").removeClass("partnerscurrent");
        $(".partners_management_barlist input").css({background:"#6177A0"});
        $(this).addClass("partnerscurrent");
        $(this).css({
            background:"#5FB2AC",
            border: "1px solid #5FB2AC"
        });
        $(".partners_management_barlist input").hover(function(){
            $(this).css({
                background:"#5FB2AC"
            });
        },function(){
            if($(this).hasClass("partnerscurrent")){
                $(this).css({
                    background:"#5FB2AC"
                });
            }
            else{
                $(this).css({
                    background:"#6177A0"
                });
            }

        });

    });
    $("body").click(function(e){
        switch(e.target.id){
            case "scenariosIn":
                $(".partners_main_right").html(' <ul class="scenariosIn_address">'+
                    '<li><a href="#">ºÏ×÷»ï°é</a><span>></span></li>'+
                    '<li><a href="#" class="current_address" style="color: #fff;">³¡¾°ÉÌÈë×¤</a></li>'+
                    '</ul>'+
                    '<ul class="scenariosin_content_table">'+
                    '<li style="height: 160px;line-height: 160px">'+
                    '<div>ËùÔÚµØÖ·</div>'+
                    ' <div>'+
                    '<div class="scenariosIn_address_select_list">'+
                    '<span>Ê¡</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '<span>ÊÐ</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '<span>Çø</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '</div>'+
                    '<div class="scenariosIn_address_other_list">'+
                    '<span>¾ßÌåµØÖ·£º</span>'+
                    '<input type="text" />'+
                    '</div>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 106px;line-height: 106px">'+
                    '<div>³¡¾°·ç¸ñ</div>'+
                    '<div>'+
                    '<ul class="Scene_the_style">'+
                    '<li><a href="#" class="unlimited_style" style="color: #fff" >×ÔÈ»·ç¸ñ</a></li>'+
                    '<li><a href="#" >¹Å·ç</a></li>'+
                    '<li><a href="#" >Å·Ê½</a></li>'+
                    '<li><a href="#" >º«Ê½</a></li>'+
                    '<li><a href="#" >ÆäËû</a></li>'+
                    '</ul>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 108px;line-height: 108px">'+
                    '<div>³¡¾°ÀàÐÍ</div>'+
                    '<div>'+
                    '<ul class="Scene_the_style">'+
                    '<li><a href="#" class="unlimited_style" style="color: #fff">Íâ¾°</a></li>'+
                    '<li><a href="#" >ÊÒÄÚÊµ¾°</a></li>'+
                    '<li><a href="#" >ÊÒÄÚÅïÅÄ</a></li>'+
                    '</ul>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 161px;">'+
                    '<div style="line-height: 161px;">³¡¾°Ïà²á</div>'+
                    '<div>'+
                    '<ul class="upload_pictures_list">'+
                    '<li></li>'+
                    '<li></li>'+
                    '<li></li>'+
                    '<li></li>'+
                    '<li></li>'+
                    '<li></li>'+
                    '</ul>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 179px;line-height: 179px">'+
                    '<div>³¡¾°ÃèÊö</div>'+
                    '<div>'+
                    '<textarea name="scenedescription" id="sceneDescription" cols="30" rows="10"></textarea>'+
                    '</div>'+
                    '</li>'+
                    '</ul>'+
                    '<input type="button" class="submit_audit" value="Ìá½»ÉóºË"/>' +
                '');
                $(".partners_main_right").css({
                    marginLeft:" 26px",
                    width: "943px"
                });

                break;
            case "dresserIn":
                $(".partners_main_right").html(''+
                    '<ul class="scenariosIn_address">'+
                        '<li><a href="#">ºÏ×÷»ï°é</a><span>></span></li>'+
                        '<li><a href="#" class="current_address" style="color: #fff;">»¯×±Ê¦Èë×¤</a></li>'+
                    '</ul>'+
                    ' <ul class="scenariosin_content_table" style="height: 600px">'+
                        '<li style="height: 540px;line-height: 540px">'+
                            '<div>»¯×±ÄÜÁ¦</div>'+
                            '<div>'+
                                '<ul class="makeup_ability_list">'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>Ð¡ÇåÐÂ×±</span><div></div></li>'+
                                '</ul>'+
                            '</div>'+
                        '</li>'+
                        '<li style="height: 59px;line-height: 59px">'+
                            '<div>×÷Æ·°æÈ¨</div>'+
                            '<div>Éæ¼°Ä£ÌØÐ¤ÏñÎÊÌâ£¬Çë»¯×±Ê¦ÏÈÐÐ»ñµÃÊÚÈ¨£»ÈçÓÐÈÎºÎÐ¤Ïñ¾À·×¾ùÓÐÉÏ´«ÈË³Ðµ£¡£</div>'+
                        '</li>'+
                    '</ul>'+
                    '<input type="button" class="submit_audit" value="Ìá½»ÉóºË"/>'+
                    '');
                $(".partners_main_right").css({
                    marginLeft:" 26px",
                    width: "943px"
                });
                break;
            default:

                break;
        }
    });

});


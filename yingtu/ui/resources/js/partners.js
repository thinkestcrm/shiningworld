?/**
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
                    '<li><a href="#">合作伙伴</a><span>></span></li>'+
                    '<li><a href="#" class="current_address" style="color: #fff;">场景商入驻</a></li>'+
                    '</ul>'+
                    '<ul class="scenariosin_content_table" style="height: 821px">'+
                    '<li style="height: 160px;line-height: 160px">'+
                    '<div>所在地址</div>'+
                    ' <div>'+
                    '<div class="scenariosIn_address_select_list">'+
                    '<span>省</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '<span>市</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '<span>区</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '</div>'+
                    '<div class="scenariosIn_address_other_list">'+
                    '<span>具体地址：</span>'+
                    '<input type="text" />'+
                    '</div>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 106px;line-height: 106px">'+
                    '<div>场景风格</div>'+
                    '<div>'+
                    '<ul class="Scene_the_style">'+
                    '<li><a href="#" class="unlimited_style" style="color: #fff" >自然风格</a></li>'+
                    '<li><a href="#" >古风</a></li>'+
                    '<li><a href="#" >欧式</a></li>'+
                    '<li><a href="#" >韩式</a></li>'+
                    '<li><a href="#" >其他</a></li>'+
                    '</ul>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 108px;line-height: 108px">'+
                    '<div>场景类型</div>'+
                    '<div>'+
                    '<ul class="Scene_the_style">'+
                    '<li><a href="#" class="unlimited_style" style="color: #fff">外景</a></li>'+
                    '<li><a href="#" >室内实景</a></li>'+
                    '<li><a href="#" >室内棚拍</a></li>'+
                    '</ul>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 161px;">'+
                    '<div style="line-height: 161px;">场景相册</div>'+
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
                    '<div>场景描述</div>'+
                    '<div>'+
                    '<textarea name="scenedescription" id="sceneDescription" cols="30" rows="10"></textarea>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 102px;line-height: 102px">'+
                    '<div>价格</div>'+
                    '<div>'+
                        '<ul class="scenariosIn_price_list">'+
                            '<li><input type="text"/><p>元/人</p></li>'+
                            '<li><input type="text"/><p>元/小时</p></li>'+
                        '</ul>'+
                        '<div class="scenariosIn_preferential">优惠</div>'+
                        '<ul class="scenariosIn_preferential_list">'+
                            '<li><p>多于</p><input type="text"/><p>人</p> <input type="text" value="-10" style="width: 30px" class="scenariosIn_preferential_set"/><p>元/人</p></li>'+
                            '<li><p>多于</p><input type="text"/><p>时</p> <input type="text" value="-10" style="width: 30px" class="scenariosIn_preferential_set"/><p>元/时</p></li>'+
                        '</ul>'+
                    '</div>'+
                    '</li>'+
                    '</ul>'+
                    '<input type="button" class="submit_audit" value="提交审核"/>' +
                '');
                $(".partners_main_right").css({
                    marginLeft:" 26px",
                    width: "943px"
                });

                break;
            case "dresserIn":
                $(".partners_main_right").html(''+
                    '<ul class="scenariosIn_address">'+
                        '<li><a href="#">合作伙伴</a><span>></span></li>'+
                        '<li><a href="#" class="current_address" style="color: #fff;">化妆师入驻</a></li>'+
                    '</ul>'+
                    ' <ul class="scenariosin_content_table" style="height: 600px">'+
                        '<li style="height: 540px;line-height: 540px">'+
                            '<div>化妆能力</div>'+
                            '<div>'+
                                '<ul class="makeup_ability_list">'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>小清新妆</span><div></div></li>'+
                                '</ul>'+
                            '</div>'+
                        '</li>'+
                        '<li style="height: 59px;line-height: 59px">'+
                            '<div>作品版权</div>'+
                            '<div>涉及模特肖像问题，请化妆师先行获得授权；如有任何肖像纠纷均有上传人承担。</div>'+
                        '</li>'+
                    '</ul>'+
                    '<input type="button" class="submit_audit" value="提交审核"/>'+
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


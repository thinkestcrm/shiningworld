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
                    '<li><a href="#">�������</a><span>></span></li>'+
                    '<li><a href="#" class="current_address" style="color: #fff;">��������פ</a></li>'+
                    '</ul>'+
                    '<ul class="scenariosin_content_table" style="height: 821px">'+
                    '<li style="height: 160px;line-height: 160px">'+
                    '<div>���ڵ�ַ</div>'+
                    ' <div>'+
                    '<div class="scenariosIn_address_select_list">'+
                    '<span>ʡ</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '<span>��</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '<span>��</span>'+
                    '<select name="" >'+
                    '<option value="0"></option>'+
                    '</select>'+
                    '</div>'+
                    '<div class="scenariosIn_address_other_list">'+
                    '<span>�����ַ��</span>'+
                    '<input type="text" />'+
                    '</div>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 106px;line-height: 106px">'+
                    '<div>�������</div>'+
                    '<div>'+
                    '<ul class="Scene_the_style">'+
                    '<li><a href="#" class="unlimited_style" style="color: #fff" >��Ȼ���</a></li>'+
                    '<li><a href="#" >�ŷ�</a></li>'+
                    '<li><a href="#" >ŷʽ</a></li>'+
                    '<li><a href="#" >��ʽ</a></li>'+
                    '<li><a href="#" >����</a></li>'+
                    '</ul>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 108px;line-height: 108px">'+
                    '<div>��������</div>'+
                    '<div>'+
                    '<ul class="Scene_the_style">'+
                    '<li><a href="#" class="unlimited_style" style="color: #fff">�⾰</a></li>'+
                    '<li><a href="#" >����ʵ��</a></li>'+
                    '<li><a href="#" >��������</a></li>'+
                    '</ul>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 161px;">'+
                    '<div style="line-height: 161px;">�������</div>'+
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
                    '<div>��������</div>'+
                    '<div>'+
                    '<textarea name="scenedescription" id="sceneDescription" cols="30" rows="10"></textarea>'+
                    '</div>'+
                    '</li>'+
                    '<li style="height: 102px;line-height: 102px">'+
                    '<div>�۸�</div>'+
                    '<div>'+
                        '<ul class="scenariosIn_price_list">'+
                            '<li><input type="text"/><p>Ԫ/��</p></li>'+
                            '<li><input type="text"/><p>Ԫ/Сʱ</p></li>'+
                        '</ul>'+
                        '<div class="scenariosIn_preferential">�Ż�</div>'+
                        '<ul class="scenariosIn_preferential_list">'+
                            '<li><p>����</p><input type="text"/><p>��</p> <input type="text" value="-10" style="width: 30px" class="scenariosIn_preferential_set"/><p>Ԫ/��</p></li>'+
                            '<li><p>����</p><input type="text"/><p>ʱ</p> <input type="text" value="-10" style="width: 30px" class="scenariosIn_preferential_set"/><p>Ԫ/ʱ</p></li>'+
                        '</ul>'+
                    '</div>'+
                    '</li>'+
                    '</ul>'+
                    '<input type="button" class="submit_audit" value="�ύ���"/>' +
                '');
                $(".partners_main_right").css({
                    marginLeft:" 26px",
                    width: "943px"
                });

                break;
            case "dresserIn":
                $(".partners_main_right").html(''+
                    '<ul class="scenariosIn_address">'+
                        '<li><a href="#">�������</a><span>></span></li>'+
                        '<li><a href="#" class="current_address" style="color: #fff;">��ױʦ��פ</a></li>'+
                    '</ul>'+
                    ' <ul class="scenariosin_content_table" style="height: 600px">'+
                        '<li style="height: 540px;line-height: 540px">'+
                            '<div>��ױ����</div>'+
                            '<div>'+
                                '<ul class="makeup_ability_list">'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                    '<li><input type="checkbox"/><span>С����ױ</span><div></div></li>'+
                                '</ul>'+
                            '</div>'+
                        '</li>'+
                        '<li style="height: 59px;line-height: 59px">'+
                            '<div>��Ʒ��Ȩ</div>'+
                            '<div>�漰ģ��Ф�����⣬�뻯ױʦ���л����Ȩ�������κ�Ф����׾����ϴ��˳е���</div>'+
                        '</li>'+
                    '</ul>'+
                    '<input type="button" class="submit_audit" value="�ύ���"/>'+
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


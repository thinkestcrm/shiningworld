/**
 * Created by 123 on 2016/6/12.
 */

$(document).ready(function() {
    //��ʼ��
    $(".login_warpper,.login_content").css({
        width:window.screen.width+"px"
    });
    document.getElementById('ordinaryLogin').checked = true;
    $('input[name="logintype"]').click(function(){
        if($(this).attr("checked")!=undefined)
        {
            $(this).siblings().attr("checked",false);
            $(this).attr("checked",true);
        }
    });
    $('input:text').focus(function(){
        $(this).val("");
    });
    //Switch the login way
    $("#mobileDynamicPass").click(function(){
        if(document.getElementById('mobileDynamicPass').checked  == true){
            $("#mobileDynamicPasswordOrnormal").html(' ' +
                '<input type="text" id="dynamicPass" value="��̬����"/>'+
                '<input type="button" id="getPassword" value="��ȡ��̬����"/>'
            );
            $('input:text').focus(function(){
                $(this).val("");
            });
            $("#dynamicPass").css({
                outline:"none"
            });
        }
    });
    $("#ordinaryLogin").click(function(){
        if(document.getElementById('ordinaryLogin').checked  == true){
            $("#mobileDynamicPasswordOrnormal").html(' ' +
                '<input type="text" id="normalLoginPassword" value="����"/>'
            );
            $('input:text').focus(function(){
                $(this).val("");
            });
            $("#normalLoginPassword").css({
                outline:"none"
            });
        }
    });




});

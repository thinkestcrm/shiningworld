/**
 * Created by 123 on 2016/6/12.
 */
$(document).ready(function() {
    //��ʼ��
    $('input:text').focus(function(){
        $(this).val("");
    });
    $(".login_warpper,.login_content").css({
        width:window.screen.width+"px"
    });

});

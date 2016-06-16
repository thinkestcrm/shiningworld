/**
 * Created by 123 on 2016/6/16.
 */



$(document).ready(function() {
    $('.evaluation>i').click(function(){
        if($(this).parent().hasClass("have_evaluation") != true){
            var  a=$(this).index();
            var i=0;
            for(i;i<a+1;i++){
                $('.evaluation:eq(2)>i:eq('+i+')').css({
                    color:"#ECE3AA"
                });
            }
        }

    });

});

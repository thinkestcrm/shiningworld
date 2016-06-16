/**
 * Created by 123 on 2016/6/7.
 */

$(document).ready(function() {
    //blocksit define
    $(window).load( function() {
        $('#container').BlocksIt({
            numOfCol: 4,
            offsetX: 8,
            offsetY: 8,
            blockElement: '.grid'
        });
    });

    //window resize
    var currentWidth = 1100;
    $(window).resize(function() {
        var winWidth = $(window).width();
        var conWidth;
        if(winWidth < 440) {
            conWidth = 220;
            col = 1
        }
        else if(winWidth < 660) {
            conWidth = 440;
            col = 2
        }
        else if(winWidth < 880) {
            conWidth = 660;
            col = 3
        }
        else if(winWidth < 1100) {
            conWidth = 880;
            col = 4;
        }
        else if(winWidth < 1320) {
            conWidth = 1100;
            col = 5;
        }
        else {
            conWidth = 1320;
            col = 6;
        }


        if(conWidth != currentWidth) {
            currentWidth = conWidth;
            $('#container').width(conWidth);
            $('#container').BlocksIt({
                numOfCol: col,
                offsetX: 8,
                offsetY: 8
            });
        }
    });
});
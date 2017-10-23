function add_img(obj, checkbox) {
    $.each($("div[class=checkboxborder]"),
    function(i, e) {
        e.style.background = "";
        e.style.border = ""
    });
    if (obj.style.background) {
        obj.style.background = "";
        obj.style.border = "";
        $("#"+checkbox).attr('checked', false);
    } else {
        obj.style.background = "url(./resources/images/xz.png) right no-repeat";
        obj.style.border = "";
        $("#"+checkbox).attr('checked', true);
    }
};
function add_imga(obj, checkbox) {
    $.each($("div[class=checkboxbordera]"),
    function(i, e) {
        e.style.background = "";
        e.style.border = ""
    });
    if (obj.style.background) {
        obj.style.background = "";
        obj.style.border = "";
        $("#"+checkbox).attr('checked', false);
    } else {
        obj.style.background = "url(./resources/images/xz.png) right no-repeat";
        obj.style.border = "";
        $("#"+checkbox).attr('checked', true);
    }
};
$(function() {
    $('.gr_con ul li').click(function() {
        $(this).addClass('hit').siblings().removeClass('hit');
        $('.panes>div:eq(' + $(this).index() + ')').show().siblings().hide()
    })
});
$(document).ready(function() {
    $(".cl_img").click(function() {
        $(".we").toggle()
    })
});
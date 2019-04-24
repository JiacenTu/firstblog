$("#header").load("/resources/html/common/header.html");
$("#admin_header").load("/resources/html/common/admin_header.html");
$(function () {
    // 头部超链接绑定激活状态
    $(".header li").each(function () {
        var a = $(this).find("a:first")[0];
        $(a).attr("href") === location.pathname ? $(this).addClass("active-orange") :
            $(this).removeClass("active-orange");
    })
    // $('[data-toggle="popover"]').popover();
})

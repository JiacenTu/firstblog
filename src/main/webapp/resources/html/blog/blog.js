$(function () {
    bindEvent();
});

// 右侧浮动按钮绑定事件
function bindEvent() {
    $("#hideAll").on("click", function () {
        $(".collapse").each(function () {
            $(this).collapse("hide");
        })
    });
    $("#showAll").on("click", function () {
        $(".collapse").each(function () {
            $(this).collapse("show");
        })
    })
    // 点赞效果
    $(".good").each(function () {
        $(this).on("click", function () {
            $(this).hasClass("good-color") ? $(this).removeClass("good-color")
                : $(this).addClass("good-color");
        })
    })

}
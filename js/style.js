$(function(){
    $(".menu_toggle_btn").click(function(){
        $(".gnb").slideToggle()
    })


    $(".search_select_box span,.search_select_list").hover(function(){
        $(".search_select_list").stop().slideDown()
    },function(){
        $(".search_select_list").stop().slideUp()
    })
})//jquery
$(document).ready(function(){
    $('.menu-top-header dropdown-menua').click(function(){
        $('.dropdown-menu').slideUp();     
        $(this).next('.dropdown-item').stop().slideToggle();
        return false;
    });
    $(document).click(function(){
        $('.dropdown-menu').slideUp();   
    })
});
$(function (){
    $('.site-theme .dropdown-item').on('click',function (e){
        e.preventDefault();
        $('.site-theme .dropdown-item').removeClass('dropdown-item-selected')
        $(this).addClass('dropdown-item-selected')
        $('body').removeClass('dark');
        $('body').addClass($(this).data('name'));
    })
})
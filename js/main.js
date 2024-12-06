$(function (){
    $('.site-theme .dropdown-item').on('click',function (e){
        e.preventDefault();
        $('.site-theme .dropdown-item').removeClass('dropdown-item-selected')
        $(this).addClass('dropdown-item-selected')
        $('body').removeClass('dark');
        $('body').addClass($(this).data('name'));
    });

    $('.notes-folders .note-link').on('click',function (e){
        e.preventDefault();
        $('.notes-folders  .note-item').removeClass('selected');
        $(this).parent().addClass('selected');
        $('.aside-opened').addClass('opened');
        $('aside:not(.aside-opened)').addClass('opened').removeClass('show');
        $('main').addClass('main-opened').removeClass('main-folder');

    })
    $('.btn-back').on('click',function (){
        $('.notes-folders  .note-item').removeClass('selected');
        $('.aside-opened').removeClass('opened');
        $('.aside-opened').hide();
        $('main').removeClass('main-opened');
        $('aside:not(.aside-opened)').removeClass('opened').addClass('show');

    })
})
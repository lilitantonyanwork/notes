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
        $('main').addClass('main-opened').removeClass('main-folder justify-content-center');
        $('.empty-body').addClass('d-none').removeClass('d-flex');
        $('.note-content').addClass('d-flex').removeClass('d-none');

    })
    $('.btn-back').on('click',function (){
        $('.notes-folders  .note-item').removeClass('selected');
        $('.aside-opened').removeClass('opened');
        $('.aside-opened').hide();
        $('main').removeClass('main-opened').addClass('justify-content-center');
        $('aside:not(.aside-opened)').removeClass('opened').addClass('show');
        $('.empty-body').addClass('d-flex').removeClass('d-none');
        $('.note-content').addClass('d-none').removeClass('d-flex');

    })
    $('.btn-remove').on('click',function (){
        $('.alert-remove').addClass('show');
        setTimeout(function (){
            $('.alert-remove').removeClass('show');
        }, 3000)
    }) ;
    $('.dropdown-item-archive').on('click',function (){
        $('.alert-archive').addClass('show');
        setTimeout(function (){
            $('.alert-archive').removeClass('show');
        }, 3000)
    })
    $('.btn-folder-check').on('click',function (){
        $('.alert-saved').addClass('show');
        $('.new-folder-name').text($('.new-folder').val()).show();
        $('.new-folder').hide();
        setTimeout(function (){
            $('.alert-saved').removeClass('show');
        }, 3000)
    })
    $('.btn-headings').on('click',function (){
        $('.heading-list').toggleClass('opened')
    })
    $('.heading-item').on('click',function (){
        $('.heading-list').toggleClass('opened')
    })
    $('.btn-table').on('click',function (){
        $('.table-list').toggleClass('opened')
    })

    $( ".table-item" )
        .on( "mouseenter", function() {

            let n = $(this).index();
            let row = $(this).parent().index()

            $('.table-row').each(function (){
                if($(this).index() <= row){
                  $(this).find(".table-item").each(function (){
                      if($(this).index() <= n){
                          $(this).addClass('selected')
                      }
                  })
                }
            })

        } )
        .on( "mouseleave", function() {
            $( ".table-item" ).removeClass('selected')
        } ).on('click',function (){
        $('.table-list').toggleClass('opened')
    });
    $('.btn-full-screen').on('click',function (){
        $('body').toggleClass('full-screen')
    })

})
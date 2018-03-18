    
$(function() {
    $('.toggleNav').on('click',function() {
    $('nav.menu-overlay').toggleClass('open');
    // $('nav.menu-overlay').fadeToggle();
    });
    $('.close').on('click',function() {
    $('nav.menu-overlay').toggleClass('open');
    });
    $('.cats-toggle').on('click', function() {
        $('.blog-header .blog-header-wrapper .menu-flex').toggleClass('open');
    });
});

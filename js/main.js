    
$(function() {
    $('.toggleNav').on('click',function() {
    $('nav.menu-overlay').toggleClass('open');
    // $('nav.menu-overlay').fadeToggle();
    });
    $('.close').on('click',function() {
    $('nav.menu-overlay').toggleClass('open');
    });
});

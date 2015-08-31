$('#hamburger').click(function(){
    var btn = $(this).find('span');
    var nav = $('#nav')
    var classList = btn.attr('class');
    var relHeight = nav.find('ul').height();
    if(!classList){
        btn.addClass('x');
        nav.css('height', relHeight)
    } else {
        btn.removeClass('x');
        nav.css('height', '0')
    }
})

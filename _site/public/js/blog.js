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

/*
$.mouseWheel = function (selector, listener) {
    function handleMouseWheel (event) {
        var e = event || window.event;
        target = e.srcElement? e.srcElement : e.target;
        e.preventDefault();
        e.stopPropagation();
        var delta;
        if (e.wheelDelta) {
            delta = e.wheelDelta;
        }
        else {
            delta = -e.detail * 40;
        }
        //像下滚为负值
        listener(delta, target)
    }
    $.on(selector, "mousewheel", function (event) {
        handleMouseWheel(event)
    });

    $.on(selector, "DOMMouseScroll", function (event) {
        handleMouseWheel(event)
    })
}


$.mouseWheel('body', function (delta) {
    if (delta < 0) {
        $('header').eq(0).addClass('down')
    } else {
        $('header').eq(0).removeClass('down')
    }
})
*/

Layout('.index-img', 0);
Layout('.blog-block',1);
headImg();
bloglist();
function Layout(event, num){
    $event = $(event);
    for (var i=0; i<$event.length; i++){
	var con;
	if(num == 0){con = (i%2==0)}else{con = (i%2!=0)} 
        if(con ){
        	$event.eq(i).css({
        		"left":'0',
        		"top":i*400+'px'
        	})
        }else{
        	$event.eq(i).css({
        		"right":'0',
        		"top":i*400+'px'
        	})
        }
    }    
}

function headImg(){
	var $img = $('#index-head').find('img');
	var $p = $('#describe');
	var imgWidth = $img.width();
	var pWidth = $p.width();
	var  bodyWidth = $('body').width();
	var imgLeft = parseInt((bodyWidth - imgWidth-pWidth)/2+pWidth);
	var $content = $('#index-content');
	var contentLeft = parseInt((bodyWidth-$content.width())/2)
	var $ul = $('#index-head').find('ul');
	$img.css("left",imgLeft+'px');
	$p.css("left",parseInt((bodyWidth - imgWidth-pWidth)/2)+'px')
	$ul.css("left",contentLeft+'px')

}

function bloglist(){
	var $bloglist = $('#blog-list').find('li');
	var opacity = 0;
	var i=1;
	var timer;
	fade(i);
	function fade(num){
		if(opacity >= 1) {
		clearTimeout(timer);
		opacity = 0;
		fade(num+1);
		}else{	
	opacity = opacity+0.1;
	$bloglist.eq(num).css('opacity',opacity);
	timer = setTimeout(rfade(num),50)}
	}
	function rfade(num){
		return function(){
			fade(num)
		}
	}
	
}

bloglist();

function bloglist(){
	var $bloglist = $('#blog-list').find('li');
	var opacity = 0;
	var padding = 30;
	var i=1;
	var timer;
	fade(i);
	function fade(num){
		if(opacity >= 1 && num<$bloglist.length) {
		clearTimeout(timer);
		padding=30;
		opacity = 0;
		fade(num+1);
		}else{	
	opacity = opacity+0.05;
	padding += 1
	$bloglist.eq(num).css({'opacity':opacity,'padding-top':padding+'px'});
	timer = setTimeout(rfade(num),20)}
	}
	function rfade(num){
		return function(){
			fade(num)
		}
	}
	
}

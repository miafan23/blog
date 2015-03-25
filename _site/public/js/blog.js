Layout('.index-img', 0);
Layout('.blog-block',1);
headImg();

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
	$img.css("left",imgLeft+'px');
	$p.css("left",parseInt((bodyWidth - imgWidth-pWidth)/2)+'px')

}

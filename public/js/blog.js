Layout('.index-img', 0);
Layout('.blog-block',1);

function Layout(event, num){
    $event = $(event);
	console.log($event)
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

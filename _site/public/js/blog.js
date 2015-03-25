Layout('.index-img', 0);

function Layout(event, num){
    $event = $(event)
    for (var i=num; i<$event.length; i++){
        if(i%2 ==0 ){
        	$event.eq(i).css({
        		"left":'0',
        		"top":i*400+'px'
        	})
        }else{
        	$event.eq(i).css({
        		"right":'0',
        		"top":"400px"
        	})
        }
    }    
}




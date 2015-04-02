---
layout: post
title: 使用setTimeout传参数
---

<p>今天在一个博客上看到了博客一条一条显示的效果觉得很优雅，所以也尝试做一个这样的效果。想法是使用setTimeout来控制条目的opacity，形成淡入的效果，在第一条淡入完成以后，再让第二条淡入。这样的话我的fade函数需要传入一个参数来控制是第几条条目。但是标准的setTimeout(fade，1000)，fade只是函数名，不带(),因此不能传入参数。如果直接setTimeout(fade(num),1000)会发现没有延时效果了</p>

<p>后来经过谷歌，得到解决方案可以使用闭包来返回一个没有参数的函数，代码如下</p>

{% highlight js %}
setTimeout(ofade(num),1000);
function ofade(num){
	return function(){
	fade(num)
	}
}

{% endhighlight %}

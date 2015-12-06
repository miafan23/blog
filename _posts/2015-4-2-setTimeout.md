---
layout: post
title: 使用setTimeout传参数
---

今天在一个博客上看到了博客一条一条显示的效果觉得很优雅，所以也尝试做一个这样的效果。想法是使用`setTimeout`来控制条目的`opacity`，形成淡入的效果，在第一条淡入完成以后，再让第二条淡入。这样的话我的fade函数需要传入一个参数来控制是第几条条目。但是标准的`setTimeout(fade，1000)`，`fade`只是函数名，不带(),因此不能传入参数。  

后来经过谷歌，得到解决方案可以使用匿名函数，代码如下

{% highlight js %}
setTimeout(function(){
    myFunc(param);
}, 1)
{% endhighlight %}

另外，在IE10及以上的浏览器中，setTimeout其实支持传入参数,用法如下
{% highlight js %}
setTimeout(myFunc, 1, param);
{% endhighlight %}


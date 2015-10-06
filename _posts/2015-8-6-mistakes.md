---
layout: post
author: fiona
title: 那些年我不愿再踩的坑
category: 生活
tag: [总结]
---

记录一些平时遇到的坑，加深印象  

###2015/8/22  
###keyword: img li height
今天在修复首页之前的一个小bug的时候，发现 `li` 的高度要比 `img` 的高度高一点（代码结构如下）
{% highlight html%}
<ul>
  <li>
    <img src="...">
  </li>
</ul>
{% endhighlight %}
导致我连续竖排的图片总有一定缝隙。后来谷歌到是因为 `img` 是行内元素，会有一个与文字的baseline对应的下边沿的距离。  
设置 `img{ vertical-align:top; }` 就可以解决了。

###2015/9/14
###keyword: upload file pure css
之前在写`<input type="file" />`的样式的时候，用的是图片，但是觉得不是很好看，所以今天改成用纯CSS实现了，方法如下：  
###html code
{% highlight html %}
<div class="file-input">
    <span>upload</span>
    <input type="file" class="upload-btn">
</div>
{% endhighlight %}
###css code
{% highlight css %}
.file-input {
    position: relative;
    overflow: hidden;
    margin: 10px;
    cursor: pointer;
}

,upload-btn {
    position: absolute;
    top: 0;
    right: 0; /*防止遮住大div*/
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}
{% endhighlight %}

###2015/10/6
###keyword: requreJS AMD define require
以前用`requireJS`的时候都是用的`require(['a', 'b'], funciont(a,b){})`的方式使用，但是当依赖的列表过长的时候就会比较麻烦，所以随用随取可能会是更好的方式。记录一下几种用法  
最常见的第一种就是上面提到的，随用随取的方式是：
{% highlight js %}
define(funciont(require){
    var a = require('a')
})
{% endhighlight %}

还有一种是

{% highlight js %}
define(['require', 'a'], funciont(require){
    var a = require('a')
})
{% endhighlight %}


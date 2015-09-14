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

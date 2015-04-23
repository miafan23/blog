---
layout: post
author: fiona
title: 有关jekyll serve和githubpage的url
category: 生活
tag: [jekyll]
---

今天弄jekyll博客的时候发现，如果在文件中将相对地址设置为 /css/main.css,
在jekyll serve中能够正常显示，但是在githubpage中，如果博客的地址是:username.github.io/blog/，则无法正确读取css或者js img的地址，因为默认地址是username.github.io,但是如果在相对地址前面加上blog/，在jekyllserve中又无法争取显示了。  

后来谷歌出，只要把/css/main.css改成 {\{site.baseurl }\}/css/main.css就可以啦(大括号里面的\是防止大括号被liquid模板解释的，不要一块儿输进去咯)

---
layout: post
title: 由今日头条 cookie 到 beforeunload 事件
author: fiona
tag: [javascript]
---

今天和小伙伴发现一件有点小神奇的事情，今日头条的官网，如果手动把 cookie 全部清掉，当我刷新后，发现 request header 里面依然带有 cookie。 当时觉得重新访问的时候，js 代码都还没有下载下来，是怎么做到去 set cookie 的。其实有一点经验的应该也就知道了，是 `beforeunload` 事件干的。  

`beforeunload` 事件是 window 的一个事件。当文档卸载时执行，例如刷新或者关闭时就会触发。今日头条就是在 `beforeunload` 事件出发时又设置了一次cookie。  

还发现一个神奇的事情就是，在 `beforunload` 事件里打断点的时候，关闭窗口，会停在断点处，但是刷新断点缺无效。。 说实话，反过来我还更能理解一点。。
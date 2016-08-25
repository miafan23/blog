---
layout: post
title: 如何给一排或者一列 dom 设置 margin
author: fiona
tag: [css]
---

平时排版的时候，在给一排 dom 设置 margin 或者 border 的时候，经常会出现的情况是不需要给第一个 dom 设置，以前我的方法都是统一设置以后，再加一个 :first-child 的选择器，虽然也不麻烦，但是总觉得不是很爽。最近看到一个比较巧妙的方法。


假设子 dom 的类都是 child 吧，这个方法就是
```css
.child + .child {
  margin-left: 10px;
}
```
这样除了第一个 child 以外，其他 child 都会有一个 margin-left 了，原理也很简单，＋ 选择器是指选择下一个，也就是除了第一个 .child, 后面所有的 .child 都会满足这个条件。

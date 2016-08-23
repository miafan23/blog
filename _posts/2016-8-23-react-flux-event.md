---
layout: post
author: fiona
title: 使用 react router 的时候使用 flux 的问题
tag: [react]
---

最近做的项目使用的是 react + react-router + flux 的开发模式，在 flux 中需要监听 Store 的变化，一般是在 control view 的 `componentDidMount` 中去监听，当 Store 变化后，去执行对应的函数，例如 setState()。 

 
前两天遇到的一个错是，当我从 index 跳到 about 页面，又从 about 页面跳回 index 页面后，当 store 变化时，控制台报错说我在一个 `umount` 的组件中执行了 `setState`，当时有点奇怪我明明所有的 `setState` 都是在 `componentDidMount` 里执行的啊。后来想到可能是当我从 index 页面跳到 about 页面以后，index 这个组件已经`unmount`了，但是却一直还在监听 `Store` ，当 `Store` 变化的时候，又去执行了 `setState` ，导致出现报错。  
后来在`componentWillUnmount`里执行里`removeListener`以后，报错就消失了。需要注意的是`removeListener`这个函数需要把最开始的`addListener`的`callback`作为参数传进去。这篇文章介绍得很清楚：http://www.alloyteam.com/2015/08/eventemitter/  


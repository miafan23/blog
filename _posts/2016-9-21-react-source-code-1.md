---
layout: post
title: react 源码学习系列［一］
author: fiona
tag: [react]
---

从今天开始，准备开始看 react 源码。边看边记录和整理。  
首先看一下 react 源码的目录结构, 在 src 文件夹下：  
```
├── addons
├── isomorphic
├── renderers
├── shared
├── test
└── umd

```
src 文件夹下一共有 6 个文件夹。addons 文件夹主要是一些附加的功能，对于我们学习源码的目的来说可以先暂时不看。同理 test。shared 文件夹是一些公用的方法。 所以我们的重点是放在 isomorphic 和 render 文件夹。 isomorphic 文件夹里包含了所有的类，renderers 主要是渲染方面。  
在学习的时候，我选择暂时先不管 JSX，调试的时候也使用不支持 JSX 的源码，会使学习过程轻松很多。  
接下来用一个最简单的例子来说：
{% highlight html %}
  <div id="container">
{% endhighlight %}
{% highlight js %}
  var Hello = React.createClass({
    displayName: 'Hello',
    getInitState() {
      user: ''
    },
    componentWillMount() {
      this.setState({user: 'fanfan'})
    },
    render: function() {
      return React.createElement("div", null, "Hello ", this.props.name, ", I am " , this.state.user);
    }
  });

  ReactDOM.render(
    React.createElement(Hello, {name: "World"}),
    document.getElementById('container')
  );
{% endhighlight %}

这是一个简单的在页面上渲染 Hello World, I am fanfan 的 react 应用，name 是 props，user 是 state。


---
layout: post
author: fiona
title: 用canvas写一个开场动画
tag: [javascript, canvas, 教程]
---

你是从首页无意中点进来的么？喜欢首页的那个旋转的动画的话，跟着这篇博客就能很快做出来哟！


##step1
最终的形状其实是下面这个图形不停旋转得到的， 所以第一步就是画出下面这个图形

![枳 图一]( {{ site.baseurl }}/public/img/post/20150822_1.png )
{% highlight js %}
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//注意不要使用css给canvas设定宽高
canvas.setAttribute('width', '500');
canvas.setAttribute('height', '500');

var pie = {
    count: 85,

    draw: function(){
        //将圆心移动到canvas中心
        ctx.translate(125, 125)
        var i = this.count;
            while( i-- ) {
            ctx.beginPath();
            //实际就是画一堆同心圆，弧度在0-Math.PI/3间随机，为了更好的效果，起点和终点也都在小范围内随机了一下
            ctx.arc(0, 0, i+(Math.random()*35), Math.random(), Math.PI/3+(Math.random()/12));
            ctx.stroke();
        }
    }
}
{% endhighlight %}

写完上面的代码以后，再 `pie.draw()` 你应该会得到上面给出的那个图形  

##step2
第二步就是要让图形旋转起来了，我们可以指定一个旋转速度，每一帧动画的旋转角度

{% highlight js %}
var pie = {
   //上面写过的代码不再重复
    ...
    rotation: 0,
    //可以自己尝试弄一个比较舒服的速度
    speed: 0.06，

    draw: function(){
        //每次旋转后将新画的图像画在原来的图像之上
        ctx.globalCompositeOperation = 'source-over';
        //保存一下状态
        ctx.save();

        ctx.translate(125,125）
        ctx.rotate(this.rotation);
        //上面写过的代码
        ...
        ctx.restore();
    }
    loop: function(){
        //requestAnimationFrame执行的时候，this会变为windows，所以先保存一下。
        var _this = pie;
        requestAnimationFrame(_this.loop);
        //每次循环以后 旋转的角度加1
        _this.rotation += _this.speed;

        _this.draw();
    }
}
{% endhighlight %}

有关globalCompositionOperation相关可以[点击](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing)了解，通过这样，我们可以得到一个旋转的初步图形，但是你应该已经发现，因为我们是一直叠加在以前的图形上，所以会越来越浓，最后变成一块黑饼，当然这不是我们想要的结果，所以接下来第三步就是解决这个问题。
![枳 图二]( {{ site.baseurl }}/public/img/post/20150822_2.png )
#step3
想要最终不是一个黑饼，那么每新画一个，就得让前面画过的图形慢慢消失，所以我们每新画一个旋转的小扇形之前，可以将我们的画布填充满白色，这样以前画的就不会和新画的重叠了  
{% highlight js %}
loop: function () {
        var  _this = pie;

        requestAnimationFrame(_this.loop);

        ctx.globalCompositeOperation = 'destination-out';
        //填充的白色给一个透明度，这样才有小尾巴哟
        ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
        ctx.fillRect( 0, 0, 250, 250 );

        _this.rotation += _this.speed
        
        _this.draw();


    }
{% endhighlight %}
然后 `pie.loop()` 一下，好了，这样应该就能得到我首页的那个开场动画了！speed,透明度都可以自己调到一个自己比较喜欢的值～这种有点禅意的且性冷淡的风格真是深得我心！

![枳 图三]( {{ site.baseurl }}/public/img/post/20150822_3.jpg )

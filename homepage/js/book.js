/**
 * Created by liuyang on 2017/6/19.
 */
window.onload = function(){
    var text_array=['HTML和CSS','JS和jQuery','HTML5权威指南','JS高级程序设计','创意','大势研判','论中国','我想要的理财书','女人财富非常道','没有任何借口'];
    var content_array=[
        '本书的重点在于涵盖了HTML和CSS的常用标记及属性,适当地介绍了一些HTML5以及CSS3的一些新控件和新属性，对于理解和掌握基础知识是非常有帮助的。',
        '本书的重点在于对JavaScript和jQuery的概念理解比如函数、方法、对象、事件；对Ajax与JSON以及API做了剪短的概述等，对于新手入门还是很有帮助的。',
        '本书主要的作用是作为一本工具书来用，其中涉及的内容非常全面，对知识点的概括非常细致和完整，对于深入的了解HTML和CSS以及JS都是很有必要的。',
        '本书主要从JavaScript的设计模式出发，适合想要深入理解和精通JavaScript的朋友，不适合初学者或者为网站添加简单交互功能的读者。',
        '本书的核心在于"创意"二字，全书都是围绕创意二字展开，每一章节都是从不同的角度通过不同的故事分析和解剖如何让自己的创意更具"黏性"。',
        '本书主要从宏观研究的角度出发，包含逻辑框架和心性修炼两部分；从历史事件总结经验出发，对中国人口周期、房地产周期、存货周期、膨胀周期等等提出自己的看法。',
        '本书是我最喜欢的书籍之一，是亨利基辛格根据自己的亲身经历对中国历史事件及重要领导人物进行阐述和分析，有别于历史教科书；让我从一个不喜欢历史的人变成历史爱好者。',
        '本书是一本适合初级理财者或者对理财有兴趣的朋友，这本书对理财内容方面的介绍很浅显易懂，若想要仅靠此书就能选择适合自己的理财产品或理财方式还是比较困难的。',
        '本书比较适合女性朋友阅读，每章节都会通过很多不同的例子来阐述对女人来说"什么"是最重要的，以及我们应该了解的一些人生道理等等',
        '本书是一本心灵鸡汤类型的书，主要适合遇到挫折或者心情低落的朋友，易于让自己重拾信心，面对新生活。'
    ];
    var ulDoc=document.querySelector(".reason ul");
    // 获取要互换的两个div（装有图片）的下角标,封装事件类型
    initModal();
    function addLiEvent(){
        var photo = document.querySelectorAll(".photo");
        for(var i=0;i<photo.length;i++){
            photo[i].index=i;
            addEvent(photo[i],"dragstart",function(){
                startValue = this.index;
            });
            /*addEvent(photo[i],"mouseenter",function(){
                this.classList.add("on");
            });
            addEvent(photo[i],"mouseleave",function(){
                this.classList.remove("on");
            })*/
            addEvent(photo[i],"click",function(){
                this.classList.toggle("on");
            });
        }
        for(var j=0;j<photo.length;j++){
            addEvent(photo[j],"dragover",function(e){
                preDefault(e);
            });
            photo[j].idx = j;
            addEvent(photo[j],"drop",function(){
                dropValue =this.idx;
                change(startValue,dropValue);
                initModal();
            });
        }
    }
    // 根据两个div（装有图片）的下角标，互换text_array 数组中的对应的元素
    function change(startValue,dropValue){
        var number1 = text_array[startValue];
        text_array[startValue] = text_array[dropValue];
        text_array[dropValue]  = number1;
        var number2 = content_array[startValue];
        content_array[startValue] = content_array[dropValue];
        content_array[dropValue]  = number2;
    }
    // 将text_array数组中的元素动态加入到li部分的代码中
    function initModal(){
        ulDoc.innerHTML="";
        for(var i=0;i<text_array.length;i++){
            addLi(content_array[i],text_array[i]);
        }
        // 重新调用事件类型
        addLiEvent();
    }

    // 重新调用事件类型
    // addLiEvent();
    // 动态生成html中li部分的代码
    function addLi(content,text){
        var liHTML=""+
            "<li>"+
            "<div class=\"photo\" draggable=\"true\">"+
            "<div class=\"text\">"+
            content+
            "</div>"+
            "<img src=\"../images/books1/"+text+"1.jpg\">"+
            "</div>	"+
            "</li>";
        ulDoc.innerHTML+=liHTML;
    }
};
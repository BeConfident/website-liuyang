addEvent(window,"load",function(){
	var banner_in = document.querySelector(".banner-in");
	//var banner_in_after = window.getComputedStyle(banner_in, ":after");
	var nav_right = document.querySelector(".nav-right");
	var register  = nav_right.querySelector(".register");
	var account =  document.querySelector(".account");
	/*var text_array=['HTML和CSS','JS和jQuery','HTML5权威指南','JS高级程序设计','创意','大势研判','论中国','我想要的理财书','女人财富非常道','没有任何借口'];
	// var content_array=['JS高级程序设计','创意','大势研判','论中国','HTML和CSS','JS和jQuery','HTML5权威指南','我想要的理财书','女人财富非常道','没有任何借口'];
	var ulDoc=document.querySelector(".reason ul");*/


	// banner 右侧半透明遮挡图去掉
	setTimeout(function(){
		//console.log(banner_in_after_display);
		//banner_in_after.style.display="none";
		banner_in.classList.add("out");
	}, 2000);
	// 导航右侧账号点击事件
	addEvent(account,"click",function(){
		/*if(register.classList.contains("on")){
			register.classList.remove("on");
		}else {
			register.classList.add("on");
		}*/
		register.classList.toggle("on");


	});
	// 账号失去焦点
	addEvent(nav_right,"mouseleave",function(){
		//console.log(register);
		register.classList.remove("on");
	});














});
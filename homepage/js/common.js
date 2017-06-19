// 兼容多浏览器绑定事件
function addEvent(obj,type,handler){
	if(obj.addEventListener){
		obj.addEventListener(type,handler);
	}else if(obj.attachEvent){
		obj.attachEvent("on"+type,handler);
	}else {
		obj["on"+type]=handler;
	}
}
// 阻止默认事件
function preDefault(e){
	var evt = e||window.event;
	if(evt.preventDefault){
		evt.preventDefault();
	}else if(evt.returnValue){
		evt.returnValue=false;
	}else {
		return false;
	}
}
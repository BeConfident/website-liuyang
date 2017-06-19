/**
 * Created by liuyang on 2017/6/19.
 */
window.onload=function(){
    var watchTop = document.querySelector(".watch .top");
    var watchMiddle = document.querySelector(".watch .middle");
    var watchBottom = document.querySelector(".watch .bottom");
    // 获取当前时间
    var hours,minutes,seconds;
    // 多次定时秒数
    var Timer;
    nowTimer();
    clearInterval(Timer);
    // 每隔1秒调用nowTimer函数
    Timer = setInterval(nowTimer,1000);
    // 获取当前时间，并将时间和转过的角度相一致
    function nowTimer(){
        var nowDate = new Date();
        hours = nowDate.getHours();
        minutes = nowDate.getMinutes();
        seconds = nowDate.getSeconds();
        if(hours>12){
            hours-=12;
        }
        watchTop.style.transform ="rotateZ("+(30*hours)+"deg)";
        watchMiddle.style.transform = "rotateZ("+(6*minutes)+"deg)";
        watchBottom.style.transform="rotateZ("+(6*seconds)+"deg)";
        //console.log( '当前北京时间：'+hours+':'+minutes+':'+seconds);
    }
}
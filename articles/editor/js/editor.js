/**
 * Created by liuyang on 2017/6/18.
 */
// 直接运行
(function(){
    $(document).ready(function() {
        $('#summernote').summernote({
            lang:"zh-CN",
            height:400,
            minHeight:200,
            maxHeight:1000,
            placeholder:"在此编辑内容...文字图片视频都可...",
            callbacks: {
                onChange: function(contents, $editable) {
                    // console.log('onChange:', contents, $editable);
                    $("#contents").val(contents);
                }
            }
        });
    });
    $("#save").click(function(){
        var content = $("#contents").val();
        $.ajax({
            type:"post",
            url:"",
            data:{
                content:content
            },
            success:function(){
                alert("成功啦");
            }
        });
    });
})();
/*window.onload= function(){};*/

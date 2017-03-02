define(['jquery','common','nprogress','util'],function($,undefined,nprogress,util){
	
	//该页面所有的js加载完毕，进度条结束
	nprogress.done();
	
	
	//添加讲师的相关操作
	$('#teacher-add-form').on('submit',function(){
		$.ajax({
			url:'./v6/teacher/add',
			type:'post',
			data:$(this).serialize(),
			success:function(data){
				if(data.code == 200){
					location.href = '/html/teacher/list.html';
				}
			}
		});
		return false;
	});
});
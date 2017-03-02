define([],{
	//获取指定的查询字符串
	getQueryString: function(ley){
		
		var search = location.search.slice(1);
		
		var earchArr = search.split('&');
		var tempArr = null;
		var searchObj = {};
		
		//遍历数组中的每一个key = val 字符串，使用=号劈开
		//然后以key为名，val为值添加到searchObj对象中
		for(var i=0,len = searchArr.length;i<len;i++){
			tempArr = searchArr[i].split('=');
			searchObj[tempArr[0]] = tempArr[1]
		}
		
		//有参数返回指定值，没有参数返回所有值
		return arguments.length?searchObj[key]:searchObj;
	
	},
	extend: function(){
		
	}
	
})
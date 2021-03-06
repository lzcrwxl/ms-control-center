//系统菜单js
var menuJson=null;
var menuMap=new Map();
var menu={
	
	/**
	 * 初始化顶级菜单
	 */
	initFirst:function(data){
		$.each(data, function (key, value) {
			menuMap.put(value.id,value),
			$("#first_menus ul").append(
				div("li","").attr("id",value.id).append(
					div("a","").html(value.text)
				)
			)
        });
		
		//执行绑定方法
		$("#first_menus ul li").bind("click",function(){
			var pid=$(this).attr("id");
			menu.initSecond(pid);
			$(this).addClass("active").siblings().removeClass("active")
		})
		
		menu.initSecond($("#first_menus ul li:eq(0)").attr("id"));
		$("#first_menus ul li:eq(0)").addClass("active");
	}
	,
    initJsonData:function(){
    	$.getJSON(ctxStatic+"/js/menus.json",function(data){
    		menu.initFirst(data);
    	});
    }
	,
	/**
	 * 初始化菜单
	 */
	initSecond:function(pid){
		var data=menuMap.get(pid);
		$('#menu').html("");
		$('#menu').sidebarMenu({
			data: data.menus
  		});
	}	
};
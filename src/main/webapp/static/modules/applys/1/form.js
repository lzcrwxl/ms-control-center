var obj={
	modify:function(optType){
		var params;
		var type="PEND_APPLY";
		if($("#isExist").val()=='false'){
			type="SPECIAL";
			
			var sourceValue='';
			if(GetSelectValue("#sourceType")=='01'){
				sourceValue=GetSelectValue("#sourceValue");
			}else if(GetSelectValue("#sourceType")=='02'){
				sourceValue=$("#sourceTypeValue").val();
			}
			var userExtendInfo={
				userName:$("#userName").val(),	
				certNo:$("#certNo").val(),
				education:GetSelectValue("#education"),
				nation:GetSelectValue("#nation"),
				birthplace:GetSelectValue("#birthplace"),
				address:$("#address").val(),
				contacts:$("#contacts").val(),
				contactPhone:$("#contactPhone").val(),
				sourceType:GetSelectValue("#sourceType"),
				sourceTypeSec:GetSelectValue("#sourceTypeSec"),
				sourceValue:sourceValue,
				sourceRemarks:$("#sourceRemarks").val()
			}
			
			params={
				userExtendInfo:userExtendInfo,
				id:$("#id").val(),
				classNumber:GetSelectValue("#classNumber"),
				isHasPf:GetSelectValue("#isHasPf"),
				isStaging:$("input[name='isStaging']:checked").val(),
				firstPay:$("#firstPay").val(),
				isClear:$("#isClear").is(":checked")?"1":"0",
				optType:optType,
				type:type,
				classTime:GetSelectValue("#classTime"),
				isExam:GetSelectValue("#isExam"),
				schoolFee:$("#schoolFee").val(),
				deposit:$("#deposit").val(),
				bookFree:$("#bookFree").val()
			}
		}else{
			params={
				id:$("#id").val(),
				classNumber:GetSelectValue("#classNumber"),
				isHasPf:GetSelectValue("#isHasPf"),
				isStaging:$("input[name='isStaging']:checked").val(),
				firstPay:$("#firstPay").val(),
				isClear:$("#isClear").is(":checked")?"1":"0",
				optType:optType,
				type:type,
				classTime:GetSelectValue("#classTime"),
				isHasPf:GetSelectValue("#isHasPf"),
				isExam:GetSelectValue("#isExam"),
				schoolFee:$("#schoolFee").val(),
				deposit:$("#deposit").val(),
				bookFree:$("#bookFree").val()
			}
		}
		
		//提交问题
		layer.confirm('确认修改订单信息吗？',function(){
	        $.ajax({
	          url :config.ordersModifyUrl,
	          type : "POST",
	          contentType:"application/json",
	          data: JSON.stringify(params),
	          success: function(data){
	            if(data.success){
	            	layer.alert(data.msg, {icon:1});
	            	window.location.href=config.ordersListUrl+"?type=PEND_APPLY";
	            }else{
	              	layer.msg(data.msg);
	            }
	          }
	        });
		});
		
	}
	,
	init:function(){
		$("#passBtn").bind("click",function(){
			obj.modify("opt03");
		});
		$("#unpassBtn").bind("click",function(){
			obj.modify("opt04");
		});
	}
}

$(function(){
	obj.init();
});
var InterValObj;
var count = 60;
var curCount;
var code = "";
var codeLength = 6;

function sendMessage() {
	curCount = count;
	var uid = document.getElementById('tel').value;
	
	if (uid) {
	   	if (!uid.match(/^(((1[3|4|5|7|8][0-9]{1}))+\d{8})$/)) {
			plus.nativeUI.toast('手机号格式不正确');
		} else {
		   	document.getElementById('btnSendCode').setAttribute('disabled', "true");
		   	document.getElementById('btnSendCode').value = curCount + "秒后重发";
		   	InterValObj = window.setInterval(setRemainTime, 1000);
		   
		   	mui.ajax(PREVIOUS_REQUEST_DOMAIN + 'ajax.php', {
			   	type: 'POST',
			   	data: {
			   		id: uid,
			   		act: 'regcode'
		   		},
			   	success:function(data) {
			   		if (data == 2) {
						plus.nativeUI.toast('发送太频繁，请稍后');
			   		} else if (data == 3) {
						plus.nativeUI.toast('未知错误，请稍后');
			   		} else if(data == 4) {
						plus.nativeUI.toast('超过当天短信发送限制,请联系客服');
			   		} else if(data == 5) {
						plus.nativeUI.toast('该手机号已存在');
			   		}
			   }
		   });
	   }
	} else {
		plus.nativeUI.toast('请输入手机号');
	}
}

function setRemainTime() {
	if (curCount == 0) {                
		window.clearInterval(InterValObj);
		document.getElementById('btnSendCode').removeAttribute('disabled');
		document.getElementById('btnSendCode').value = "重新发送";
		code = "";
	} else {
		curCount--;
		document.getElementById('btnSendCode').value = curCount + "秒后重发";
	}
}

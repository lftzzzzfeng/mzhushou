$(function () {
    "use strict";
    $('#content').artEditor({
        imgTar: '#imageUpload',
        limitSize: 5,   // 兆
        showServer: true,
        uploadUrl: PREVIOUS_REQUEST_DOMAIN + 'ajax.php',
        data: {act:'uploadImg'},
        uploadField: 'image',
        placeholader: '<p>请输入文章正文内容</p>',
        validHtml: ["<br/>"],
        formInputId: 'target',
        uploadSuccess: function (res) {
            var result = JSON.parse(res)
            if (result['code'] == '100') {
//          	console.log(result['data']['url'].replace(/./, 'http://192.168.199.192/zhushou/'));
//              return result['data']['url'];
                return result['data']['url'].replace(/./, 'http://192.168.0.104/zhushou/');
            } else {
                switch (result['code']) {
                    case '101': {
                        alert('请上传小于1MB的图片')
                    }
                }
            }
            return false;
        },
        uploadError: function (status, error) {
            //这里做上传失败的操作
            //也就是http返回码非200的时候
            alert('网络异常' + status)
        }
    });
});

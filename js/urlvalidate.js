function urlValidate(url) {
    var requestUrl = '';

    if (url.match(/^http:\/\/mp.weixin.qq.com\/[\w\W]*$/)) {
        requestUrl = 'wx_upload.php';
    } else if (url.match(/^http:\/\/www.jiemian.com\/article\/[0-9]+.html$/)) {
        requestUrl = 'jiemian.php';
    } else if (url.match(/^https:\/\/www.huxiu.com\/article\/[A-Za-z0-9_.\/]+.html$/)) {
        requestUrl = 'huxiu.php';
    } else if (url.match(/^http:\/\/www.yidianzixun.com\/article\/[A-Za-z0-9_.\/]+$/)) {
        requestUrl = 'yidianzixun.php';
    } else if (url.match(/^https:\/\/www.pencilnews.cn\/p\/[0-9]+.html$/)) {
        requestUrl = 'pencilnews.php';
    } else if (url.match(/^http:\/\/www.toutiao.com\/a[0-9]+(\/)*$/)) {
        requestUrl = 'toutiao.php';
    }

    return requestUrl;
}

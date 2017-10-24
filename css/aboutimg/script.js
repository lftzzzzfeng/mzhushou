//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}
//android
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);  
//  window.location.href ="iPhone.html";
//} else if (/(Android)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent); 
//  window.location.href ="Android.html";
//} else {
//  window.location.href ="pc.html";
//};

$(function(){
	 var wechat_developer_reload = function(){
		$('body').append('<input type="button" value="refresh" onclick="window.location.reload();"/>');	 
	} 
	//wechat_developer_reload();
	
	if (window.console) {
		console.info(">>Join us? Email：developer@qietu.com");
	}		
	
	//页面不足一屏，铺满一屏
	$('.layout').css('min-height',$(window).height());
	
	$('.layout').fullpage({
		anchors: ['page1', 'page2', 'page3'],
		'navigation': true,
		'navigationPosition': 'right',
		afterLoad: function(anchorLink, index){
			//$('.section1').addClass('loaded');
		},
		onLeave: function(index, direction){
			
		}
	});
	
	$('#fx').click(function(){
		$('#mask').addClass('show');
	})
	$('#mask').click(function(){
		$(this).removeClass('show');
	}) 
	
})



 function Orientation(selector) {
}

Orientation.prototype.init = function(){
    window.addEventListener('deviceorientation', this.orientationListener, false);
    window.addEventListener('MozOrientation', this.orientationListener, false);
    window.addEventListener('devicemotion', this.orientationListener, false);
}

Orientation.prototype.orientationListener = function(evt) {
  // For FF3.6+
  if (!evt.gamma && !evt.beta) {
  	// angle=radian*180.0/PI 在firefox中x和y是弧度值,
    evt.gamma = (evt.x * (180 / Math.PI)); //转换成角度值,
    evt.beta = (evt.y * (180 / Math.PI)); //转换成角度值
    evt.alpha = (evt.z * (180 / Math.PI)); //转换成角度值
  }
 /* beta:  -180..180 (rotation around x axis) */
 	/* gamma:  -90..90  (rotation around y axis) */
 	/* alpha:    0..360 (rotation around z axis) (-180..180) */
  
  var gamma = evt.gamma
  var beta = evt.beta
  var alpha = evt.alpha
  
  if(evt.accelerationIncludingGravity){
   // window.removeEventListener('deviceorientation', this.orientationListener, false);
	gamma = event.accelerationIncludingGravity.x*10
	beta = -event.accelerationIncludingGravity.y*10
	alpha = event.accelerationIncludingGravity.z*10
  }

  
  
  if (this._lastGamma != gamma || this._lastBeta != beta) {
  	 //document.querySelector("#test").innerHTML = "x: "+ beta.toFixed(2) + " y: " + gamma.toFixed(2) + " z: " + (alpha != null?alpha.toFixed(2):0)
  	
    
//    var style = document.querySelector("#t1").style;
//    style.left = gamma/90 * 200 + 200 +"px";
//    style.top = beta/90 * 100 + 100 +"px";
      
      var t1 = $('.t1')[0].style;
      t1.left = gamma/180 * 100 + 22 +"px";
      t1.top = beta/180 * 100 + 80 +"px";
      
      var t2 = $('.t2')[0].style;
      t2.left = gamma/180 * 100 + 660 +"px";
      t2.top = beta/180 * 100 + 95 +"px";
      
      var t3 = $('.t3')[0].style;
      t3.left = gamma/180 * 100 - 20 +"px";
      t3.top = beta/180 * 100 + 870 +"px";
      
      var t4 = $('.t4')[0].style;
      t4.left = gamma/180 * 100 + 700 +"px";
      t4.top = beta/180 * 100 + 820 +"px";
    
    
    this._lastGamma = gamma;
    this._lastBeta = beta;
  }
};
(new Orientation()).init();

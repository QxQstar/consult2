// function addEventLoad(func){
// 	var oldEvent = window.onload;
// 	if(typeof oldEvent != 'function'){
// 		window.onload = func;
// 	}else{
// 		window.onload = function(){
// 			oldEvent();
// 			func();
// 		};
// 	}
// }
// function switchOver(){
// 	var ID = setInterval(function(){
// 		var carousel = document.getElementById('carousel');
// 		var img = carousel.getAttribute('style').split(';');
// 		alert(2);
// 	},2000);
// }

// for(var i = 1;i<=3;i++){
//  	carousel.style.backgroundImage = 'url(../img/hot_'+i+'.jpg)';
//  	if(i === 3){
//  		i = 0;
//  	}
// 	}

// addEventLoad(switchOver);
 var carousel = document.getElementById('carousel');
 // var productImg = document.getElementById('productImg');
 // productImg.style.backgroundImage = 'url(../img/product_1.jpg)';
 carousel.style.backgroundImage = 'url(../img/hot_1.jpg)';
 var ID = setInterval(switchOver,3000);
 function switchOver(){
 	var str = carousel.style.backgroundImage.split('_');
 	// var product = productImg.style.backgroundImage.split('_');
 	// var proID = parseInt(product[1].split('.')[0]);
 	var num = parseInt(str[1].split('.')[0]);
 	if(num === 3){
 		num = 0;
 	}
 	// if(proID === 3){
 	// 	proID = 0 ;
 	// }
 	carousel.style.backgroundImage = 'url(../img/hot_'+(++num)+'.jpg)';
 	// productImg.style.backgroundImage = 'url(../img/product_'+(++proID)+'.jpg)';
 }
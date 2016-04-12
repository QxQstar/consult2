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
 carousel.style.backgroundImage = 'url(../img/hot_1.jpg)';
 var ID = setInterval(switchOver,3000);
 function switchOver(){
 	var str = carousel.style.backgroundImage.split('_');
 	var num = parseInt(str[1].split('.')[0]);
 	if(num === 3){
 		num = 0;
 	}
 	carousel.style.backgroundImage = 'url(../img/hot_'+(++num)+'.jpg)';
 }
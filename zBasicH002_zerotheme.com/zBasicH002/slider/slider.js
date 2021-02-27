// JavaScript Document
$(document).ready( function() {  // Sayfamız hazır olduğu zaman aşağıdaki kodların uygulanacağını söylüyoruz.
$(".slider #buton li:first").addClass("aktif");
var slider=$('.slider'),
list=slider.find('ul.slider_liste'),
length=list.find('li').length;
width=slider.outerWidth(),
totalWidth=width*length,
index=0;
next=$('a.sonraki',slider),
prev=$('a.onceki',slider);
var degisim=0;
list.find('li').width(width).end().width(totalWidth);


/*responsive*/
$(window).resize(function(){
	width=slider.outerWidth();
totalWidth=width*length;
	list.find('li').width(width).end().width(totalWidth).css('margin-left', '-' + (degisim*width) + 'px');
	});
	
	
	



/*sonraki butonu*//*
next.on('click',function(){
						 $(".slider ul#buton li").removeClass("aktif");

						if(index < length-1) index++;
						list.stop().animate({
									 marginLeft:'-' + (index*width)},500 );
						$(".slider ul#buton li:eq("+index+")").addClass("aktif");	
						return false;
						});			 
*/

/*önceki butonu*//*
prev.on('click',function(){
						 
						if(index > 0) index--;
						list.stop().animate({
									 marginLeft:'-' + (index*width)},500 );
						return false;
						});									 
		*/						
									
/*sayfalama*/									
 $('.slider ul#buton li').click(function(){  // #slider 'ın sol alt köşesinde belirlediğimiz 10 adet linke tıklanınca yapılacak işlem için fonksiyon oluşturuyoruz.
var index = $(this).index();  // Linke tıklanınca kaçıncı link olduğunu index() ile alıyoruz. İlk link 1 değil 0 değerini vermektedir.
$(".slider ul#buton li").removeClass("aktif");
$(this).addClass("aktif");
list.stop().animate({ marginLeft:'-' + (index*width)},500 );
degisim=$(this).index();
return false;  // Fonksiyonunun daha işlem yapmasına gerek kalmadığını belirtiyoruz.
 });	



/*Otomatik Dönme*/
var sure=5000;

$.slider=function(){
	
if(degisim<length-1){
	
degisim++;
$(".slider ul#buton li").removeClass("aktif");
$(".slider ul#buton li:eq("+degisim+")").addClass("aktif");	
list.stop().animate({ marginLeft:'-' + (degisim*width)},500 );
				
						return false;

  }else{
	  $(".slider ul#buton li").removeClass("aktif");
$(".slider ul#buton li:first").addClass("aktif");
degisim=0;
list.stop().animate({ marginLeft:"0"},500 );

   }
}

var don=setInterval("$.slider()",sure);

$(".slider_liste").hover(function(){
clearInterval(don);
},function(){
don=setInterval("$.slider()",sure);
})

});

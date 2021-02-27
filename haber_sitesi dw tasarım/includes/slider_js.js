$(function(){

$(".sayfa a").click(function(){
var indis =$(this).index();

liDeger=indis;
yeniWidth=liWidth*liDeger;
$(".slider ul").animate({marginLeft:"-"+yeniWidth+"px"},500);
})


var sure=5000;//slider dönme süresi

var toplamLi = $(".slider ul li").length;
var liWidth=400;
var toplamWidth = liWidth*toplamLi;
var liDeger=0;
$(".slider ul").css("width",toplamWidth + "px");

$("a#sonraki").click(function(){
if(liDeger<toplamLi-1){
liDeger++;
yeniWidth=liWidth*liDeger;
$(".slider ul").animate({marginLeft:"-"+yeniWidth+"px"},500);
}else{
liDeger=0;
$(".slider ul").animate({marginLeft:"0"},500);
}
return false;
})


$("a#onceki").click(function(){
if(liDeger>0){
liDeger--;
yeniWidth=liWidth*liDeger;
$(".slider ul").animate({marginLeft:"-"+yeniWidth+"px"},500);
}else{
liDeger=toplamLi;
$(".slider ul").animate({marginLeft:"toplamWidth"},500);
}
return false;
})


/*Otomatik Dönme*/
$.Slider=function(){
if(liDeger<toplamLi-1){
liDeger++;
yeniWidth=liWidth*liDeger;
$(".slider ul").animate({marginLeft:"-"+yeniWidth+"px"},500);
  }else{
liDeger=0;
$(".slider ul").animate({marginLeft:"0"},500);
   }
}

var don=setInterval("$.Slider()",sure);

$("#slider").hover(function(){
clearInterval(don);
},function(){
don=setInterval("$.Slider()",sure);
})








});
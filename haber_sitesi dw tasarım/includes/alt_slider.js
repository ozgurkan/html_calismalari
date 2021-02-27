$(function(){
var sure=10000;//slider dönme süresi

var toplamLi = $(".alt_slider ul li").length;
var liWidth=170;
var toplamWidth = liWidth*toplamLi;
var liDeger=0;
$(".alt_slider ul").css("width",toplamWidth + "px");

$("#ileri").click(function(){
if(liDeger<toplamLi-5){
liDeger++;
yeniWidth=liWidth*liDeger;

$(".alt_slider ul ").animate({marginLeft:"-"+yeniWidth+"px"},500);
}else{
liDeger=0;
$(".alt_slider ul ").animate({marginLeft:"0"},500);
}
return false;
})



$("#geri").click(function(){
if(liDeger>0){
liDeger--;
yeniWidth=liWidth*liDeger;
$(".alt_slider ul").animate({marginLeft:"-"+yeniWidth+"px"},500);
}else{
liDeger=toplamLi-4;
$(".alt_slider ul").animate({marginLeft:"toplamWidth"},500);
}
return false;
})

/*Otomatik Dönme*/
$.alt_slider=function(){
if(liDeger<toplamLi-5){
liDeger++;
yeniWidth=liWidth*liDeger;
$(".alt_slider ul").animate({marginLeft:"-"+yeniWidth+"px"},500);
  }else{
liDeger=0;
$(".alt_slider ul").animate({marginLeft:"0"},500);
   }
}

var don=setInterval("$.alt_slider()",sure);

$("#alt_slider").hover(function(){
clearInterval(don);
},function(){
don=setInterval("$.alt_slider()",sure);
})



});
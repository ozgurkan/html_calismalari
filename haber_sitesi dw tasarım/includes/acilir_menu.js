// JavaScript Document
$(function(){
 $("ul#menu li:first").addClass ("aktif");
 $("ul#menu li.acilir").hover (
function(){
   $(this).find("ul").slideDown();
   $("ul#menu li:first").removeClass ("aktif");
 },
 function(){
  $(this).find("ul").stop().slideUp();
  $("ul#menu li:first").addClass ("aktif");
});
})



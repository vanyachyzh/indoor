let bodyWidth = $(window).width();
let contWidth = $(".wrap").width();
let bodyHeight = $(window).height();
let contHeight = $(".wrap").height();
let width = bodyWidth/2 - contWidth/2;
let height = bodyHeight/2 - contHeight/2;
if(width<0){width = 0;}
if(height<0){height = 0;}
$(".wrap").css("left",width);
$(".wrap").css("top",height);
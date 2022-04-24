var box=document.querySelector(".box")
var boxes=document.querySelector(".boxes")
var icon1=document.querySelector(".icon1")
box.onclick=function(){
    boxes.style.display="block"
}
icon1.onclick=function(){
    boxes.style.display="none"
}

$(".a").click(function(){
    $(".genel").stop().slideUp()
    $(this).next().stop().slideToggle()
})

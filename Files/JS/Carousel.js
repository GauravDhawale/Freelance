var left=document.getElementById("leftslide");
var right=document.getElementById("rightslide");
var Scrolldiv=document.getElementById("ScrollC");
left.addEventListener("click",function(){
    Scrolldiv.scrollLeft-=document.getElementsByClassName("RT")[0].offsetWidth;
});
right.addEventListener("click",function(){
    Scrolldiv.scrollLeft+=document.getElementsByClassName("RT")[0].offsetWidth;
});
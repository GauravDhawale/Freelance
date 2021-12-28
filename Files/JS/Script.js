var t1=document.getElementsByClassName("T1");
var t2=document.getElementsByClassName("T2");
var t3=document.getElementsByClassName("T3");
var t4=document.getElementsByClassName("T4");
var t5=document.getElementsByClassName("T5");
var after=document.getElementsByClassName("aftereffect");
var aftert1=document.getElementsByClassName("T1After");
var aftert2=document.getElementsByClassName("T2After");
var aftert3=document.getElementsByClassName("T3After");
var aftert4=document.getElementsByClassName("T4After");
var aftert5=document.getElementsByClassName("T5After");
var burger=document.getElementById("burger");
var close1=document.getElementById("close");
var NavList=document.getElementById("NavList");

t1[0].addEventListener("mouseover",function(){
    after[0].style.opacity="1";
    aftert1[0].style.opacity="1";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="0";
    t2[0].style.opacity="0";
    t3[0].style.opacity="0";
    t4[0].style.opacity="0";
    t5[0].style.opacity="0";
})
t1[0].addEventListener("mouseleave",function(){
    after[0].style.opacity="0";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="1";
    t2[0].style.opacity="1";
    t3[0].style.opacity="1";
    t4[0].style.opacity="1";
    t5[0].style.opacity="1";
})
t2[0].addEventListener("mouseover",function(){
    after[0].style.opacity="1";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="1";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="0";
    t2[0].style.opacity="0";
    t3[0].style.opacity="0";
    t4[0].style.opacity="0";
    t5[0].style.opacity="0";
})
t2[0].addEventListener("mouseleave",function(){
    after[0].style.opacity="0";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="1";
    t2[0].style.opacity="1";
    t3[0].style.opacity="1";
    t4[0].style.opacity="1";
    t5[0].style.opacity="1";
})
t3[0].addEventListener("mouseover",function(){
    after[0].style.opacity="1";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="1";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="0";
    t2[0].style.opacity="0";
    t3[0].style.opacity="0";
    t4[0].style.opacity="0";
    t5[0].style.opacity="0";
})
t3[0].addEventListener("mouseleave",function(){
    after[0].style.opacity="0";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="1";
    t2[0].style.opacity="1";
    t3[0].style.opacity="1";
    t4[0].style.opacity="1";
    t5[0].style.opacity="1";
})
t4[0].addEventListener("mouseover",function(){
    after[0].style.opacity="1";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="1";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="0";
    t2[0].style.opacity="0";
    t3[0].style.opacity="0";
    t4[0].style.opacity="0";
    t5[0].style.opacity="0";
})
t4[0].addEventListener("mouseleave",function(){
    after[0].style.opacity="0";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="1";
    t2[0].style.opacity="1";
    t3[0].style.opacity="1";
    t4[0].style.opacity="1";
    t5[0].style.opacity="1";
})
t5[0].addEventListener("mouseover",function(){
    after[0].style.opacity="1";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="1";
    t1[0].style.opacity="0";
    t2[0].style.opacity="0";
    t3[0].style.opacity="0";
    t4[0].style.opacity="0";
    t5[0].style.opacity="0";
})
t5[0].addEventListener("mouseleave",function(){
    after[0].style.opacity="0";
    aftert1[0].style.opacity="0";
    aftert2[0].style.opacity="0";
    aftert3[0].style.opacity="0";
    aftert4[0].style.opacity="0";
    aftert5[0].style.opacity="0";
    t1[0].style.opacity="1";
    t2[0].style.opacity="1";
    t3[0].style.opacity="1";
    t4[0].style.opacity="1";
    t5[0].style.opacity="1";
})

burger.addEventListener("click",function(){
    NavList.style.transform="translate(0%,15%)";
    NavList.style.transition="0.5s ease-in-out";
    close1.style.display="flex";
    burger.style.display="none"
    // NavList.classList.toggle('activenav');
})
close1.addEventListener("click",function(){
    NavList.style.transform="translate(0%,-100%)";
    NavList.style.transition="0.5s ease-in-out";
    close1.style.display="none";
    burger.style.display="flex"
    // NavList.classList.toggle('activenav');
})
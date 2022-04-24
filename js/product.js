var box2=document.querySelector(".box2")
var box3=document.querySelector(".box2 .box3")
var img1=document.querySelector(".box3 .img1")
var img2=document.querySelector(".box3 .img2")
var text=document.querySelector(".box3 .text")
var img3=document.querySelector(".text .img3")
var img4=document.querySelector(".text .img4")
img4.onclick=function() {
    img4.style.border="1px solid black"
    img3.style.border="1px solid rgb(196, 195, 195)"
    img2.style.display="block"
    img1.style.display="none"
    // img2.style.transform="translateX(-400px)"
}
img3.onclick=function() {
    img3.style.border="1px solid black"
    img4.style.border="1px solid rgb(196, 195, 195)"
    // img1.style.transform="translateX(400px)"
    img2.style.display="none"
    img1.style.display="block"
}


var score = 0
function up(){
  if(score < 30 ){
    score ++;
  }
  document.getElementById("result").innerHTML = score;
}

function down(){
  if(score > 0 ){
    score --;
  }
  document.getElementById("result").innerHTML = score;
}



var showAns = document.getElementById("showAns");
var number = 0
function add(value){
    var sum = number + value;
    if (sum > -1 && sum < 31 ) {
        number = sum;
    }
    showAns.innerHTML = number;
}


var span = document.getElementById("number")
var number = 0
function change(dir){
  span.innerHTML = dir ? ++number > 30 ? 0 & ( number = 0 ) : number : --number < 0 ? 30 && ( number = 30 ) : number 
}

var section2=document.querySelector(".section2")
var box=document.querySelector(".section2 .box")
var text=document.querySelector(".section2 .box .text")
var btn1=document.querySelector(".box .text .btn1")
var btn2=document.querySelector(".box .text .btn2")
var parag1=document.querySelector(".section2 .box .parag1")
var box1=document.querySelector(".section2 .box .box1")
var genel=document.querySelector(".section2 .box .box1 .genel")
var box3=document.querySelector(".section2 .box .box1 .genel .box3")
var box4=document.querySelector(".section2 .box .box1 .genel .box4")
var box5=document.querySelector(".section2 .box .box1 .genel .box5")
var box6=document.querySelector(".section2 .box .box1 .genel .box6")
var box7=document.querySelector(".section2 .box .box1 .genel .box7")



btn1.onclick=function() {
  btn1.style.color="black"
  btn2.style.color="#E7D3D6"
  box1.style.display="none"
  parag1.style.display="block"
}

btn2.onclick=function() {
  btn2.style.color="black"
  btn1.style.color="#E7D3D6"
  box1.style.display="block"
  parag1.style.display="none"
}

box3.onclick=function() {
  box3.style.color="#FFCD00"
  box4.style.color="rgb(190, 187, 187)"
  box5.style.color="rgb(190, 187, 187)"
  box6.style.color="rgb(190, 187, 187)"
  box7.style.color="rgb(190, 187, 187)"
}


box4.onclick=function() {
  box4.style.color="#FFCD00"
  box3.style.color="rgb(190, 187, 187)"
  box5.style.color="rgb(190, 187, 187)"
  box6.style.color="rgb(190, 187, 187)"
  box7.style.color="rgb(190, 187, 187)"
}


box5.onclick=function() {
  box5.style.color="#FFCD00"
  box4.style.color="rgb(190, 187, 187)"
  box3.style.color="rgb(190, 187, 187)"
  box6.style.color="rgb(190, 187, 187)"
  box7.style.color="rgb(190, 187, 187)"
}

box6.onclick=function() {
  box6.style.color="#FFCD00"
  box4.style.color="rgb(190, 187, 187)"
  box5.style.color="rgb(190, 187, 187)"
  box3.style.color="rgb(190, 187, 187)"
  box7.style.color="rgb(190, 187, 187)"
}

box7.onclick=function() {
  box7.style.color="#FFCD00"
  box4.style.color="rgb(190, 187, 187)"
  box5.style.color="rgb(190, 187, 187)"
  box6.style.color="rgb(190, 187, 187)"
  box3.style.color="rgb(190, 187, 187)"
}
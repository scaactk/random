var data="Is gay,Not a gay,Don't know";
var arr=data.split(",");
var time;

function start(){
  clearInterval(time);
  document.getElementById("showResult").value="";
  time = setInterval('change()',50);
}

function change(){
  document.getElementById("ran").innerText = arr[ran()];
}

function ran(){
  return parseInt(Math.random()*3);
}

function stop(){
  clearInterval(time);
  document.getElementById("ran").innerText = "Is gay";
  document.getElementById("showResult").value = document.getElementById("ran").innerText;
}
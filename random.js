var alldata = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,,s,t,u,v,w,x,y,z";
var alldataarr = alldata.split(",");
var num = alldataarr.length ;
var timer;

function start(){
  clearInterval(timer);
  timer = setInterval('change()',100);
}

function change(){
  document.getElementById("oknum").innerHTML = alldataarr[GetRnd(num)];
}

function GetRnd(num){
  return parseInt(Math.random()*num);//26段一个单位的长度
}
function ok(){
  clearInterval(timer);
  document.getElementById("showresult").value = document.getElementById("oknum").innerText;
}
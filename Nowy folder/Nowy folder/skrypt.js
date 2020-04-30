function sl()
{
n++; if(n>6) n=1;
var p = "<img src=\"plik_"+n+".jpg\">";
document.getElementById("content").innerHTML=p
setTimeout("sl()",0.0001)
}
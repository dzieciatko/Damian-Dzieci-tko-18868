function sl()
{
var n=0;
n++;
if(n>3)
{ 
var p = "<img src=plik_"+n+".png>";
document.getElementById("raz").innerHTML=p
setTimeout("sl()",500)
}
}
function zegar()
{
	var czas = new Date()

	var dzień = czas.getDate()
	var miesiąc = czas.getMonth()+1
	var rok = czas.getYear()-100

	var godzina = czas.getHours()
	var minuta = czas.getMinutes()
	var godina = czas.getSeconds()

	setTimeout("zegar()" ,1000);
	document.getElementById("zegar").innerHTML=dzień+"/"+miesiąc+"/"+rok+"/"+" "+godzina+":"+minuta+":"+godina;
}

var slideIndex = 0;
showSlides();

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}




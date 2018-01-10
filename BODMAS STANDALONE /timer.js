var timeleft = 60;
var downloadTimer = setInterval(function(){
timeleft--;
var ele=document.getElementById("countdowntimer");
if(ele==null)
{
	clearInterval(downloadTimer);

}

else{

ele.textContent = timeleft;
if(timeleft == 0)
    {clearInterval(downloadTimer);
    alert("Times Up !!! \nLets see where you stand on LeaderBoard !!");
    window.location="score.html"
}
}
},1000);

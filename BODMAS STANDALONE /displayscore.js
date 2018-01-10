function closeBrowser(){
  console.log('closing window');
   window.open('','_parent','');

    if (confirm("Close Window?")) {

        window.location="dont_edit_this_code.html" ;}
}



document.getElementById("result").innerHTML = localStorage.getItem("yourscore");
var userscore=localStorage.getItem("yourscore");
var scorelist=[0,0,0,0,0];

document.getElementById("score1").innerHTML = scorelist[0]
document.getElementById("score2").innerHTML = scorelist[1]
document.getElementById("score3").innerHTML = scorelist[2]
document.getElementById("score4").innerHTML = scorelist[3]
document.getElementById("score5").innerHTML = scorelist[4]

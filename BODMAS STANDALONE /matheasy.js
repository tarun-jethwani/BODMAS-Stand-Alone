correct=0;
wrong=0;
// ***************************************************************************** //
function bodmas(){

//****************************************************************************//
var TreeNode = function(left, right, operator) {
    this.left = left;
    this.right = right;
    this.operator = operator;

    this.toString = function() {
        return '(' + left + ' ' + operator + ' ' + right + ')';
    }
}


function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var x = ['/','*','-','+'];

function buildTree(numNodes) {
    if (numNodes === 1)
        return randomNumberRange(1, 9);

    var numLeft = Math.floor(numNodes / 2);
    var leftSubTree = buildTree(numLeft);
    var numRight = Math.ceil(numNodes / 2);
    var rightSubTree = buildTree(numRight);

    var m = randomNumberRange(0, x.length);
    var str = x[m];
    return new TreeNode(leftSubTree, rightSubTree, str);
}

var input = 'level 3';
input = input.split(' ');
var n = Number(input[1]);


var eqn=buildTree(n).toString();

cans=eval(eqn);
document.getElementById("eqn").innerHTML = eqn;

a=Math.floor(cans);




// **************************************************************************** //



}

// *************************************************************************** //

// **************** Function ans() ************************ //
function ans() {
var x = document.getElementById("myNumber").value;
document.getElementById("quizform").reset();


if (x==a) {
correct++;
msg = " Absolutely Correct";
}
else {
wrong++;
msg = "Oops! Wrong Answer \n\n";
   }
score = correct*10;

document.getElementById("score").innerHTML = score;
document.getElementById("message").innerHTML = msg;
localStorage.setItem("yourscore", score);

}


// **************** Function ans() *********************** //
localStorage.setItem("yourscore", score);

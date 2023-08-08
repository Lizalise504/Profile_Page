var nameChange = document.querySelector(".about h1");
var move = document.querySelector("#move1");
var moveAgain = document.querySelector("#move2");
var request = document.querySelector(".header p")
var connection = document.querySelector(".header2 p")
var count = 2;
var increase = 500;

// changing the Current name
function update(){
    nameChange.innerText = "Jennifer Lopez";
}

function accept(){
    move.remove();
    count --;
    request.innerText = count;
    increase ++;
    connection.innerText = increase + "+";
    

}

function reject(){
    move.remove();
    count --;
    request.innerText = count;
}

// second buttons
function accept2(){
    moveAgain.remove();
    count --;
    request.innerText = count;
    increase ++;
    connection.innerText = increase + "+";
}

function reject2(){
    moveAgain.remove();
    count --;
    request.innerText = count;
}
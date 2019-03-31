var turns = [];
var buttons = []
buttons = document.getElementsByClassName('button');
var playerTurn = false; 
var whatNumber = 0;


for(let i =0; i < buttons.length; i++){
    buttons[i].addEventListener('click', handleClick(buttons[i].id));
    buttons[i].addEventListener("mousedown", handleMouseDown(buttons[i].id))
    buttons[i].addEventListener("mouseup", handleMouseDown(buttons[i].id))

}


function handleClick(id){
    return function(){game(id)}
}

function handleMouseDown(id){
   
    return function(){
        var stuff = document.getElementById(id);
        stuff.classList.toggle('click-border')
    }
}
function handleMouseUp(id){
    return function(){
        var stuff = document.getElementById(id);
        stuff.classList.toggle('click-border')
    }
}

function game (id){


    if(playerTurn && id === turns[whatNumber].id){
        whatNumber += 1;
        if(whatNumber > turns.length -1){
            setTimeout(showAllTurns,1000)
        }
    }else{
        alert('loser');
        reset();
    }
}

function reset(){
    turns = [];
    whatNumber = 0;
    playerTurn = false;
    setTimeout(()=>{
        showAllTurns();
    }, 3000)
}

function showAllTurns (){
    playerTurn = false;
    whatNumber = 0;
    randomColorGenerator();
    flashColor(0)
}

function flashColor (num) {
    turns[num].classList.toggle('border');
    setTimeout(()=>{
        turns[num].classList.toggle('border');
        if(num < turns.length -1){
            setTimeout(()=>{
                flashColor(num +1)
            },500)
        }else{
            playerTurn = true;
        }
    }, 1000)
}

function randomColorGenerator(){
    var randomNum = Math.floor(Math.random() * 4)
    turns.push(buttons[randomNum]);
}

showAllTurns()
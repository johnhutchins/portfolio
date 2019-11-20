let gameBoard = document.getElementById('game-board')
let numberTiles = gameBoard.children

let o = document.getElementById('operators')
let operators = o.children

let total = ''

for(let i=0;i<numberTiles.length;i++){
    numberTiles[i].addEventListener('click',setInitialTotal)
}

for(let j=0;j<4;j++){
    operators[j].addEventListener('click',actOnOperator)
}

function setInitialTotal(){
    total += this.textContent    
    console.log(total)
}

function actOnOperator(){
    //find function named 
    runFunction(this.id, ...total)
}

function runFunction(name, arguments){
    var fn = window[name];
    if(typeof fn !== 'function'){
        return;
    }
    fn.apply(window, [...arguments]);
}

function add(...args){
    console.log("add")
    let base = 0
    args.forEach((num)=>{
        return base += num
    })
    return base
}

function subtract(...args){
    console.log("subtract")
    let base = 0
    args.forEach((num)=>{
        return base -= num
    })
    return base
}

function multiply(...args){
    console.log("multiply")
    let base = 1
    args.forEach((num)=>{
        base *= num
    })
    return base
}

function divide(...args){
    console.log("divide")
    let base = args[0]
    args.forEach((num)=>{
        
    })
}
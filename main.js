let gameBoard = document.getElementById('game-board')
let numberTiles = gameBoard.children

let o = document.getElementById('operators')
let operators = o.children

let totalArr = []
let total = ''

for(let i=0;i<numberTiles.length;i++){
    numberTiles[i].addEventListener('click',concatNums)
}

for(let j=0;j<3;j++){
    operators[j].addEventListener('click',actOnOperator)
}

function concatNums(){
    total += this.textContent
    console.log(parseInt(total))
}

function concatAgain(){
    //
}

function actOnOperator(){
    runFunction(this.id, total)
}

function runFunction(name, arguments){
    totalArr.push(parseInt(total))
    total = 0
    var fn = window[name];
    if(typeof fn !== 'function'){
        return;
    }
    fn.apply(window, [...arguments]);
}

async function add(){
    console.log(total + " add")
    console.log("total array = " + totalArr)

    innerAdd(totalArr)
}

async function subtract(){
    console.log(total + " subtract")
    console.log("total array = " + totalArr)
}

async function multiply(){
    console.log(total + " multiply")
    console.log("total array = " + totalArr)
}

async function divide(){
    console.log(total + " divide")
    console.log("total array = " + totalArr)
}

let equalElem = document.getElementById('equals')
equalElem.addEventListener('click',equals)

function equals(){
    return total
}

function innerAdd(...args){
    let base = 0
    args.forEach((num)=>{
        return base += num
    })
    return base
}
"use strict";

function shuffleIndexes(){
    let arr=[0,1,2,3,4];
    return arr.sort(()=>Math.random()-0.5);
}

function shuffleLis(){
let lis = document.querySelectorAll('.randomListItem');
let indexes=shuffleIndexes();
document.querySelector('.randomList').innerHTML='';
for(let i=0;i<5;i++){
    document.querySelector('.randomList').append(lis[indexes[i]])
}
}

setInterval(shuffleLis,5000);
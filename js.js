"use strict";

//task 1 old
// function shuffleIndexes(){
//     let arr=[0,1,2,3,4];
//     return arr.sort(()=>Math.random()-0.5);
// }
// function shuffleLis(){
// let lis = document.querySelectorAll('.randomListItem');
// let indexes=shuffleIndexes();
// document.querySelector('.randomList').innerHTML='';
// for(let i=0;i<5;i++){
//     document.querySelector('.randomList').append(lis[indexes[i]])
// }
// }
// setInterval(shuffleLis,5000);


//task 1 new

function getInnerTexts(elements){
    const texts=[];
    elements.forEach((elem)=>{
        texts.push(elem.innerText)
    });
    return texts;
}

function rewriteInnerTexts(elements,newTexts){
    elements.forEach((elem,index)=>{
    elem.innerText=newTexts[index]
});
}

function shuffleLis(){
    let liElements=document.querySelectorAll('.randomListItem'),
        liTexts=getInnerTexts(liElements);

    setInterval(()=>{
    liTexts.sort(()=>Math.random()-0.5);
    rewriteInnerTexts(liElements,liTexts)
    },5000)
}

//task 2
function getBrowserData(){
    const {navigator,screen}=window;
    return {width:screen.width,
            height:screen.height,
            browser:navigator.userAgent,
            platform:navigator.oscpu
            }
}

function insertBrowserInfo(browserData){
    const paragraphs=document.querySelectorAll("#browserInfo>p"),
          paragraphTexts=getInnerTexts(paragraphs);

    Object.values(browserData).forEach((elem,index)=>{
        paragraphTexts[index]=paragraphTexts[index].replace('unknown',elem)
    })

    rewriteInnerTexts(paragraphs,paragraphTexts);


    //timeout for the next task, so it executes only after this is done
    setTimeout(thirdTask,5000)

}

const secondTask = ()=>{
    const browserData=getBrowserData();
    setTimeout(()=>{insertBrowserInfo(browserData)},4600)
}

//task 3
function thirdTask(){
    const header=document.querySelector('h3');
    header.outerHTML="<h1>NEW LIST HEADER</h1>";
}

//task 4
function fourthTask(){
    const nav=document.querySelector('nav');
    const curDate=new Date();
    const dateArr=curDate.toString().split(" ");
    dateArr.length=4;
    nav.innerText=dateArr.join(" ");
    nav.setAttribute("style","color:grey")
}


function main(){
shuffleLis();
secondTask(); //also third
fourthTask();
}

main();
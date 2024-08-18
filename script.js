'use strict'
let secretnumber=Math.trunc(Math.random()*20+1)
let score=20;
let highscore=0;

const displaymessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess)
    if(!guess){
        //document.querySelector('.message').textContent='⛔ No Number!';
        displaymessage('⛔ No Number!');
    }
    
    else if(guess==secretnumber){
        //document.querySelector('.message').textContent='🎉 Correct Number!';
        displaymessage('🎉 Correct Number!')
        document.querySelector('.number').textContent=secretnumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30%';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    //When guess is wrong
    else if(guess!=secretnumber){
        if(score>1){
            //document.querySelector('.message').textContent=guess>secretnumber?'📈Too high!':'📉Too low!';
            displaymessage(guess>secretnumber?'📈Too high!':'📉Too low!')
        score--;
        document.querySelector('.score').textContent=score;}
        else{
    
        //document.querySelector('.message').textContent='💥You Lost The Game';
        displaymessage('💥You Lost The Game');
        document.querySelector('.score').textContent=0;}

    }
    
}
);
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    let secretnumber=Math.trunc(Math.random()*20+1);
    //document.querySelector('.message').textContent='Start guessing...';
    displaymessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='20%';
        document.querySelector('.guess').value='';
})

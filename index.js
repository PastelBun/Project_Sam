//loome algse skoori//
var score=0;
//reset nupp, et mängu uuesti mängida ilma lehe uuesti laadimiseta//
let reset=document.querySelector('#reset');
reset.addEventListener('click', function (){
    score=0;
    purchases[0].count=0;
    purchases[0].price=purchases[0].og_price
    purchases[1].count=0;
    purchases[1].price=purchases[1].og_price
    purchases[2].count=0;
    purchases[2].price=purchases[2].og_price
    purchases[3].count=0;
    purchases[3].price=purchases[3].og_price
    purchases[4].count=0;
    purchases[4].price=purchases[4].og_price
    purchases[5].count=0;
    purchases[5].price=purchases[5].og_price
    purchases[6].count=0;
    purchases[6].price=purchases[6].og_price
    purchases[7].count=0;
    purchases[7].price=purchases[7].og_price
    purchases[8].count=0;
    purchases[8].price=purchases[8].og_price
    purchases[9].count=0;
    purchases[9].price=purchases[9].og_price
});
//anname nupule voime skoori tosta//
let btn_count=document.querySelector('#btn_count');
btn_count.addEventListener('click', function (){
    score++;
    console.log(score);});
//array ostude jaoks//
const purchases=[
    {price:1, count:0, og_price:1},
    {price:10, count:0, og_price:10},
    {price:100, count:0, og_price:100},
    {price:1000, count:0, og_price:1000},
    {price:10000, count:0, og_price:10000},
    {price:100000, count:0, og_price:100000},
    {price:1000000, count:0, og_price:1000000},
    {price:10000000, count:0, og_price:10000000},
    {price:100000000, count:0, og_price:100000000},
    {price:1000000000, count:0, og_price:1000000000}
];
//automaatne skoori arvutus iga 20 millisekundit//
setInterval(auto, 20);
//html ja js ühildus//
let purch0=document.querySelector('#purch0');
let purch1=document.querySelector('#purch1');
let purch2=document.querySelector('#purch2');
let purch3=document.querySelector('#purch3');
let purch4=document.querySelector('#purch4');
let purch5=document.querySelector('#purch5');
let purch6=document.querySelector('#purch6');
let purch7=document.querySelector('#purch7');
let purch8=document.querySelector('#purch8');
let purch9=document.querySelector('#purch9');
purch0.addEventListener('click', function (){
    if (score>=purchases[0].price){
        score=score-purchases[0].price;
        purchases[0].count=purchases[0].count +1;
        purchases[0].price=purchases[0].price*1.1;
        console.log(purchases[0].count);
        console.log(purchases[0].price);
        console.log(score);
    }});
purch1.addEventListener('click', function (){
    if (score>=purchases[1].price){
        score=score-purchases[1].price;
        purchases[1].count=purchases[1].count +1;
        purchases[1].price=purchases[1].price*1.1;
        console.log(purchases[1].count);
        console.log(purchases[1].price);
        console.log(score);
    }});
purch2.addEventListener('click', function (){
    if (score>=purchases[2].price){
        score=score-purchases[2].price;
        purchases[2].count=purchases[2].count +1;
        purchases[2].price=purchases[2].price*1.1;
        console.log(purchases[2].count);
        console.log(purchases[2].price);
        console.log(score);
    }});
purch3.addEventListener('click', function (){
    if (score>=purchases[3].price){
        score=score-purchases[3].price;
        purchases[3].count=purchases[3].count +1;
        purchases[3].price=purchases[3].price*1.1;
        console.log(purchases[3].count);
        console.log(purchases[3].price);
        console.log(score);
    }});
purch4.addEventListener('click', function (){
    if (score>=purchases[4].price){
        score=score-purchases[4].price;
        purchases[4].count=purchases[4].count +1;
        purchases[4].price=purchases[4].price*1.1;
        console.log(purchases[4].count);
        console.log(purchases[4].price);
        console.log(score);
    }});
purch5.addEventListener('click', function (){
    if (score>=purchases[5].price){
        score=score-purchases[5].price;
        purchases[5].count=purchases[5].count +1;
        purchases[5].price=purchases[5].price*1.1;
        console.log(purchases[5].count);
        console.log(purchases[5].price);
        console.log(score);
    }});
purch6.addEventListener('click', function (){
    if (score>=purchases[6].price){
        score=score-purchases[0].price;
        purchases[6].count=purchases[6].count +1;
        purchases[6].price=purchases[6].price*1.1;
        console.log(purchases[6].count);
        console.log(purchases[6].price);
        console.log(score);
    }});
purch7.addEventListener('click', function (){
    if (score>=purchases[7].price){
        score=score-purchases[7].price;
        purchases[7].count=purchases[7].count +1;
        purchases[7].price=purchases[7].price*1.1;
        console.log(purchases[7].count);
        console.log(purchases[7].price);
        console.log(score);
    }});
purch8.addEventListener('click', function (){
    if (score>=purchases[8].price){
        score=score-purchases[8].price;
        purchases[8].count=purchases[8].count +1;
        purchases[8].price=purchases[8].price*1.1;
        console.log(purchases[8].count);
        console.log(purchases[8].price);
        console.log(score);
    }});
purch9.addEventListener('click', function (){
    if (score>=purchases[9].price){
        score=score-purchases[9].price;
        purchases[9].count=purchases[9].count +1;
        purchases[9].price=purchases[9].price*1.1;
        console.log(purchases[9].count);
        console.log(purchases[9].price);
        console.log(score);
    }});
function auto() {
    var bonus=
        0.1*purchases[0].count
        +1*purchases[1].count
        +5*purchases[2].count
        +10*purchases[3].count
        +25*purchases[4].count
        +50*purchases[5].count
        +100*purchases[6].count
        +250*purchases[7].count
        +500*purchases[8].count
        +1000*purchases[9].count
    score = score + bonus
}

//naitame mangijale skoori mangu alguses//
setInterval(display,20);
function display(){
    document.getElementById("punktid").innerHTML=score+' energy';
    document.getElementById("price0").innerHTML=purchases[0].price +' :Energy';
    document.getElementById("count0").innerHTML='Bought: '+ purchases[0].count;
    document.getElementById("price1").innerHTML=purchases[1].price +' :Energy';
    document.getElementById("count1").innerHTML='Bought: '+ purchases[1].count;
    document.getElementById("price2").innerHTML=purchases[2].price +' :Energy';
    document.getElementById("count2").innerHTML='Bought: '+ purchases[2].count;
    document.getElementById("price3").innerHTML=purchases[3].price +' :Energy';
    document.getElementById("count3").innerHTML='Bought: '+ purchases[3].count;
    document.getElementById("price4").innerHTML=purchases[4].price +' :Energy';
    document.getElementById("count4").innerHTML='Bought: '+ purchases[4].count;
    document.getElementById("price5").innerHTML=purchases[5].price +' :Energy';
    document.getElementById("count5").innerHTML='Bought: '+ purchases[5].count;
    document.getElementById("price6").innerHTML=purchases[6].price +' :Energy';
    document.getElementById("count6").innerHTML='Bought: '+ purchases[6].count;
    document.getElementById("price7").innerHTML=purchases[7].price +' :Energy';
    document.getElementById("count7").innerHTML='Bought: '+ purchases[7].count;
    document.getElementById("price8").innerHTML=purchases[8].price +' :Energy';
    document.getElementById("count8").innerHTML='Bought: '+ purchases[8].count;
    document.getElementById("price9").innerHTML=purchases[9].price +' :Energy';
    document.getElementById("count9").innerHTML='Bought: '+ purchases[9].count;

    if (score>=1000000000000){
        document.getElementById('punktid').innerHTML= '&infin; energy';
        score=Number.MAX_VALUE;
    }
}

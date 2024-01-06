//loome algse skoori//
var score=0;
//reset nupp, et mängu uuesti mängida ilma lehe uuesti laadimiseta//
let reset=document.querySelector('#reset');
reset.addEventListener('click', function (){
    score=0;
    /*
    purchases[0].count=0;
    purchases[0].price=purchases[0].og_price;
    purchases[1].count=0;
    purchases[1].price=purchases[1].og_price;
    purchases[2].count=0;
    purchases[2].price=purchases[2].og_price;
    purchases[3].count=0;
    purchases[3].price=purchases[3].og_price;
    purchases[4].count=0;
    purchases[4].price=purchases[4].og_price;
    purchases[5].count=0;
    purchases[5].price=purchases[5].og_price;
    purchases[6].count=0;
    purchases[6].price=purchases[6].og_price;
    purchases[7].count=0;
    purchases[7].price=purchases[7].og_price;
    purchases[8].count=0;
    purchases[8].price=purchases[8].og_price;
    purchases[9].count=0;
    purchases[9].price=purchases[9].og_price;
    upgrade[0].count=0;
    upgrade[0].price=upgrade[0].og_price;
    upgrade[1].count=0;
    upgrade[1].price=upgrade[1].og_price;
    upgrade[2].count=0;
    upgrade[2].price=upgrade[2].og_price;
    upgrade[3].count=0;
    upgrade[3].price=upgrade[3].og_price;
    upgrade[4].count=0;
    upgrade[4].price=upgrade[4].og_price;
    upgrade[5].count=0;
    upgrade[5].price=upgrade[5].og_price;
    upgrade[6].count=0;
    upgrade[6].price=upgrade[6].og_price;
    upgrade[7].count=0;
    upgrade[7].price=upgrade[7].og_price;
    upgrade[8].count=0;
    upgrade[8].price=upgrade[8].og_price;
    upgrade[9].count=0;
    upgrade[9].price=upgrade[9].og_price;*/
    purchases.every(rst_prch)
    upgrade.every(rst_upgr)
    document.getElementById("frame_1").style.display = "block";
    document.getElementById("frame_2").style.display = "none";
});
function rst_prch(purchase){
    purchase.count=0;
    purchase.price=purchase.og_price
}
function rst_upgr(upgrade){
    upgrade.count=0;
    upgrade.price=upgrade.og_price
}
function auto() {
    var bonus=
        0.1*purchases[0].count*(1+upgrade[0].count)
        +1*purchases[1].count*(1+upgrade[1].count)
        +5*purchases[2].count*(1+upgrade[2].count)
        +10*purchases[3].count*(1+upgrade[3].count)
        +25*purchases[4].count*(1+upgrade[4].count)
        +50*purchases[5].count*(1+upgrade[5].count)
        +100*purchases[6].count*(1+upgrade[6].count)
        +250*purchases[7].count*(1+upgrade[7].count)
        +500*purchases[8].count*(1+upgrade[8].count)
        +1000*purchases[9].count*(1+upgrade[9].count)
    score = score + bonus
}

//anname nupule voime skoori tosta//
let btn_count=document.querySelector('#btn_count');
btn_count.addEventListener('click', function (){
    score=score+1+
        (0.1*purchases[0].count*(1+upgrade[0].count)
        +1*purchases[1].count*(1+upgrade[1].count)
        +5*purchases[2].count*(1+upgrade[2].count)
        +10*purchases[3].count*(1+upgrade[3].count)
        +25*purchases[4].count*(1+upgrade[4].count)
        +50*purchases[5].count*(1+upgrade[5].count)
        +100*purchases[6].count*(1+upgrade[6].count)
        +250*purchases[7].count*(1+upgrade[7].count)
        +500*purchases[8].count*(1+upgrade[8].count)
        +1000*purchases[9].count*(1+upgrade[9].count));
    if(document.getElementById("frame_1").style.display === "none")
    {
        document.getElementById("frame_1").style.display = "block";
        document.getElementById("frame_2").style.display = "none";
    }
    else{
        document.getElementById("frame_1").style.display = "none";
        document.getElementById("frame_2").style.display = "block";
    }
});
//array ostude jaoks//
const purchases=[
    {price:1, count:0, og_price:1},
    {price:1e+1, count:0, og_price:1e+1},
    {price:1e+2, count:0, og_price:1e+2},
    {price:1e+3, count:0, og_price:1e+3},
    {price:1e+4, count:0, og_price:1e+4},
    {price:1e+5, count:0, og_price:1e+5},
    {price:1e+6, count:0, og_price:1e+6},
    {price:1e+7, count:0, og_price:1e+7},
    {price:1e+8, count:0, og_price:1e+8},
    {price:1e+9, count:0, og_price:1e+9}
];
const upgrade=[
    {price:1e+2, count:0, og_price:1e+2},
    {price:1e+4, count:0, og_price:1e+4},
    {price:1e+6, count:0, og_price:1e+6},
    {price:1e+8, count:0, og_price:1e+8},
    {price:1e+10, count:0, og_price:1e+10},
    {price:1e+12, count:0, og_price:1e+12},
    {price:1e+14, count:0, og_price:1e+14},
    {price:1e+16, count:0, og_price:1e+16},
    {price:1e+18, count:0, og_price:1e+18},
    {price:1e+20, count:0, og_price:1e+20}
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
let upg0=document.querySelector('#upg0');
let upg1=document.querySelector('#upg1');
let upg2=document.querySelector('#upg2');
let upg3=document.querySelector('#upg3');
let upg4=document.querySelector('#upg4');
let upg5=document.querySelector('#upg5');
let upg6=document.querySelector('#upg6');
let upg7=document.querySelector('#upg7');
let upg8=document.querySelector('#upg8');
let upg9=document.querySelector('#upg9');
purch0.addEventListener('click', function (){
    if (score>=purchases[0].price){
        score=score-purchases[0].price;
        purchases[0].count=purchases[0].count +1;
        purchases[0].price=purchases[0].price*1.1;
    }});
purch1.addEventListener('click', function (){
    if (score>=purchases[1].price){
        score=score-purchases[1].price;
        purchases[1].count=purchases[1].count +1;
        purchases[1].price=purchases[1].price*1.1;
    }});
purch2.addEventListener('click', function (){
    if (score>=purchases[2].price){
        score=score-purchases[2].price;
        purchases[2].count=purchases[2].count +1;
        purchases[2].price=purchases[2].price*1.1;
    }});
purch3.addEventListener('click', function (){
    if (score>=purchases[3].price){
        score=score-purchases[3].price;
        purchases[3].count=purchases[3].count +1;
        purchases[3].price=purchases[3].price*1.1;
    }});
purch4.addEventListener('click', function (){
    if (score>=purchases[4].price){
        score=score-purchases[4].price;
        purchases[4].count=purchases[4].count +1;
        purchases[4].price=purchases[4].price*1.1;
    }});
purch5.addEventListener('click', function (){
    if (score>=purchases[5].price){
        score=score-purchases[5].price;
        purchases[5].count=purchases[5].count +1;
        purchases[5].price=purchases[5].price*1.1;
    }});
purch6.addEventListener('click', function (){
    if (score>=purchases[6].price){
        score=score-purchases[0].price;
        purchases[6].count=purchases[6].count +1;
        purchases[6].price=purchases[6].price*1.1;
    }});
purch7.addEventListener('click', function (){
    if (score>=purchases[7].price){
        score=score-purchases[7].price;
        purchases[7].count=purchases[7].count +1;
        purchases[7].price=purchases[7].price*1.1;
    }});
purch8.addEventListener('click', function (){
    if (score>=purchases[8].price){
        score=score-purchases[8].price;
        purchases[8].count=purchases[8].count +1;
        purchases[8].price=purchases[8].price*1.1;
    }});
purch9.addEventListener('click', function (){
    if (score>=purchases[9].price){
        score=score-purchases[9].price;
        purchases[9].count=purchases[9].count +1;
        purchases[9].price=purchases[9].price*1.1;
    }});
upg0.addEventListener('click', function (){
    if (score>=upgrade[0].price){
        score=score-upgrade[0].price;
        upgrade[0].count=upgrade[0].count +1;
        upgrade[0].price=upgrade[0].price*10;
    }});
upg1.addEventListener('click', function (){
    if (score>=upgrade[1].price){
        score=score-upgrade[1].price;
        upgrade[1].count=upgrade[1].count +1;
        upgrade[1].price=upgrade[1].price*10;
    }});
upg2.addEventListener('click', function (){
    if (score>=upgrade[2].price){
        score=score-upgrade[2].price;
        upgrade[2].count=upgrade[2].count +1;
        upgrade[2].price=upgrade[2].price*10;
    }});
upg3.addEventListener('click', function (){
    if (score>=upgrade[3].price){
        score=score-upgrade[3].price;
        upgrade[3].count=upgrade[3].count +1;
        upgrade[3].price=upgrade[3].price*10;
    }});
upg4.addEventListener('click', function (){
    if (score>=upgrade[4].price){
        score=score-upgrade[4].price;
        upgrade[4].count=upgrade[4].count +1;
        upgrade[4].price=upgrade[4].price*10;
    }});
upg5.addEventListener('click', function (){
    if (score>=upgrade[5].price){
        score=score-upgrade[5].price;
        upgrade[5].count=upgrade[5].count +1;
        upgrade[5].price=upgrade[5].price*10;
    }});
upg6.addEventListener('click', function (){
    if (score>=upgrade[6].price){
        score=score-upgrade[6].price;
        upgrade[6].count=upgrade[6].count +1;
        upgrade[6].price=upgrade[6].price*10;
    }});
upg7.addEventListener('click', function (){
    if (score>=upgrade[7].price){
        score=score-upgrade[7].price;
        upgrade[7].count=upgrade[7].count +1;
        upgrade[7].price=upgrade[7].price*10;
    }});
upg8.addEventListener('click', function (){
    if (score>=upgrade[8].price){
        score=score-upgrade[8].price;
        upgrade[8].count=upgrade[8].count +1;
        upgrade[8].price=upgrade[8].price*10;
    }});
upg9.addEventListener('click', function (){
    if (score>=upgrade[9].price){
        score=score-upgrade[9].price;
        upgrade[9].count=upgrade[9].count +1;
        upgrade[9].price=upgrade[9].price*10;
    }});
//naitame mangijale skoori mangu alguses//
setInterval(display,20);
function display(){
    document.getElementById("punktid").innerHTML=score+' Energiat';
    document.getElementById("price0").innerHTML=" Maksab: "+purchases[0].price +' energiat';
    document.getElementById("count0").innerHTML=' Ostetud: '+ purchases[0].count;
    document.getElementById("price1").innerHTML=" Maksab: "+purchases[1].price +' energiat';
    document.getElementById("count1").innerHTML=' Ostetud: '+ purchases[1].count;
    document.getElementById("price2").innerHTML=" Maksab: "+purchases[2].price +' energiat';
    document.getElementById("count2").innerHTML=' Ostetud: '+ purchases[2].count;
    document.getElementById("price3").innerHTML=" Maksab: "+purchases[3].price +' energiat';
    document.getElementById("count3").innerHTML=' Ostetud: '+ purchases[3].count;
    document.getElementById("price4").innerHTML=" Maksab: "+purchases[4].price +' energiat';
    document.getElementById("count4").innerHTML=' Ostetud: '+ purchases[4].count;
    document.getElementById("price5").innerHTML=" Maksab: "+purchases[5].price +' energiat';
    document.getElementById("count5").innerHTML=' Ostetud: '+ purchases[5].count;
    document.getElementById("price6").innerHTML=" Maksab: "+purchases[6].price +' energiat';
    document.getElementById("count6").innerHTML=' Ostetud: '+ purchases[6].count;
    document.getElementById("price7").innerHTML=" Maksab: "+purchases[7].price +' energiat';
    document.getElementById("count7").innerHTML=' Ostetud: '+ purchases[7].count;
    document.getElementById("price8").innerHTML=" Maksab: "+purchases[8].price +' energiat';
    document.getElementById("count8").innerHTML=' Ostetud: '+ purchases[8].count;
    document.getElementById("price9").innerHTML=" Maksab: "+purchases[9].price +' energiat';
    document.getElementById("count9").innerHTML=' Ostetud: '+ purchases[9].count;
    document.getElementById("upg_count0").innerHTML=" Võimendatud: "+upgrade[0].count+" korda";
    document.getElementById("upg_price0").innerHTML=" Maksab: "+upgrade[0].price+' energiat';
    document.getElementById("upg_count1").innerHTML=" Võimendatud: "+upgrade[1].count+" korda";
    document.getElementById("upg_price1").innerHTML=" Maksab: "+upgrade[1].price+' energiat';
    document.getElementById("upg_count2").innerHTML=" Võimendatud: "+upgrade[2].count+" korda";
    document.getElementById("upg_price2").innerHTML=" Maksab: "+upgrade[2].price+' energiat';
    document.getElementById("upg_count3").innerHTML=" Võimendatud: "+upgrade[3].count+" korda";
    document.getElementById("upg_price3").innerHTML=" Maksab: "+upgrade[3].price+' energiat';
    document.getElementById("upg_count4").innerHTML=" Võimendatud: "+upgrade[4].count+" korda";
    document.getElementById("upg_price4").innerHTML=" Maksab: "+upgrade[4].price+' energiat';
    document.getElementById("upg_count5").innerHTML=" Võimendatud: "+upgrade[5].count+" korda";
    document.getElementById("upg_price5").innerHTML=" Maksab: "+upgrade[5].price+' energiat';
    document.getElementById("upg_count6").innerHTML=" Võimendatud: "+upgrade[6].count+" korda";
    document.getElementById("upg_price6").innerHTML=" Maksab: "+upgrade[6].price+' energiat';
    document.getElementById("upg_count7").innerHTML=" Võimendatud: "+upgrade[7].count+" korda";
    document.getElementById("upg_price7").innerHTML=" Maksab: "+upgrade[7].price+' energiat';
    document.getElementById("upg_count8").innerHTML=" Võimendatud: "+upgrade[8].count+" korda";
    document.getElementById("upg_price8").innerHTML=" Maksab: "+upgrade[8].price+' energiat';
    document.getElementById("upg_count9").innerHTML=" Võimendatud: "+upgrade[9].count+" korda";
    document.getElementById("upg_price9").innerHTML=" Maksab: "+upgrade[9].price+' energiat';

    if (score>=1e+100){
        document.getElementById('punktid').innerHTML= '&infin; energaiat';
        score=Infinity;
    }
}

x=0

vh=100

m=0

b=1000

selMulty=1

madera=0
coal=20
ma=1
on=true
onShop=false
onLoad=coal=0
var audio = new Audio("blipSelect.wav");

var auo = new Audio("powerUp.wav");
first=true
j=[
    "this is a wip shop",
    "this will be changed and whatever you had bought might dissapear"
]





function reset(){
res=confirm("are you sure?")
if (res) {
coal=0
    x=0
    vh=100
    m=0
    b=1000
    //window.location.href="main.html"
}
}


function maa() {
    if(vh>=10) {
        ma+=1
        vh-=10
    }
}




function up(){
if (on) {
    document.getElementById("hk").innerHTML=" "
}else {
}
if (coal>0) {
coal-=0.00001
    x+=m
    }
    if (coal<0) {
        coal=0
    }
if (vh<0) {
    vh=0
}
    document.getElementById(4).innerHTML=coal.toFixed(5)
    document.getElementById(4.5).innerHTML=madera.toFixed(5)
    document.getElementById(2).value=x
    document.getElementById(2).max=b
    document.getElementById(3).innerHTML=vh
    if (x>=b) {
        x=0
        vh+=selMulty
    }
    if (vh<=0) {
        document.getElementById(5).disabled=true
    } else {
        document.getElementById(5).disabled=false
        }
   if (vh>=5) {
        document.getElementById(6).disabled=false
    } else {
        document.getElementById(6).disabled=true
    }
}


function wooo() {
    if(madera>0) {
        madera-=0.001
        x+=m
    }
    if (madera<0) {
        madera=0
    }
    }



function coo(){
if (vh>=2) {
    vh-=2
    coal+=20
}
}










function save(){
var save ={
    coa:coal,
    money1:vh,
    sell:m,
    until:b,
    eaf:x,
    }
    localStorage.setItem("save", JSON.stringify(save));
    ml=document.getElementById("saved")
    ml.innerHTML="saved..."
    setTimeout(function(){ml.innerHTML=" "},2000)
}
function load(){
    var savegame=JSON.parse(localStorage.getItem("save"))

    if (savegame != null && savegame != undefined) {
        vh=savegame.money1;
        m=savegame.sell
        b=savegame.until
        x=savegame.eaf
        coal=savegame.coa
    }
}

load()


setInterval(function(){up()},50)
setInterval(function(){save()},20000)
setInterval(function(){wooo()})

let randomBroj = Math.ceil(Math.random()*10);

if (randomBroj%2==0){
    console.log("broj je paran");
}
else{
    console.log("broj je neparan");
}

let randomDrugi = Math.ceil(Math.random()*10);
if(randomDrugi<3){
    console.log("broj je manji od 3");
}
else if(randomDrugi===3){
    console.log("broj je 3");
}
else{
    console.log("broj je veci od 3");
}

let pristup = prompt("Koliko imas godina");
if(pristup>18){
    console.log("Dobrodosli");
}
else{
    console.log("Pristup nije dozvoljen");
}

let ime = prompt("kako se zoves");
console.log("Zdravo"  + ime);

let datum = new Date();
let dan = datum.getDay();
console.log("danas je " + dan);


let datum2 = new Date()
let sat = datum2.getHours()

if(sat>6 && sat<12){
    console.log('dobro jutro');
}
else if(sat>12 && sat <19){
    console.log('dobar dan');
}
else{
    console.log('dobro vece');
}

let lista = "<ul>";
for (let i=200;i<=300;i++){
  lista+=`<li>${i}<li>`;  
}
lista+="</ul>";
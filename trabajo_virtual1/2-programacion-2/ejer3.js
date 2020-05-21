var kiwi = prompt("ingrese la cantidad de kilos de kiwis");
var peras = prompt("ingrese la cantidad de kilos de peras");
var uvas = prompt("ingrese la cantidad de kilos en uvas");


let calculoDeMercado=(k,p,u)=>{
let resK=k*5;
let resp=p*2;
let resu=u*4;
let total=resK+resp+resu;
return total;
}

alert("El total de su costo es: "+calculoDeMercado(kiwi,peras,uvas)+"Euros")
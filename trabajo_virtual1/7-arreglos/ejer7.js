var num=5
var num2=num+1;
var triangulo="▲";
var estrella="★";
var palito ="|";
var arr=[];
var var1='';
var var2=" ";
var var3=" ";
var var4="";
var espacio=" "
for(let k=0;k<10;k++){
  espacio+=var2;
}
var arbol=()=>{

  for(let i=0;i<10;i++){
  var2=" ";
  for(let j=0;j<10-i;j++)
  {
  var2+=var3;
  arr[i]=var2;
  }
  console.log(arr[i]+triangulo+var1+var4);
  var1+=triangulo;
  var4+=triangulo;
}

}

console.log(espacio+estrella);
arbol();
console.log(espacio+palito);

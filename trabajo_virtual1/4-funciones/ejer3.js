let producto=parseInt(prompt("ingrese el valor del producto"));

const calcularIva=(pro)=>{
let total= pro*0.21+pro;
return total;
}

alert(`El valor total es: ${calcularIva(producto)}`)
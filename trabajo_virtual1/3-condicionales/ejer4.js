ageDog=prompt("Ingrese el a edad en meses");
const calculoAge=(age)=>{
    ageY=age/12;
let resultado=0;
ageY<=1?resultado=15*ageY:age>1&&age<=2?resultado=15+9(ageY-1):resultado=15+9+(ageY-2)
return resultado

}
alert(`La edad en años perro es: ${calculoAge(ageDog)}`)
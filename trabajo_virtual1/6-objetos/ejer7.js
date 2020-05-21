class Person{
    constructor(nombre, edad, genero, estatura){
        this.nombre=nombre;
        this.edad=edad;
        this.genero=genero;
        this.estatura=estatura;
    }

    setNombre(name){
        this.nombre=name;
    }
    getNombre(){
        return this.nombre;
    }
    setEdad(age){
        this.edad=age;
    }
    getEdad(){
        return this.edad;
    }
    setGenero(sex){
        this.genero=sex;
    }
    getGenero(){
        return this.genero;
    }
    setEstatura(est){
        this.estatura=est;
    }
    getEstatura(){
        return this.estatura;
    }
    
}

var caro=new Person("caro",20,"mujer", 1.70);

document.getElementById("despliegue").innerHTML=`Nombre:${caro.nombre}<br>
Edad: ${caro.getEdad()} <br> Genero: ${caro.genero} <br> Estatura
 ${caro.getEstatura()}`

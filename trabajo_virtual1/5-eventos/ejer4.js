const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

document.querySelector('#btn_ver_peliculas').addEventListener('click',(e)=>{
     document.querySelector('#despliegue').innerHTML=`${inception} <br>
     ${theButterFlyEffect}<br> ${eternalSunshineOfTheSM} <br>
     ${blueVelvet}<br>
     ${split}`
})
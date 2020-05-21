fetch('https://dog.ceo/api/breeds/list')
.then(response => response.json())
.then(breedsData=>{const breeds =breedsData.message;
    const divp=document.querySelector('#print');
    const num=Math.floor(Math.random() * (94 - 0)) + 0;
    divp.innerHTML=`${breeds[num]}`
    return fetch('https://dog.ceo/api/breed/'+breeds[num]+'/images/random');
})
.then(imgReponse=>imgReponse.json())
.then(imgData=>{
    const imgD=document.querySelector('img');
    imgD.src=imgData.message;
    imgD.alt="un perro";
})
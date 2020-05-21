document.querySelector('button').addEventListener('click',(e)=>{
fetch('https://dog.ceo/api/breed/chihuahua/images/random')
.then(response =>response.json())

.then(data => {const img1=document.querySelector('img');
    img1.src=data.message;
    img1.alt='un perro';
})
}
)

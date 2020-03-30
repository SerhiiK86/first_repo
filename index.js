const h1 = document.querySelector('h1');
const array = [1,2,3]

h1.addEventListener('click',()=>{
    h1.style.color = 'lightgreen';
    array.map((item)=>{
        console.log(item*2)
    })
})


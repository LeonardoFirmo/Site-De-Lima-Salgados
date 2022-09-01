const negativo = document.querySelectorAll('.negativo')
const positivo = document.querySelectorAll('.positivo')
// let quantidade = document.querySelectorAll('.quantidade')

console.log(negativo)
console.log(positivo)
// console.log(quantidade)


negativo.forEach((item) => {
    item.addEventListener('click',()=>{
        
        let filho = item.parentNode.children[1]
       

        if(filho.innerHTML > 0){
            let filho = item.parentNode.children[1]
            filho.innerHTML= Number(filho.innerHTML)-1
            if(filho.innerHTML ==0){
                filho.style.color='black'
            }
           
        }
        console.log(filho.innerHTML)
    })
    
    
});

positivo.forEach((item) => {
    item.addEventListener('click',()=>{
        let filho = item.parentNode.children[1]
        
        if(filho.innerHTML >= 0){
            filho.style.color='green'
            filho.innerHTML= Number(filho.innerHTML)+1

        }

        console.log(filho.innerHTML)
    })
    
});




// positivo.addEventListener('click' ,() =>{
    
//     if(quantidade.innerHTML >= 0){

//         let item = quantidade.innerHTML++
//         item++
      
//     }

// })









// negativo.addEventListener('click' ,() =>{
//    console.log('foi clicado')
//     // if(quantidade.innerHTML > 0){

//     //     let item = quantidade.innerHTML--
//     //     item--
     
//     // }
// })

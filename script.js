const negativo = document.querySelectorAll('.negativo')
const positivo = document.querySelectorAll('.positivo')


console.log(negativo)
console.log(positivo)



negativo.forEach((item) => {
    item.addEventListener('click',()=>{
        
        let quantidade = item.parentNode.children[1]
      
       

        if(quantidade.innerHTML > 0){
            let quantidade = item.parentNode.children[1]
            quantidade.innerHTML= Number(quantidade.innerHTML)-1
            if(quantidade.innerHTML ==0){
                quantidade.style.color='black'
            }
           
        }
        console.log(item.parentNode.parentNode.children[0].innerHTML)
        console.log(item.parentNode.parentNode.children[1].innerHTML)
        console.log(quantidade.innerHTML)
    })
    
    
});

positivo.forEach((item) => {
    item.addEventListener('click',()=>{
        let quantidade = item.parentNode.children[1]
       
        if(quantidade.innerHTML >= 0){
            quantidade.style.color='green'
            quantidade.innerHTML= Number(quantidade.innerHTML)+1

        }
        // console.log(item.parentNode.parentNode.children[0].innerHTML)
        // console.log(item.parentNode.parentNode.children[1].innerHTML)
        // console.log(quantidade.innerHTML)
        let itensSelecionados = [item.parentNode.parentNode.children[0].innerHTML,item.parentNode.parentNode.children[1].innerHTML,quantidade.innerHTML]
        console.log(itensSelecionados)
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

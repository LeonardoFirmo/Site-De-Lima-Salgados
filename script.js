const negativo = document.querySelectorAll('.negativo')
const positivo = document.querySelectorAll('.positivo')
let valor = document.querySelectorAll('#valor')


console.log(negativo)
console.log(positivo)




negativo.forEach((item) => {
    item.addEventListener('click',()=>{
        let nomeItem = item.parentNode.parentNode.children[0].innerHTML
        let precoItem = item.parentNode.parentNode.children[1].innerHTML
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


            valor[0].innerHTML = `<h2>Carrinho Atual </h2><br>
                                  Salgado:${item.parentNode.parentNode.children[0].innerHTML} <br>
                                  Quantidade:${quantidade.innerHTML}<br>
                                  Preço:${ (Number(item.parentNode.parentNode.children[1].innerHTML) * Number(quantidade.innerHTML)).toFixed(2).replace(".",",")}` 
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

const produtos = document.querySelector('.produtos')
const listaProdutos = Array.from(produtos.children)







function verificaQuantidade(){
  
    listaProdutos.forEach(item=>{
        const negativo = item.children[1].children[2].children[0]
        let quantidade = item.children[1].children[2].children[1]
        const positivo = item.children[1].children[2].children[2]
    
        
        negativo.addEventListener('click',()=>{
           
            // console.log(negativo)
            quantidade.innerHTML --
           
    
        })
      
        positivo.addEventListener('click',()=>{
           quantidade.innerHTML++
            // console.log(positivo)
    
        })
    
    
    })
    
}

verificaQuantidade()
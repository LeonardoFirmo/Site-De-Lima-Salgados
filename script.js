const negativo = document.querySelectorAll('.negativo')
const positivo = document.querySelectorAll('.positivo')
let valor = document.querySelectorAll('#valor')









// negativo

negativo.forEach((item) => {
    item.addEventListener('click',()=>{
        let nomeItem = item.parentNode.parentNode.children[0].innerHTML
        let quantidadeinner = item.parentNode.children[1].innerHTML
        let precoItem = item.parentNode.parentNode.children[1].innerHTML
        let quantidade = item.parentNode.children[1]
      
       

        if(quantidade.innerHTML > 0){
            let quantidade = item.parentNode.children[1]
            quantidade.innerHTML= Number(quantidade.innerHTML)-1;


            valor[0].innerHTML = `<h2>Carrinho Atual </h2><br>
            Salgado:${nomeItem} <br>
            Quantidade:${quantidade.innerHTML}<br>
            Preço:${ (Number(precoItem) * Number(quantidade.innerHTML)).toFixed(2).replace(".",",")}` 
            
            




               
            if(quantidade.innerHTML ==0){
                quantidade.style.color='black'
            }
        
        }
      
    })
    
    
});

// positivo
positivo.forEach((item) => {
    item.addEventListener('click',()=>{
        let ParagraphQuantidade = item.parentNode.children[1]
        let quantidade = item.parentNode.children[1].innerHTML
        let nomeItem = item.parentNode.parentNode.children[0].innerHTML
        let precoItem = item.parentNode.parentNode.children[1].innerHTML
     
        
        if(quantidade >= 0){
            ParagraphQuantidade.style.color='green'
            ParagraphQuantidade.innerHTML= Number(quantidade)+1

          
            // let pedido= {
            //     nome:nomeItem,
            //     preco:precoItem,
            //     qtd:Number(quantidade)
            // }
        

            let pedido= [Number(quantidade) +1,nomeItem,precoItem]
            let pedidoAtual = []

            console.log(pedidoAtual[1],pedido[1])
            pedidoAtual+= pedido
            

            
           
     
     
          
            


        }

        
       
        
       
       
    })
    
});




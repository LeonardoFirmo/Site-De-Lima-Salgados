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
        // console.log(item.parentNode.parentNode.children[0].innerHTML)
        // console.log(item.parentNode.parentNode.children[1].innerHTML)
        // console.log(quantidade.innerHTML)
    })
    
    
});

// positivo
positivo.forEach((item) => {
    item.addEventListener('click',()=>{
        let ParagraphQuantidade = item.parentNode.children[1]
        let quantidade = item.parentNode.children[1].innerHTML
        let nomeItem = item.parentNode.parentNode.children[0].innerHTML
        let precoItem = item.parentNode.parentNode.children[1].innerHTML
     
        
        // console.log(ParagraphQuantidade,quantidade,nomeItem,precoItem)
        if(quantidade >= 0){
            ParagraphQuantidade.style.color='green'
            ParagraphQuantidade.innerHTML= Number(quantidade)+1

          
            // let pedidoAtual= [{
            //     nome:nomeItem,
            //     preco:precoItem,
            //     qtd:quantidade
            // }]
            let pedidoAtual= [{
                nome:'abc',
                preco:0,
                qtd:0
            }]
            
            let pedido=[nomeItem,precoItem,quantidade]
            // console.log(pedidoAtual[0].nome)
            
            function adicionarProduto(array=[]){

                array.forEach(item=>{
                    console.log(item)
                    console.log(pedidoAtual[0].nome)
                    if(pedidoAtual[0].nome.includes(item)){
                        console.log('já existe na lista')
                    }else{
                        console.log('não existe')
                        pedidoAtual.push(array)
                       
                    }
            

                })

            }
            

           adicionarProduto(pedido)
   
     
          
            


        }

        
       
        
        // let itensSelecionados = [item.parentNode.parentNode.children[0].innerHTML,item.parentNode.parentNode.children[1].innerHTML,quantidade.innerHTML]
       
    })
    
});




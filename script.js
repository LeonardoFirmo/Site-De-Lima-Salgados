const produtos = document.querySelector('.produtos')
const listaProdutos = Array.from(produtos.children)
const clienteResumoPedido = document.querySelector('#valor')
const calculaPedido = document.querySelector('#calcularPedido')
const enviarPedido = document.querySelector('#enviarPedido')




let pedidoFinal = [
 { nomeProduto:'Coxinha de frango',precoProduto:1.60,somaPreco:0,quantidadeProduto:0},
 { nomeProduto:'Esfirra',precoProduto:2.60,somaPreco:0,quantidadeProduto:0},
 { nomeProduto:'Coxinha de calabresa',precoProduto:1.90,somaPreco:0,quantidadeProduto:0},
 { nomeProduto:'Pastel de carne',precoProduto:3.90,somaPreco:0,quantidadeProduto:0},
 { nomeProduto:'Empadão',precoProduto:8.90,somaPreco:0,quantidadeProduto:0},

]

function enviarPedidoZap(){
    let texto = `✅ NOVO PEDIDO\n------------------------------\n▶ RESUMO DO PEDIDO\n${clienteResumoPedido.innerText}` ;
    let pedido = window.encodeURIComponent(texto);
    window.open("https://api.whatsapp.com/send?phone=5521980511433&text="+pedido)
}




function somaPrecos(){
    let soma = 0
    pedidoFinal.map(item =>{
        
        soma += Number(item.somaPreco)
        
        
    })
    return soma.toFixed(2)
}


function mostraPedidoCliente(){
    clienteResumoPedido.innerHTML=''
    let precoTotal= somaPrecos()
    if(precoTotal > 0){
        clienteResumoPedido.innerHTML+= `<h3>✅NOVO PEDIDO</h3>`
    }else{
        enviarPedido.style.display='none'
    }
   
    pedidoFinal.forEach(item =>{
       if(item.quantidadeProduto > 0){
        clienteResumoPedido.innerHTML+= `${item.nomeProduto}<br>
        Subtotal do item:${item.somaPreco}<br>
        Quantidade:${item.quantidadeProduto}<br>
        --------------------------------<br>`} 

     
    })
   
    if(precoTotal > 0){
        
        clienteResumoPedido.innerHTML+= `<h2>Valor Total:${precoTotal}</h2>`
        enviarPedido.style.display='block'
    }
    
    
}

calculaPedido.addEventListener('click',mostraPedidoCliente)
enviarPedido.addEventListener('click', enviarPedidoZap)


function verificaQuantidade(){
   
        
  
    listaProdutos.forEach((item)=>{
        const negativo = item.children[1].children[2].children[0]
        let quantidade = item.children[1].children[2].children[1]
        const positivo = item.children[1].children[2].children[2]
    
        
        negativo.addEventListener('click',()=>{
           
          
           

            if(quantidade.innerHTML-1 <= 0){
                quantidade.style.color=''
                quantidade.innerHTML=0
                
              
            }else{
                quantidade.innerHTML --
            }
          
            pedidoFinal.forEach( (itemPF) => {
               
                if(itemPF.nomeProduto === item.children[1].children[0].innerText){
                   itemPF.quantidadeProduto --
                   itemPF.somaPreco =  (itemPF.precoProduto * itemPF.quantidadeProduto).toFixed(2)
                }

            });
    
        })
      
        positivo.addEventListener('click',()=>{
        
            quantidade.innerHTML++
           
            if(quantidade.innerHTML >=1){
                quantidade.style.color='green'
            }else{
                quantidade.style.color=''
            }
          
            pedidoFinal.forEach( (itemPF) => {
               
                if(itemPF.nomeProduto === item.children[1].children[0].innerText){
                   itemPF.quantidadeProduto ++
                   itemPF.somaPreco =  (itemPF.precoProduto * itemPF.quantidadeProduto).toFixed(2)
                  
                   
                }

            });
           
           
   
           
        })
       
    
    
    })
    
}

verificaQuantidade()


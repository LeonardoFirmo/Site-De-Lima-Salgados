const produtos = document.querySelector('.produtos')
const listaProdutos = Array.from(produtos.children)
const clienteResumoPedido = document.querySelector('#valor')
const calculaPedido = document.querySelector('#calcularPedido')
const enviarPedido = document.querySelector('#enviarPedido')




let pedidoFinal = [
 { nomeProduto:'Coxinha de frango',precoProduto:1.60,somaPreco:0,quantidadeProduto:0},
 { nomeProduto:'Esfirra',precoProduto:2.60,somaPreco:0,quantidadeProduto:0},
 { nomeProduto:'Coxinha de calabresa',precoProduto:1.90,somaPreco:0,quantidadeProduto:0},

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

    pedidoFinal.forEach(item =>{
       if(item.quantidadeProduto > 0){
        clienteResumoPedido.innerHTML+= `${item.nomeProduto}<br>
        Subtotal do item:${item.somaPreco}<br>
        Quantidade:${item.quantidadeProduto}<br>
        --------------------------------<br>`} 

     
    })
   
    if(precoTotal > 0){
        clienteResumoPedido.innerHTML+= `<h2>Valor Total:${precoTotal}</h2>`
        enviarPedido.style.display='flex'
        // enviarPedido.setAttribute('href','https://api.whatsapp.com/send?phone=55021980511433&text=%E2%9C%85%20*NOVO%20PEDIDO*%20%0A-----------------------------%0A%E2%96%B6%20*RESUMO%20DO%20PEDIDO*%20%0A%0A%20Pedido%20%23120%0A%0A%20Link%20para%20acompanhar%20status%20do%20pedido%3A%0A%20https%3A%2F%2Fpedir.delivery%2Fapp%2Fcasadoalladin%2Ftrack%3Ftoken%3D0de2bb30aeec34f3e12d7531e55378f58af1b9fa056e5fd2b11b441c0029a681%20%0A%0A*1x*%20_Pizza%20Grande%2035cm_%0A%20-4%20Queijos%20(R%24%2031%2C90)%0A%20%0A%20*Subtotal%20do%20item%3A%20R%24%2031%2C90*%0A%0A%20-%20%20-%20%20-%20%20-%20%20-%20%20-%20%20-%20%20-%20%20-%20%20-%20%20-%0A%0A*SUBTOTAL%3A*%20R%24%2031%2C90%0A%0A%20------------------------------------------%0A%E2%96%B6%20*Dados%20para%20entrega*%20%0A%20%0A*Nome%3A*%20gustavo%0A*Endere%C3%A7o%3A*%20rua%20amarelinha%2C%20n%C2%BA%3A%2047%0A*Bairro%3A*%20taquara%0A*Ponto%20de%20Refer%C3%AAncia%3A*%20chico%20sitio%0A*Telefone%3A*%2021997541388%0A%0A*Taxa%20de%20Entrega%3A*%20R%24%204%2C00%0A%0A%20%F0%9F%95%99%20*Tempo%20de%20Entrega%3A*%20aprox.%2022%3A33%20a%2023%3A13%0A%0A%20-------------------------------%20%0A%E2%96%B6%20*TOTAL*%20%3D%20*R%24%2035%2C90*%0A%20------------------------------%20%0A%0A%E2%96%B6%20*PAGAMENTO*%20%0A%20%0APagamento%20em%20Dinheiro%20%0A')
        // enviarPedido.setAttribute('href','https://api.whatsapp.com/send?phone=55021980511433&text=')
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
           
          
            quantidade.innerHTML --
          
            pedidoFinal.forEach( (itemPF) => {
               
                if(itemPF.nomeProduto === item.children[1].children[0].innerText){
                   itemPF.quantidadeProduto --

                   itemPF.somaPreco =  (itemPF.precoProduto * itemPF.quantidadeProduto).toFixed(2)
                }

            });
    
        })
      
        positivo.addEventListener('click',()=>{
        
            quantidade.innerHTML++
            
          
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


const produtos = document.querySelector('.produtos')
const clienteResumoPedido = document.querySelector('#valor')
const novoPedidoH3 = document.querySelector('#novoPedido')
const calculaPedido = document.querySelector('#calcularPedido')
const enviarPedido = document.querySelector('#enviarPedido')



enviarPedido.addEventListener('click', enviarPedidoZap)


let pedidoFinal = [
 { nome:'Coxinha de frango',tipo:'Frito',preco:1.80,somaPreco:0,quantidade:0,img:'coxinhaDeFrango.jpg'},
 { nome:'Coxinha de frango c/ catupiry',tipo:'Frito',preco:2.00,somaPreco:0,quantidade:0,img:'coxinhaDeFrango.jpg'},
 { nome:'Bolinho de queijo',tipo:'Frito',preco:1.80,somaPreco:0,quantidade:0,img:'esfirra.jpg'},
 { nome:'Bolinho de carne',tipo:'Frito',preco:1.80,somaPreco:0,quantidade:0,img:'coxinhaDeCalabresa.jpg'},
 { nome:'Bolinho de calabresa',preco:1.80,somaPreco:0,quantidade:0,img:'pastelDeCarne.jpg'},
 { nome:'Risole',tipo:'Frito',preco:1.80,somaPreco:0,quantidade:0,img:'empadao.jpg'},
 { nome:'Kibe',tipo:'Frito',preco:1.80,somaPreco:0,quantidade:0,img:'empadao.jpg'},

 { nome:'Empada de frango',tipo:'Empada',preco:3.00,somaPreco:0,quantidade:0,img:'empadao.jpg'},
 { nome:'Empada de frango c/ catupiry',tipo:'Empada',preco:3.50,somaPreco:0,quantidade:0,img:'empadao.jpg'},

 { nome:'Esfiha de carne',tipo:'Esfiha',preco:3.00,somaPreco:0,quantidade:0,img:'empadao.jpg'},
 { nome:'Esfiha de queijo',tipo:'Esfiha',preco:3.00,somaPreco:0,quantidade:0,img:'empadao.jpg'},
 { nome:'Esfiha de frango',tipo:'Esfiha',preco:3.00,somaPreco:0,quantidade:0,img:'empadao.jpg'},
 { nome:'Esfiha de frango c/ catupiry',tipo:'Esfiha',preco:3.50,somaPreco:0,quantidade:0,img:'empadao.jpg'},
 { nome:'Esfiha de Calabresa',tipo:'Esfiha',preco:3.00,somaPreco:0,quantidade:0,img:'empadao.jpg'},
 { nome:'Esfiha de catupiry',preco:3.00,somaPreco:0,quantidade:0,img:'empadao.jpg'},
 { nome:'Esfiha de catupiry com milho',tipo:'Esfiha',preco:3.50,somaPreco:0,quantidade:0,img:'empadao.jpg'},

]

renderizaProdutos(pedidoFinal)

function renderizaProdutos(product){   
    product.forEach(item =>{
        
        produtos.innerHTML+=`
        <div class="produtoWrapper">
            <img class="imgProdutos" src="img/coxinha.jpg" alt="">

            <div class="produto">

                <p id="precoDescricao">${item.nome}</p>
                <p id="">${item.preco.toFixed(2).replace('.',',')}</p> 

                <div class="botoes" style="display:flex">
                    <button class="bt negativo">-</button> 
                    <p class="quantidade">0</p> 
                    <button class="bt positivo">+</button>
                </div>

            </div>
        </div>`
        
    })
    
    const listaProdutos = Array.from(produtos.children)
    verificaQuantidade(listaProdutos)

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
        novoPedidoH3.style.display='flex'
        novoPedidoH3.innerHTML= `✅NOVO PEDIDO`
    }else{
        enviarPedido.style.display='none'
        novoPedidoH3.style.display='none'
    }
   
    pedidoFinal.forEach(item =>{
       if(item.quantidade > 0){
        clienteResumoPedido.innerHTML+= `${item.nome}<br>
        Quantidade:${item.quantidade}<br>
        Subtotal do item:${item.somaPreco.replace('.',',')}<br>
        --------------------------------<br>`} 
    })
   
    if(precoTotal > 0){
        
        clienteResumoPedido.innerHTML+= `<h2>Valor Total:${precoTotal.replace('.',',')}</h2>`
        enviarPedido.style.display='block'
    }
      
}

function enviarPedidoZap(){
    let texto = `✅ NOVO PEDIDO\n------------------------------\n▶ RESUMO DO PEDIDO\n------------------------------\n${clienteResumoPedido.innerText}` ;
    let pedido = window.encodeURIComponent(texto);
    window.open("https://api.whatsapp.com/send?phone=5521980511433&text="+pedido)
}




function verificaQuantidade(listaProdutos){
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

                if(itemPF.quantidade <= 0){
                    itemPF.quantidade = 0

                }else if(itemPF.nome === item.children[1].children[0].innerText){
                   itemPF.quantidade --
                   itemPF.somaPreco =  (itemPF.preco * itemPF.quantidade).toFixed(2)
                   mostraPedidoCliente()
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
               
                if(itemPF.nome === item.children[1].children[0].innerText){
                   itemPF.quantidade ++
                   itemPF.somaPreco =  (itemPF.preco * itemPF.quantidade).toFixed(2)
                   mostraPedidoCliente()
                   
                }

            });
           

        })

    
    })
    
}




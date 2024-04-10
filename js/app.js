
let totalGeral=0;
//alert(totalGeral)
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value; 
        //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
      alert("Selecione um produto válido.");
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return;
    }     


    //Testando as variáveis
    //alert(quantidade)
    //alert(preco)
    //alert(totalGeral)
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
        //atualizar o valor total
        totalGeral = totalGeral + preco;
        //alert(totalGeral)
        let campoTotal = document.getElementById('valor-total'); 
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;

  }

function limpar() {
    let totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    let quantidade = document.getElementById('quantidade').value="";

}

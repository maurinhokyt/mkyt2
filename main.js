function criaCartao (categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML =  `
    <div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <divc class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
    `
    let respostaV = false;
    function virar(){
     respostaV= !respostaV;
     cartao.classList.togglea('active', respostaV);
    }

    cartao.addEventListener('click', virar);
    
    container.appendChild(cartao);
}
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

const formPedido = document.getElementById("formPedido");

const produtoPedido = document.getElementById("produtoPedido");

const listaPedidos = document.getElementById("listaPedidos");

const resultadoPedido = document.getElementById("resultadoPedido");


function carregarProdutos() {

    produtoPedido.innerHTML = `
        <option value="">
            Selecione um produto
        </option>
    `;

    produtos.forEach((produto, index) => {

        produtoPedido.innerHTML += `
            <option value="${index}">
                ${produto.nome} - R$ ${produto.preco.toFixed(2)}
            </option>
        `;

    });

}


formPedido.addEventListener("submit", function(event) {

    event.preventDefault();

    const cliente =
        document.getElementById("clientePedido").value;

    const indiceProduto =
        Number(produtoPedido.value);

    const quantidade =
        Number(document.getElementById("quantidadePedido").value);


    const produto = produtos[indiceProduto];


    // VERIFICAÇÃO DE PRODUTO
    if (!produto) {

        resultadoPedido.innerHTML = `
            <div class="erro">
                ❌ Selecione um produto.
            </div>
        `;

        return;
    }


    // DECISÃO SE/SENÃO
    // Verifica se existe estoque suficiente

    if (quantidade <= produto.estoque) {

        const subtotal =
            produto.preco * quantidade;


        // DECISÃO SE/SENÃO
        // Desconto para pedidos acima de R$ 100

        let valorFinal;

        if (subtotal >= 100) {

            valorFinal = subtotal * 0.90;

        } else {

            valorFinal = subtotal;

        }


        // Diminuir estoque

        produto.estoque -= quantidade;


        const pedido = {

            cliente: cliente,

            produto: produto.nome,

            quantidade: quantidade,

            valor: valorFinal,

            data: new Date().toLocaleString("pt-BR")

        };


        pedidos.push(pedido);


        localStorage.setItem(
            "pedidos",
            JSON.stringify(pedidos)
        );


        localStorage.setItem(
            "produtos",
            JSON.stringify(produtos)
        );


        // Mensagem de sucesso

        resultadoPedido.innerHTML = `
            <div class="sucesso">

                ✅ Pedido realizado com sucesso!

                <br><br>

                Cliente: ${cliente}

                <br>

                Produto: ${produto.nome}

                <br>

                Quantidade: ${quantidade}

                <br>

                Valor final:
                R$ ${valorFinal.toFixed(2)}

            </div>
        `;


        formPedido.reset();

        mostrarPedidos();

        carregarProdutos();


    } else {

        // SENÃO
        // Estoque insuficiente

        resultadoPedido.innerHTML = `
            <div class="erro">

                ❌ Pedido não realizado!

                <br><br>

                Estoque insuficiente.

                <br>

                Disponível:
                ${produto.estoque}

                <br>

                Solicitado:
                ${quantidade}

            </div>
        `;

    }

});


function mostrarPedidos() {

    listaPedidos.innerHTML = "";


    if (pedidos.length === 0) {

        listaPedidos.innerHTML = `
            <div class="alerta">
                Nenhum pedido realizado.
            </div>
        `;

        return;
    }


    pedidos.forEach((pedido, index) => {

        listaPedidos.innerHTML += `

            <div class="item">

                <h3>
                    Pedido #${index + 1}
                </h3>

                <p>
                    👤 Cliente:
                    ${pedido.cliente}
                </p>

                <p>
                    ☕ Produto:
                    ${pedido.produto}
                </p>

                <p>
                    📦 Quantidade:
                    ${pedido.quantidade}
                </p>

                <p>
                    💰 Valor:
                    R$ ${pedido.valor.toFixed(2)}
                </p>

                <p>
                    📅 Data:
                    ${pedido.data}
                </p>

            </div>

        `;

    });

}


carregarProdutos();

mostrarPedidos();
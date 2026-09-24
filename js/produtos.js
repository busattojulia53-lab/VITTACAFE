let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

const formProduto = document.getElementById("formProduto");
const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos() {

    listaProdutos.innerHTML = "";

    if (produtos.length === 0) {

        listaProdutos.innerHTML = `
            <div class="alerta">
                Nenhum produto cadastrado.
            </div>
        `;

        return;
    }

    produtos.forEach((produto, index) => {

        let mensagemEstoque;

        // DECISÃO SE/SENÃO
        if (produto.estoque <= 5) {

            mensagemEstoque = `
                <p class="erro">
                    ⚠️ Estoque baixo!
                </p>
            `;

        } else {

            mensagemEstoque = `
                <p class="sucesso">
                    ✅ Estoque normal.
                </p>
            `;

        }

        listaProdutos.innerHTML += `
            <div class="item">

                <h3>${produto.nome}</h3>

                <p>
                    Preço: R$ ${produto.preco.toFixed(2)}
                </p>

                <p>
                    Estoque: ${produto.estoque}
                </p>

                ${mensagemEstoque}

                <button onclick="excluirProduto(${index})">
                    Excluir
                </button>

            </div>
        `;

    });

}

formProduto.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nomeProduto").value;

    const preco = Number(
        document.getElementById("precoProduto").value
    );

    const estoque = Number(
        document.getElementById("estoqueProduto").value
    );

    const produto = {
        nome,
        preco,
        estoque
    };

    produtos.push(produto);

    localStorage.setItem("produtos", JSON.stringify(produtos));

    formProduto.reset();

    mostrarProdutos();

    alert("Produto cadastrado com sucesso!");

});

function excluirProduto(index) {

    if (confirm("Deseja excluir este produto?")) {

        produtos.splice(index, 1);

        localStorage.setItem(
            "produtos",
            JSON.stringify(produtos)
        );

        mostrarProdutos();

    }

}

mostrarProdutos();
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

const listaEstoque = document.getElementById("listaEstoque");
const resultadoEstoque = document.getElementById("resultadoEstoque");

function mostrarEstoque() {

    listaEstoque.innerHTML = "";

    if (produtos.length === 0) {

        listaEstoque.innerHTML = `
            <div class="alerta">
                Nenhum produto cadastrado.
            </div>
        `;

        return;
    }

    produtos.forEach(produto => {

        let situacao;

        // DECISÃO SE/SENÃO
        if (produto.estoque <= 5) {

            situacao = "⚠️ ESTOQUE BAIXO";

        } else {

            situacao = "✅ ESTOQUE NORMAL";

        }

        listaEstoque.innerHTML += `
            <div class="item">

                <h3>${produto.nome}</h3>

                <p>
                    Quantidade disponível:
                    <strong>${produto.estoque}</strong>
                </p>

                <p>${situacao}</p>

            </div>
        `;

    });

}

function verificarEstoqueGeral() {

    if (produtos.length === 0) {

        resultadoEstoque.innerHTML = `
            <div class="alerta">
                Não existem produtos cadastrados.
            </div>
        `;

        return;
    }

    let produtosBaixos = 0;

    produtos.forEach(produto => {

        if (produto.estoque <= 5) {
            produtosBaixos++;
        }

    });

    // DECISÃO SE/SENÃO
    if (produtosBaixos > 0) {

        resultadoEstoque.innerHTML = `
            <div class="erro">
                ⚠️ Existem ${produtosBaixos}
                produto(s) com estoque baixo.
            </div>
        `;

    } else {

        resultadoEstoque.innerHTML = `
            <div class="sucesso">
                ✅ Todos os produtos possuem estoque suficiente.
            </div>
        `;

    }

}

mostrarEstoque();
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

const formCliente = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

function mostrarClientes() {

    listaClientes.innerHTML = "";

    if (clientes.length === 0) {

        listaClientes.innerHTML = `
            <div class="alerta">
                Nenhum cliente cadastrado.
            </div>
        `;

    } else {

        clientes.forEach((cliente, index) => {

            listaClientes.innerHTML += `
                <div class="item">
                    <h3>${cliente.nome}</h3>
                    <p>📞 ${cliente.telefone}</p>
                    <p>📧 ${cliente.email}</p>

                    <button onclick="excluirCliente(${index})">
                        Excluir
                    </button>
                </div>
            `;

        });

    }
}

formCliente.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nomeCliente").value;
    const telefone = document.getElementById("telefoneCliente").value;
    const email = document.getElementById("emailCliente").value;

    const cliente = {
        nome,
        telefone,
        email
    };

    clientes.push(cliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    formCliente.reset();

    mostrarClientes();

    alert("Cliente cadastrado com sucesso!");

});

function excluirCliente(index) {

    if (confirm("Deseja realmente excluir este cliente?")) {

        clientes.splice(index, 1);

        localStorage.setItem("clientes", JSON.stringify(clientes));

        mostrarClientes();
    }

}

mostrarClientes();
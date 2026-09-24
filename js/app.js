console.log("☕ Sistema Vitta Café iniciado!");

function verificarEstoque(quantidade, minimo) {

    if (quantidade <= minimo) {
        return "⚠️ Estoque baixo! É necessário realizar reposição.";
    } else {
        return "✅ Estoque suficiente.";
    }

}

function calcularDesconto(valor) {

    if (valor >= 100) {
        return valor * 0.90;
    } else {
        return valor;
    }

}
# ☕ Vitta Café

Sistema de gerenciamento da empresa fictícia Vitta Café.

## 📋 Sobre o projeto

O sistema foi desenvolvido para auxiliar no controle administrativo da Vitta Café.

O sistema permite controlar:

- Clientes
- Produtos
- Estoque
- Pedidos

## 💻 Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- LocalStorage

## ⚙️ Funcionalidades

### Clientes

Permite cadastrar:

- Nome
- Telefone
- E-mail

### Produtos

Permite cadastrar:

- Nome
- Preço
- Quantidade em estoque

### Estoque

O sistema verifica automaticamente se o estoque está baixo.

Se a quantidade for menor ou igual a 5:

> Estoque baixo.

Senão:

> Estoque normal.

### Pedidos

O sistema verifica se existe quantidade suficiente no estoque.

Se houver estoque suficiente:

> Pedido aprovado.

Senão:

> Pedido recusado por falta de estoque.

Também existe uma regra de desconto:

Se o pedido for igual ou superior a R$ 100:

> 10% de desconto.

Senão:

> O valor permanece normal.

## 🎯 Objetivo acadêmico

O projeto demonstra a utilização de estruturas condicionais:

```javascript
if
else
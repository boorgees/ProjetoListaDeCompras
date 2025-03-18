// BOTOES
const btnAdd = document.getElementById('btnAdd');
const btnAddFinal = document.getElementById('btnAddFinal')
const btnAddLimpar = document.getElementById('btnAddLimpar')
const btnAddLimparFinal = document.getElementById('btnAddLimparFinal')

//LISTAS
const listaComprado = document.getElementById('listaComprado');
const listaPendente = document.getElementById('listaPendente');

const btnAddClick = () => {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const qtdProduto = document.getElementById('qtdProduto').value;
    const dscProduto = document.getElementById('dscProduto').value;

    if (nomeProduto && qtdProduto && dscProduto) {
        const li = document.createElement('li');
        li.innerText = `Nome: ${nomeProduto}  \n Quantidade: ${qtdProduto} \n Descrição: ${dscProduto}`;
        listaPendente.appendChild(li);

        document.getElementById('nomeProduto').value = '';
        document.getElementById('qtdProduto').value = '';
        document.getElementById('dscProduto').value = '';
    }
    document.getElementById('btnAddFinal').style.display = 'block';
    document.getElementById('btnAddLimparFinal').style.display = 'block';
    txtInternoPendente.innerText = '';
};

const btnAddFinalClick = () => {
    txtInternoPendente.innerText = 'Lista de produtos vazia!';
    const itensPendentes = listaPendente.getElementsByTagName('li');

    for (const elementos of itensPendentes) {
        const li1 = document.createElement('li');
        li1.innerText = elementos.innerText;
        listaComprado.appendChild(li1);
    }

    while (listaPendente.firstChild) {
        listaPendente.removeChild(listaPendente.firstChild);
    }

    document.getElementById('btnAddFinal').style.display = 'none';
    document.getElementById('btnAddLimparFinal').style.display = 'none'
    document.getElementById('btnAddLimpar').style.display = 'block';
    txtInternoComprado.innerText = '';
};

const btnAddLimparFinalClick = () => {

    document.getElementById('btnAddFinal').style.display = 'none';
    document.getElementById('btnAddLimparFinal').style.display = 'none'
    txtInternoPendente.innerText = 'Lista de produtos vazia!';

    while (listaPendente.firstChild) {
        listaPendente.removeChild(listaPendente.firstChild);
    }

}

const btnAddLimparClick = () => {

    while (listaComprado.firstChild) {
        listaComprado.removeChild(listaComprado.firstChild);
    }
    document.getElementById('btnAddLimpar').style.display = 'none';
    txtInternoComprado.innerText = 'Adicione itens ao seu carrinho!';
}

btnAdd.addEventListener('click', btnAddClick);
btnAddFinal.addEventListener('click', btnAddFinalClick)
btnAddLimpar.addEventListener('click', btnAddLimparClick);
btnAddLimparFinal.addEventListener('click', btnAddLimparFinalClick)
const btnAdd = document.getElementById('btnAdd');
const btnAddFinal = document.getElementById('btnAddFinal')
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
};

const btnAddFinalClick = () => {
    const itensPendentes = listaPendente.getElementsByTagName('li');

    for (const elementos of itensPendentes) {
        const li1 = document.createElement('li');
        li1.innerText = elementos.innerText;
        listaComprado.appendChild(li1);
    }

    while (listaPendente.firstChild) {
        listaPendente.removeChild(listaPendente.firstChild);
    }
};

btnAdd.addEventListener('click', btnAddClick);
btnAddFinal.addEventListener('click', btnAddFinalClick)
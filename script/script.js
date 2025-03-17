const btnAdd = document.getElementById('btnAdd');
const listaComprado = document.getElementById('listaComprado');

const btnAddClick = () => {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const qtdProduto = document.getElementById('qtdProduto').value;
    const dscProduto = document.getElementById('dscProduto').value;

    if (nomeProduto && qtdProduto && dscProduto) {
        const li = document.createElement('li');
        li.innerText = `Nome: ${nomeProduto}  \n Quantidade: ${qtdProduto} \n Descrição: ${dscProduto}`;
        listaComprado.appendChild(li);

        document.getElementById('nomeProduto').value = '';
        document.getElementById('qtdProduto').value = '';
        document.getElementById('dscProduto').value = '';
    }
};

btnAdd.addEventListener('click', btnAddClick);
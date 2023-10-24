'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => document.getElementById('modal')
    .classList.remove('active');

const tempClient = {
    //criação do JSON
    nome: "Vitor",
    email: "vitor.testecroud@hotmail.com",
    celular: "4112348765",
    cidade: "Curitiba"
}

    //CRUD - criar FUNÇÕES em criar(create), ler(read), atualizr(update) e deletar(delete)
const createCliente = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client')); //Pega os dados (convertidos em objeto) que já tem no banco de dados e abaixo acrescenta mais dados sem substituir.
    db_client.push (client);
    localStorage.setItem("db_client", JSON.stringify(db_client)) //cria um "banco de dados(cliente)" e envia o valor de client
                                //transforma o objeto em String
}

const camposValidos = () => {
    return document.getElementById('form').reportValidity() // verifica se todas as regras forem compridas
}

    //interação
const saveClient = () => {
    if (camposValidos()) { //verifica se há campos vazios
        console.log("cadastrando cliente");
    }
}


    //EVENTOS
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('salvar')
    .addEventListener('click', saveClient);

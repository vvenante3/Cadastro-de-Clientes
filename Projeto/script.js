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

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];//Pega os dados (convertidos em objeto) que já tem no banco de dados e abaixo acrescenta mais dados sem substituir.
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient)); //cria um "banco de dados(cliente)" e envia o valor de client 
                                                            //transforma o objeto em String
    //CRUD - criar FUNÇÕES em criar(create), ler(read), atualizr(update) e deletar(delete)

// ===========  READ  ============================================
const readClient = () => getLocalStorage();
// ===========  CREATE  ============================================
    const createClient = (client) => {
    const dbClient = getLocalStorage(); //pegar os dados do cliente
    dbClient.push (client); //enviar os dados do cliete
    setLocalStorage(dbClient);
}

const camposValidos = () => {
    return document.getElementById('form').reportValidity() // verifica se todas as regras forem compridas
}

    //interação
const saveClient = () => {
    if (camposValidos()) { //verifica se há campos vazios
        const client = { //construindo o JSON abaixo:
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client);
    }
}

    //EVENTOS
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('salvar')
    .addEventListener('click', saveClient);

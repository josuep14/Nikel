const nome = "Josué";
let nome2 = "";
let pessoaDefault = {
    nome: "Josué",
    idade: "18",
    trabalho: "trabalho" 
}

let nomes = ["Josué", "João","Maria"]
let pessoas = [
    {
        nome: "Josué",
        idade: "18",
        trabalho: "trabalho"  
    },
    {
        nome: "João",
        idade: "18",
        trabalho: "trabalho"
    },
    {
        nome: "Maria",
        idade: "18",
        trabalho: "trabalho"
    }
]

function alterarnome() {
    nome2 = "Lucas"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Matheus",
    idade: "18",
    trabalho: "trabalho"
});

imprimirPessoas();

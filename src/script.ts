import PromptSync = require("prompt-sync");

const prompt = PromptSync();

let estoque = [];

console.clear();
console.log(`---Opções do menu---`);
console.log(`1- Armazenar`);
console.log(`2- Remover Dados`);
console.log(`3- Atualizar Dados`);
console.log(`4- Todos os Dados`);

const option = prompt('Escolha a opção: ');

switch(option){
    case '1':
        estoque.push();
        break;
    case '2':
        estoque.pop();
        break;
    case '3':
        estoque.splice
        estoque.push();
        break;
    case '4':
        estoque.forEach((item)=>{console.log(item)});
        break;
}
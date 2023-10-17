let clubes = document.querySelector('#clube')
let resLista = document.querySelector('#resLista')
let resTabela = document.querySelector('#resTabela')
let listaClubes = []


function adicionar() {
    
    if (clubes.value == '') {
        alert('Digite um nome válido')
    } else {
        listaClubes.push(clubes.value)
        clubes.value = ''
        clubes.focus() }
   
} 

function listar() {
    let times = ''
    listaClubes.forEach((time, index) =>
    times += `${index + 1}- ${time} \n`)
    resLista.innerText = times     
}

function montar() {
    let tabela = ''
    if ((listaClubes.length % 2) == 1) {
        alert('Número ímpar de Clubes, não é possivel montar a tabela.')
        clubes.focus();
        return
        
    } else {
        for(let i=0; i <(listaClubes.length/2); i++) {
            tabela += `${listaClubes[i]} X ${listaClubes[listaClubes.length - i -1]}\n`
        }
        resTabela.innerText = tabela
    }       
         
}
 


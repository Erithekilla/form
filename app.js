const btn = document.querySelector('#btn')
const nomeT = 'Erick'
const emailT = 'erick@gmail.com'
const senhaT = '12345678'
const home = import('./pags/home.html')


function dados() {
    let nome = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let senha = document.querySelector('#senha').value
    let p = document.querySelector('.error')

    if(nome == nomeT && email == emailT && senha == senhaT){
        p.innerHTML = `Correcto!`
        window.open('home', '_self')
    }else{
        p.innerHTML = `Error`
    }
    limpar()
}

function limpar() {
    document.querySelector('#name').value = ""
    document.querySelector('#email').value = ""
    document.querySelector('#senha').value = ""

    document.querySelector('#name').focus()
}

function login(){
    window
}

btn.addEventListener('click', dados)


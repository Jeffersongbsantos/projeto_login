
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{

let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')

    } else {
        inputSenha.setAttribute('type', 'password')
    }   
})


let verbtn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{

let inputPassword = document.querySelector('.verPassword')

    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')

    } else {
        inputPassword.setAttribute('type', 'password')
    }   
})
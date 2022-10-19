/*Variaveis de validações */
    let nome = document.querySelector('#name')
    let labelName = document.querySelector('#labelName')
    let validName = false

    let user = document.querySelector('#usuario')
    let labelUser = document.querySelector('#labelUser')
    let validUser = false

    let senha = document.querySelector('#senha')
    let labelPassword = document.querySelector('#labelPassword')
    let validSenha = false

    let confirmSenha = document.querySelector('#confirmSenha')
    let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
    let validConfirmSenha = false

    /*funções de validações */

    nome.addEventListener('keyup', ()=> {
        if(nome.value.length <= 14) {
            labelName.setAttribute('style', 'color: #ff0000')
            labelName.innerHTML = 'Nome *Insira no minimo 15 caracteres'
            nome.setAttribute('style', 'border-color: #ff0000')
            validName = false

        } else {
            labelName.setAttribute('style', 'color: #6368ef')
            labelName.innerHTML = 'Nome'
            nome.setAttribute('style', 'border-color: #6368ef')
            validName = true
        }
    })

    user.addEventListener('keyup', ()=> {
        if(user.value.length <= 5) {
            labelUser .setAttribute('style', 'color: #ff0000')
            labelUser .innerHTML = 'Usuário *Insira no minimo 6 caracteres'
            user.setAttribute('style', 'border-color: #ff0000')
            validUser = false
        } else {
            labelUser .setAttribute('style', 'color: #6368ef')
            labelUser .innerHTML = 'Usuário'
            user.setAttribute('style', 'border-color: #6368ef')
            validUser = true
        }
    })

    senha.addEventListener('keyup', ()=> {
        if(senha.value.length <= 5) {
            labelPassword.setAttribute('style', 'color: #ff0000')
            labelPassword.innerHTML = 'Senha *Insira no minimo 6 caracteres'
            senha.setAttribute('style', 'border-color: #ff0000')
            validSenha = false
        } else {
            labelPassword.setAttribute('style', 'color: #6368ef')
            labelPassword.innerHTML = 'Senha'
            senha.setAttribute('style', 'border-color: #6368ef')
            validSenha = true
        }
    })

    confirmSenha.addEventListener('keyup', ()=> {
        if(senha.value != confirmSenha.value) {
            labelConfirmPassword.setAttribute('style', 'color: #ff0000')
            labelConfirmPassword.innerHTML = 'Confirmar Senha *As senhas não conferem'
            confirmSenha.setAttribute('style', 'border-color: #ff0000')
            validConfirmSenha = false
        } else {
            labelConfirmPassword.setAttribute('style', 'color: #6368ef')
            labelConfirmPassword.innerHTML = 'Confirmar Senha'
            confirmSenha.setAttribute('style', 'border-color: #6368ef')
            validConfirmSenha = true
        }
    })

  /* Função cadastrar */
       function cadastrar() {
        if(validName && validUser && validSenha && validConfirmSenha){ 

           msgSuccess.setAttribute('style', 'display: block')
           msgSuccess.innerHTML = '<strong>Cadastrado com sucesso!</strong>'
           msgError.setAttribute('style', 'display: none')
           msgError.innerHTML = ''
           
          
        } else {
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = '<strong>Preencha todos os campos</strong>'
            msgSuccess.innerHTML = ''
            msgSuccess.setAttribute('style', 'display: none')
        }
    }

    /* Função msg de erro e sucesso de cadastro*/

    let msgError = document.querySelector('#msgError')
    let msgSuccess = document.querySelector('#msgSuccess')


/*Função visualizar senha */

let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{

let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')

    } else {
        inputSenha.setAttribute('type', 'password')
    }   
})

/*Função visualizar confirmar senha */

let btnConfirm = document.querySelector('#verConfirmSenha')

btnConfirm.addEventListener('click', ()=>{

let inputConfirmSenha = document.querySelector('#confirmSenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')

    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }   
})




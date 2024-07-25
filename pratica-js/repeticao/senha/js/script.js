nomeUsuario = prompt("Cadastre o nome de usuário: ")
senha = prompt("Cadastre a senha do perfil:")

while(senha == nomeUsuario) {
    alert ('Senha e nome de usuário coincidem!')
    nomeUsuario = prompt("Cadastre o nome de usuário: ")
    senha = prompt("Cadastre a senha do perfil:")
}

console.log("Usuário e senha cadastrado!")
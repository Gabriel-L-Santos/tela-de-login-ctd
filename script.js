function cadastrar() {
  let usuario = this.lerDadosCadastro();
  
  if (validarCamposCadastro(usuario) == true) {    
    window.location.href = "index.html";
    sessionStorage.setItem("nomeCompleto", usuario.nomeCompleto);
    sessionStorage.setItem("login", usuario.email);
    sessionStorage.setItem("senha", usuario.senha);
    sessionStorage.setItem("confirmarSenha", usuario.confirmarSenha);
  }else {

  }

}
function logar() {
  let dadosLogin = this.lerDadosLogin();
  //Pegando os dados de login que o usuário cadastrou pelo SessionStorage e guardando nas variáveis email e senha.
  login.loginBD = sessionStorage.getItem("login")
  login.senhaBD = sessionStorage.getItem("senha")

  if (validarCamposLogin(dadosLogin) == true) {
    
      if (dadosLogin.email === login.loginBD && dadosLogin.senha === login.senhaBD) {
        window.location.href = "assets/pages/home.html";
      }else
        alert('Login incorreto!')
  }else {

  }

}

function validarCamposLogin(login) {
  let msg = ''
  
  if (!login.email) {
    msg += 'Informe o seu usuário de Login\n'
  }
  if (!login.senha) {
    msg += 'Informe a sua senha \n'  
  if (msg != '') {
    alert(msg)
    return false
  }
    
  }
  return true
}

function validarCamposCadastro(usuario) {
  let msg = ''

  if (!usuario.nomeCompleto) {
    msg += 'Informe o seu nome completo \n'
  }
  if (!usuario.email) {
    msg += 'Informe o seu Login de usuário \n'
  }
  if (!usuario.senha) {
    msg += 'Informe a sua senha \n'
  }
    if (!usuario.confirmarSenha) {
  msg += 'Confirme a sua senha \n'
  }
  if (usuario.senha != usuario.confirmarSenha) {
    msg += 'As senhas não conferem'
  }
  if (msg != '') {
    alert(msg)
    return false
  }
    return true
  }

  function lerDadosLogin() {
    let login = {}
      login.email = document.getElementById('login').value
      login.senha = document.getElementById('senha').value
    return login;
  }

  function lerDadosCadastro() {
    let usuario = {}
      usuario.nomeCompleto = document.getElementById('nomeCompleto').value
      usuario.email = document.getElementById('email').value
      usuario.senha = document.getElementById('senha').value
      usuario.confirmarSenha = document.getElementById('confirmarSenha').value
    return usuario;    
  }

function switchToSignUp() {
  // esconder a tela de login
  document.querySelector(".container").style.display = "none";

  // mostrar a tela de sign up
  var signUpContainer = document.createElement("div");
  signUpContainer.classList.add("container");
  signUpContainer.innerHTML = 
    `<form>
        <h1>Criar Conta</h1>
        <label for="username">Usuário:</label>
        <input type="text" id="signup-username" name="username" required>
        <label for="password">Senha:</label>
        <input type="password" id="signup-password" name="password" required>
        <label for="password-confirm">Confirme a senha:</label>
        <input type="password" id="signup-password-confirm" name="password-confirm" required>
        <button type="submit" onclick="signup()">Criar Conta</button>
      </form>`;
  document.querySelector("body").appendChild(signUpContainer);
}

function switchToLogin() {
  // esconder a tela de sign up
  document.querySelector(".container").style.display = "none";

  // mostrar a tela de login
  document.querySelector(".container").style.display = "block";
}
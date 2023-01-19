function signup() {
  var username = document.getElementById("signup-username").value;
  var password = document.getElementById("signup-password").value;
  var passwordConfirm = document.getElementById("signup-password-confirm").value;
  if (password === passwordConfirm) {
    
    username != password;
    alert("Conta criada com sucesso!");
  } else {
    alert("Senhas não correspondem!");
  }
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username != password) {
    alert("Login feito com sucesso!");
  } else {
    alert("Senha ou nome de usuário incorreta");
  }
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
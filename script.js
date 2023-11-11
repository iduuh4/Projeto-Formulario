let form = document.querySelector("#form");
let usuario = document.querySelector("#usuario");
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let senhaConfirmacao = document.querySelector("#senha-confirmacao");

//-------- Confirmation FORM ---------
form.addEventListener("submit", (event) => {
  event.preventDefault(); // preventDefalt para n perder as alteraçoes feita quando clicar no cadastrar

  checkForm();
});

//-------- CHECK IF YOU TYPED---------
usuario.addEventListener("blur", () => {
  //para verificar se o campo está certo, sem precisar clicar no botão, com o eventlistener "blur"
  checkInputUsuario();
});
email.addEventListener("blur", () => {
  checkInputEmail();
});
senha.addEventListener("blur", () => {
  checkInputSenha();
});
senhaConfirmacao.addEventListener("blur", () => {
  checkInputSenhaConfirmacao();
});

//-------- CKECKS ---------
function checkInputUsuario() {
  let valorUsuario = usuario.value; //pegar o valor inserido no campo usuario

  if (valorUsuario === "") {
    errorInput(usuario, "Preencha um nome de usuário !"); // //chamando a função
  } else {
    let formItem = usuario.parentElement;
    formItem.classList = "form-content"; //retirando o erro caso tenha algo digitado no campo
  }
}
function checkInputEmail() {
  let valorEmail = email.value;

  if (valorEmail === "") {
    errorInput(email, "Preencha um email válido !");
  } else {
    let formItem = email.parentElement;
    formItem.classList = "form-content";
  }
}
function checkInputSenha() {
  let valorSenha = senha.value;

  if (valorSenha === "") {
    errorInput(senha, "Senha é obrigatória!");
  } else if (valorSenha.length < 8) {
    errorInput(senha, "Sua senha deve ter 8 caracteres ou mais!");
  } else if (valorSenha.length >= 8) {
    let formItem = senha.parentElement;
    formItem.classList = "form-content";
  }
}
function checkInputSenhaConfirmacao() {
  let valorSenha = senha.value;
  let confirmacaoValorSenha = senhaConfirmacao.value; //variavel para armazenar a senha de confirmação, comprar com o let"valorSenha"

  if (confirmacaoValorSenha === "") {
    errorInput(senhaConfirmacao, "A confirmação de senha é obrigatória!");
  } else if (confirmacaoValorSenha !== valorSenha) {
    errorInput(senhaConfirmacao, "As senhas não conferem!");
  } else {
    let formItem = senhaConfirmacao.parentElement;
    formItem.classList = "form-content";
  }
}

//-------- CHECK FORM FOR SEND ---------
function checkForm() {
  checkInputUsuario(); //chamando as funçoes assim que clicar no cadastrar
  checkInputEmail();
  checkInputSenha();
  checkInputSenhaConfirmacao();

  let formItems = form.querySelectorAll(".form-content");

  let isValid = [...formItems].every((item) => {
    //every passa por todos os elementos para verificar, item por item
    return item.className === "form-content"; //retorna se tiverem a classe com error, se n tiverem será TRUE e passará na verificação
  });
  if (isValid) {
    alert("Cadastrado com sucesso!!!");
  }
}

//-------- ERROR INPUT AND FORM ---------
function errorInput(input, message) {
  //criar uma mensagem universal, pegando o input e passando a mensagem
  let formItem = input.parentElement; //para acessar o elemento pai, que é a DIV inteira que o input está dentro
  let textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.classList = "form-content error"; //para adicionar a classe do css
}

let tentativasParaLogar = 3;

function validacao() {
    var usuario = document.getElementById('user').value;
    var senha = document.getElementById('password').value;

    if (usuario == "admin" && senha == "admin") {
        alert("Logado com sucesso!");
        window.location = "index.html";
        return false;
    } else {
        tentativasParaLogar--;
        alert("Você tem " + tentativasParaLogar + " tentativas;");

        if (tentativasParaLogar == 0) {
            document.getElementById("user").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("botao").disabled = true;
            return false;
        }
    }
}
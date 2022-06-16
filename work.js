function entrarLogin(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == "admin" && senha == "admin"){
        location.href = "home.html"
    }
    else{
        alert('Usuário ou senha incorretos')
    }
}

function registrar() {
    location.href = "cadastro.html"
}


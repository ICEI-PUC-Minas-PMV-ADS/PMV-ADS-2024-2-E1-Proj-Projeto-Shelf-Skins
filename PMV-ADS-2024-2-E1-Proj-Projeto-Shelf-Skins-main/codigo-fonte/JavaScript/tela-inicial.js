function verificarEntradas() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if(!email || !password){
        alert("Por favor, preencha o e-mail ou senha.")
    } else{
        window.location.href = "Shelf Skins 2.html"
    }
}
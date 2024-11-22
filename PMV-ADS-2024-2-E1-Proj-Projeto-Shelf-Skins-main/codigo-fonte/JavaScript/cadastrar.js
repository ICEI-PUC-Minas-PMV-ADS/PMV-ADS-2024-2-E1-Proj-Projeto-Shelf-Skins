function validarFormulario() {
    const username = document.getElementById('username').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === "" || date === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    window.location.href = 'tela_de_login.html';
}
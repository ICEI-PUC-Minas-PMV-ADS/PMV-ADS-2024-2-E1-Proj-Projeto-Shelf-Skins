function login() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validações básicas
    if (username == "" || password == "") {
        alert("Deverá ser preenchido todos os campos.")
    } else{
        window.location.href = "Shelf Skins 2.html"
    }
}
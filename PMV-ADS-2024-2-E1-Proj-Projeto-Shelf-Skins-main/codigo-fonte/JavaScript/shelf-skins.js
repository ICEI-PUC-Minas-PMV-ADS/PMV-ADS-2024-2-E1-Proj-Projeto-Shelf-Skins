function searchGame() {
    const searchBar = document.getElementById("searchBar").value.toLowerCase();
    const csgoImg = document.getElementById("csgo-image");
    const pubgImg = document.getElementById("pubg-image");
    const dotaImg = document.getElementById("dota-image");

    csgoImg.style.display = "block";
    pubgImg.style.display = "block";
    dotaImg.style.display = "block";

    if (searchBar === "counter strike" || searchBar === "csgo") {
        pubgImg.style.display = "none";
        dotaImg.style.display = "none";
    } else if (searchBar === "pubg") {
        csgoImg.style.display = "none";
        dotaImg.style.display = "none";
    } else if (searchBar === "dota" || searchBar === "dota 2") {
        csgoImg.style.display = "none";
        pubgImg.style.display = "none";
    }
}
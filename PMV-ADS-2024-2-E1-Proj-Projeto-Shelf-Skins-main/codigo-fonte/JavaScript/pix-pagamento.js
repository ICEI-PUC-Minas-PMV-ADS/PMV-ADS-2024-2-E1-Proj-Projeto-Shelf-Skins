function gerarQRCode() {
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        value: document.getElementById('pix-key').value,
        size: 200,
    });
}

function copiarChavePix() {
    const pixKeyInput = document.getElementById("pix-key");
    pixKeyInput.select();
    pixKeyInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

window.onload = gerarQRCode;
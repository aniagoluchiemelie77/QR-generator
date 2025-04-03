document.getElementById("generate-btn").addEventListener("click", function () {
    const text = document.getElementById("text-input").value;

    if (!text) {
        alert("Please enter text or a URL to generate the QR code.");
        return;
    }

    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; // Clear any existing QR code

    const qrCode = new QRCode(qrcodeContainer, {
        text: text,
        width: 200,
        height: 200,
    });
});

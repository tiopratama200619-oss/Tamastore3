function cariGame() {
    const keyword = document
        .getElementById("search")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {
        const namaGame = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        card.style.display =
            namaGame.includes(keyword)
                ? "block"
                : "none";
    });
}
const diamonds =
document.querySelectorAll(".diamond-item");

diamonds.forEach(item => {

    item.addEventListener("click", () => {

        diamonds.forEach(d =>
            d.style.border = "none"
        );

        item.style.border =
        "3px solid #60a5fa";
    });

});
function beliDiamond(){

    const playerId =
    document.querySelector("input").value;

    const payment =
    document.getElementById(
        "payment-method"
    ).value;

    if(playerId === ""){
        alert("Masukkan User ID!");
        return;
    }

    if(payment === ""){
        alert("Pilih metode pembayaran!");
        return;
    }

    document.getElementById(
        "detail-pembayaran"
    ).innerHTML = `
        <strong>ID Player:</strong>
        ${playerId}
        <br><br>

        <strong>Metode:</strong>
        ${payment}
    `;

    document.getElementById(
        "payment-modal"
    ).style.display = "flex";
}

function tutupModal(){
    document.getElementById(
        "payment-modal"
    ).style.display = "none";
}

function bayar(){

    alert(
        "Pembayaran berhasil! (Simulasi)"
    );

    tutupModal();
}
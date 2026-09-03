/* =========================================
   MENGAMBIL ELEMENT
   ========================================= */

// Mengambil tombol surprise
const surpriseButton =
    document.getElementById("surpriseButton");

// Mengambil kotak pesan surprise
const surpriseMessage =
    document.getElementById("surpriseMessage");


/* =========================================
   TOMBOL SURPRISE
   ========================================= */

surpriseButton.addEventListener("click", function() {

    // Menampilkan pesan surprise
    surpriseMessage.classList.add("show");


    // Mengubah tulisan tombol
    surpriseButton.textContent = "Opened 💜";


    // Membuat tombol tidak bisa ditekan lagi
    surpriseButton.disabled = true;


    // Membuat efek confetti sederhana
    createConfetti();

});


/* =========================================
   CONFETTI
   ========================================= */

function createConfetti() {

    // Jumlah confetti
    const totalConfetti = 40;


    for (let i = 0; i < totalConfetti; i++) {

        // Membuat element baru
        const confetti =
            document.createElement("div");


        // Isi element
        confetti.textContent = "✦";


        // CSS langsung melalui JavaScript
        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
            Math.random() * 15 + 10 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";


        // Durasi animasi random
        const duration =
            Math.random() * 3 + 2;


        // Animasi jatuh
        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    duration * 1000,

                easing: "ease-out",

                fill: "forwards"
            }

        );


        // Masukkan confetti ke halaman
        document.body.appendChild(confetti);


        // Hapus setelah selesai
        setTimeout(function() {

            confetti.remove();

        }, duration * 1000);

    }

}
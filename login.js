/* =========================================
   DATA LOGIN
   ========================================= */

// Username yang benar
const correctUsername = "Safira Feronika Putri";

// Password yang benar
const correctPassword = "Sanzie";


/* =========================================
   MENGAMBIL ELEMENT HTML
   ========================================= */

// Mengambil form login
const loginForm = document.getElementById("loginForm");

// Mengambil input username
const usernameInput = document.getElementById("username");

// Mengambil input password
const passwordInput = document.getElementById("password");

// Mengambil tempat pesan error
const errorMessage = document.getElementById("errorMessage");


/* =========================================
   KETIKA FORM DI-SUBMIT
   ========================================= */

loginForm.addEventListener("submit", function(event) {

    // Mencegah halaman refresh
    event.preventDefault();


    // Mengambil isi username
    const username = usernameInput.value.trim();

    // Mengambil isi password
    const password = passwordInput.value;


    /* =====================================
       CEK USERNAME & PASSWORD
       ===================================== */

    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        // Login berhasil

        errorMessage.textContent = "";

        // Memberikan efek teks sementara
        loginForm.querySelector("button").textContent =
            "Welcome ✨";


        // Menunggu sebentar sebelum pindah halaman
        setTimeout(function() {

            window.location.href = "home.html";

        }, 700);


    } else {

        // Login gagal

        errorMessage.textContent =
            "Username atau password salah!";

        // Password dikosongkan lagi
        passwordInput.value = "";

    }

});
function Yup() {
    alert("Yay! lvya!!!!");
}

function nah() {
    var x = Math.random() * 100; // Gera um número entre 0 e 100
    var y = Math.random() * 100; // Gera um número entre 0 e 100
    const btn = document.getElementById("nah");

    btn.style.position = "absolute"; // Certifica-se de que o botão pode ser movido
    btn.style.left = x + "%";
    btn.style.top = y + "%";
}

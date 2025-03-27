// Exemplo de script para contador regressivo
function updateCountdown() {
    const eventDate = new Date("2025-05-15T09:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m`;
}

// Atualiza o contador a cada minuto
setInterval(updateCountdown, 60000);
updateCountdown(); // Chama imediatamente para evitar delay inicial

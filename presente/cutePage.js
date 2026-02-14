document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btn-surpresa");
    const jumpscare = document.getElementById("jumpscare");
    const confettiWrapper = document.getElementById("confetti-wrapper");
    const somSusto = document.getElementById("som-susto");

    function criarConfete() {
        const confete = document.createElement("div");
        const cores = ["#ff4e88", "#ff1e6c", "#ffd700", "#00f2ff", "#70ff00"];
        
        confete.classList.add("confete");
        confete.style.left = Math.random() * 100 + "vw";
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        confete.style.duration = Math.random() * 3 + 2 + "s"; // Velocidades diferentes
        confete.style.animationDuration = confete.style.duration;
        
        confettiWrapper.appendChild(confete);

        // Remove o confete depois que ele cai para não pesar o site
        setTimeout(() => {
            confete.remove();
        }, 5000);
    }

    if (botao) {
        botao.addEventListener("click", () => {
            jumpscare.style.display = "flex";
            
            if (somSusto) {
                somSusto.play().catch(() => console.log("Áudio bloqueado"));
            }

            // Começa a criar confetes sem parar (a cada 100ms)
            setInterval(criarConfete, 100);
        });
    }
});
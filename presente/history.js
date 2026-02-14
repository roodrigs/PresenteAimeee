document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".foto-card");
    const modal = document.getElementById("zoom-modal");
    const imgAmpliada = document.getElementById("foto-ampliada");
    const legendaAmpliada = document.getElementById("legenda-ampliada");
    const musica = document.getElementById("musica1");

    // Função para tocar a música
    const tocarMusica = () => {
        if (musica && musica.paused) {
            musica.play().catch(e => console.log("O navegador bloqueou o autoplay. O som iniciará ao interagir com as fotos."));
        }
    };

    // Tenta tocar ao mover o mouse ou no primeiro clique (contorno de segurança)
    document.body.addEventListener("click", tocarMusica, { once: true });

    cards.forEach(card => {
        // 1. Efeito de Camadas (Z-index)
        card.addEventListener("mouseenter", () => {
            cards.forEach(c => c.style.zIndex = "1");
            card.style.zIndex = "500"; // Z-index alto para os cards maiores não cortarem
        });

        // 2. Lógica de Zoom e Início da Música
        card.addEventListener("click", () => {
            tocarMusica();

            const imgInterna = card.querySelector("img");
            const textoInterno = card.querySelector("p");

            if (imgInterna && modal) {
                imgAmpliada.src = imgInterna.src;
                legendaAmpliada.innerText = textoInterno ? textoInterno.innerText : "";
                modal.style.display = "flex";
            }
        });
    });

    if (modal) {
        modal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Efeito de atraso aleatório para animações CSS (se houver)
    cards.forEach(card => {
        const randomDelay = Math.random() * 2;
        card.style.animationDelay = `${randomDelay}s`;
    });
});
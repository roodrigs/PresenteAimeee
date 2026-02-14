let coracoesAtivos = false;

function iniciar() {
    const intro = document.getElementById("intro");
    const conteudo = document.getElementById("conteudo");
    const musica = document.getElementById("musica");

    intro.style.opacity = "0";
    setTimeout(() => {
        intro.style.display = "none";
        conteudo.style.display = "block";
        if (!coracoesAtivos) {
            setInterval(criarCoracao, 700);
            coracoesAtivos = true;
        }
    }, 800);

    musica.play().catch(() => console.log("Áudio aguardando clique."));
}

function criarCoracao() {
    let coracao = document.createElement("div");
    coracao.innerHTML = "❤️";
    coracao.classList.add("coracao");
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(coracao);
    setTimeout(() => coracao.remove(), 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelop");
    const sticker = document.querySelector(".envelop__sticker");

    sticker.addEventListener("click", () => {
        sticker.classList.add("removed");
        setTimeout(() => {
            envelope.classList.add("open");
        }, 300);
    });

    document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".foto-card");
    const modal = document.getElementById("zoom-modal");
    const imgAmpliada = document.getElementById("foto-ampliada");
    const legendaAmpliada = document.getElementById("legenda-ampliada");
    const musica = document.getElementById("musica-galeria");

    // Função para tocar música (resolve bloqueio de navegadores)
    const ativarMusica = () => {
        musica.play().catch(() => console.log("Aguardando interação..."));
    };

    cards.forEach(card => {
        // Trazer para frente no hover
        card.addEventListener("mouseenter", () => {
            cards.forEach(c => c.style.zIndex = "1");
            card.style.zIndex = "100";
        });

        // Abrir Zoom ao clicar
        card.addEventListener("click", () => {
            ativarMusica(); // Toca a música no primeiro clique
            
            const imagemSrc = card.querySelector("img").src;
            const textoLegenda = card.querySelector("p").innerText;

            imgAmpliada.src = imagemSrc;
            legendaAmpliada.innerText = textoLegenda;
            modal.style.display = "flex";
        });
    });

    // Fechar ao clicar em qualquer lugar do fundo preto
    modal.addEventListener("click", () => {
        modal.style.display = "none";
        }); 
    });
});
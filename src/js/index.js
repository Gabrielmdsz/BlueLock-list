const listaSelecaoBluelocks = document.querySelectorAll(".bluelock");
listaSelecaoBluelocks.forEach(bluelock => {
    bluelock.addEventListener("click", () => {
        const cartaoBluelockAberto = document.querySelector(".aberto");
        cartaoBluelockAberto.classList.remove("aberto");

        const idBluelockSelecionado = bluelock.attributes.id.value;

        const idDoCartaoBluelockParaAbrir = "cartao-" + idBluelockSelecionado;

        const cartaoBluelockParaAbrir = document.getElementById(idDoCartaoBluelockParaAbrir);
        cartaoBluelockParaAbrir.classList.add("aberto");


        const bluelockAtivoNaListagem = document.querySelector(".ativo");
        bluelockAtivoNaListagem.classList.remove("ativo");

        const bluelockSelecionadoNaListagem = document.getElementById(idBluelockSelecionado);
        bluelockSelecionadoNaListagem.classList.add("ativo");
    })
})
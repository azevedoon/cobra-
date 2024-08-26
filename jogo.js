function jogar(){
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    placar.desenhar();
    if (cobra.vida > 0)
    requestAnimationFrame(jogar)
    else{
        placar.nomeJogo="Fim de jogo"
        placar.desenhar();
    }
}
jogar();
document.addEventListener("keydown",(evento) =>{
    if (evento.key == 6 ) cobra.direcao=0;
    if (evento.key == 2 ) cobra.direcao=90;
    if (evento.key == 4 ) cobra.direcao=180;
    if (evento.key == 8 ) cobra.direcao=270;
    console.log("Tecla Pressionada: " + evento.key);
  });

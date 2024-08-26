const placar = {
largura:800,
altura:60,
corFundo: "black",
corTexto: "white",
nomeJogo: "IFRJ Cobra",
pontos:0,

desenhar(){
canvasCtx.fillStyle=this.corFundo;
canvasCtx.fillRect(0,0,
    this.largura,
    this.altura
    )
canvasCtx.fillStyle=this.corTexto;
canvasCtx.font="26px Fantasy";
canvasCtx.textAlign="center";
canvasCtx.textBaselibe="midle";
canvasCtx.fillText(this.nomeJogo,400,30);
canvasCtx.font="16px fantasy";
canvasCtx.textAlign="rigth";
canvasCtx.fillText(this.pontos+"pts",780,45);
canvasCtx.fillText(cobra.vida+"vida(s)",780,15);
    }
}   
placar.desenhar();
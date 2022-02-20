// mudar imagem ao clicar no botão
function confere(conf) {
    if(conf == 1){
         document.getElementById('image-jogador').src="img/pedra.png";
    }else if (conf == 2){
         document.getElementById('image-jogador').src="img/papel.png";
    }else{
         document.getElementById('image-jogador').src="img/tesoura.png";
    }
 }
 
 // definir vencedor e deixar imagem do "Computador" aleatória
 function vencedor (vJogad) {
     let vComp
     
     vComp = Math.floor(Math.random() * (4 - 1)) + 1;
 
     if ((vComp == 1) && (vJogad == 1)) {
         document.getElementById('image-computador').src="img/pedra1.png";
         document.getElementById('venceu').innerHTML = 'Empatou'
     }else if((vComp == 1) && (vJogad == 2)){
         document.getElementById('image-computador').src="img/pedra1.png";
         document.getElementById('venceu').innerHTML = 'Jogador venceu';
         placar(1);
     }else if((vComp == 1) && (vJogad == 3)){
         document.getElementById('image-computador').src="img/pedra1.png";
         document.getElementById('venceu').innerHTML = 'Computador venceu'
         placar(2);
 
     }else if ((vComp == 2) && (vJogad == 2)) {
         document.getElementById('image-computador').src="img/papel1.png";
         document.getElementById('venceu').innerHTML = 'Empatou'
     }else if ((vComp == 2) && (vJogad == 1)) {
         document.getElementById('image-computador').src="img/papel1.png";
         document.getElementById('venceu').innerHTML = 'Computador venceu'
         placar(4);
     }else if ((vComp == 2) && (vJogad == 3)) {
         document.getElementById('image-computador').src="img/papel1.png";
         document.getElementById('venceu').innerHTML = 'Jogador venceu'    
         placar(6);
 
     }else if ((vComp == 3) && (vJogad == 3)) {
         document.getElementById('image-computador').src="img/tesoura1.png";
         document.getElementById('venceu').innerHTML = 'Empatou'
     }else if ((vComp == 3) && (vJogad == 1)) {
         document.getElementById('image-computador').src="img/tesoura1.png";
         document.getElementById('venceu').innerHTML = 'Jogador venceu'
         placar(8);
 
     }else if ((vComp == 3) && (vJogad == 2)) {
         document.getElementById('image-computador').src="img/tesoura1.png";
         document.getElementById('venceu').innerHTML = 'Computador venceu'
         placar(9);
     }
 }
 
 // marcar placar do jogo
 let contJog = 0
 let contPc = 0
 function placar(num) {
 
     if((num == 1) || (num == 6) || (num == 8)){
         contJog = contJog + 1
         document.getElementById('placar-jog').innerHTML = 'Jogador = ' + contJog
     }else{
         contPc = contPc + 1
         document.getElementById('placar-pc').innerHTML = 'Computador = ' + contPc
     }
 }
 
 //novo jogo - zerar placar
 function novoJogo() {
     contJog = 0
     contPc = 0
     document.getElementById('placar-jog').innerHTML = 'Jogador = ' + contJog
     document.getElementById('placar-pc').innerHTML = 'Computador = ' + contPc
     document.getElementById('venceu').innerHTML = 'Vencedor' 
     document.getElementById('image-computador').src=""
     document.getElementById('image-jogador').src=""    
 } 
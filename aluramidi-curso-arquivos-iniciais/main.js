function tocaSom(idElementAudio){
   const elemento = document.querySelector(idElementAudio);
   
   if (elemento === null) {
        alert('elemento não encontrado');
   }else if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
   }



}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydonw = function (evento) {
        
        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }    

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

   
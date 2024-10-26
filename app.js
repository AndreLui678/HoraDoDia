const body = document.querySelector('body')
const tela = document.querySelector('.container');
const horaTxt = document.getElementById('hora');
const img = document.getElementById('image');

function horario() {

 var horaDeAgora = new Date()
 var hora = horaDeAgora.getHours()
 var min = horaDeAgora.getMinutes().toString().padStart(2, 0)
 var turno;

 if (hora >= 6 && hora <= 12) {
  body.style.backgroundImage = 'url("ceuAzul.jpg")';
  tela.style.backgroundColor = 'cornflowerblue'
  img.src = 'manha.jpg'
  turno = 'manhã'
 } else if (hora > 12 && hora <= 18) {
  body.style.backgroundImage = 'url("Ceu-Tarde.jpg")';
  tela.style.backgroundColor = 'darksalmon'
  img.src = 'tarde.jpg'
  turno = 'tarde'
 } else if (hora > 18 || hora < 6) {
  body.style.backgroundImage = 'url("Ceu-Escuro.jpg")';
  tela.style.backgroundColor = 'darkBlue'
  img.src = 'noite.jpg'
  turno = 'noite'
 }

 horaTxt.innerHTML = `Agora são ${hora}:${min} horas da ${turno}`
}

setInterval(horario, 1000)
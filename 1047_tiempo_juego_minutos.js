var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let numero = lines.shift().split(" ");
let horaInicio = parseInt(numero.shift());
let minutosInicio = parseInt(numero.shift());
let horaFin = parseInt(numero.shift());
let minutosFin = parseInt(numero.shift());

let horas = 0;
let minutos = 0;

if (
  horaInicio <= 24 &&
  minutosInicio >= 1 &&
  horaFin <= 24 &&
  minutosFin >= 1
) {
  if (horaInicio === horaFin && minutosInicio === minutosFin) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
  } else if (horaInicio > horaFin) {
    horas = 24 - horaInicio + horaFin;

    if (minutosInicio > minutosFin) {
      minutos = 60 - minutosInicio + minutosFin;

      if (minutos < 60) {
        horas -= 1;
      }
    } else {
      minutos = minutosFin - minutosInicio;
    }
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
  } else if (horaInicio < horaFin) {
    horas = horaFin - horaInicio;

    if (minutosInicio > minutosFin) {
      minutos = 60 - minutosInicio + minutosFin;

      if (minutos < 60) {
        horas -= 1;
      }
    } else {
      minutos = minutosFin - minutosInicio;
    }
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
  } else if (horaInicio === horaFin) {
    if (minutosInicio > minutosFin) {
      minutos = 60 - minutosInicio + minutosFin;
      horas = 23;
    } else {
      horas = 0;
      minutos = minutosFin - minutosInicio;
    }
    console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
  }
}

function rankeado(qtdVitorias, qtdDerrotas) {
  let resultado = qtdVitorias - qtdDerrotas;
  if (resultado < 10) {
    console.log("O elo é ferro");
  } else if (resultado >= 11 && resultado < 21) {
    console.log("O elo é bronze");
  } else if (resultado >= 21 && resultado < 51) {
    console.log("O elo é prata");
  } else if (resultado >= 51 && resultado < 81) {
    console.log("O elo é ouro");
  } else if (resultado >= 81 && resultado < 91) {
    console.log("O elo é bronze");
  } else if (resultado >= 91 && resultado < 100) {
    console.log("O elo é bronze");
  } else if (resultado === 101) {
    console.log("O elo é imortal");
  }
}

rankeado(20, 5);



function calcularIdadeEAnosTrabalhando(dataNascimento, dataInicioTrabalho) {
  const hoje = new Date();
  const milissegundosNoAno = 365.25 * 24 * 60 * 60 * 1000;

  const idade = Math.floor((hoje - dataNascimento) / milissegundosNoAno);
  const anosTrabalhando = Math.floor((hoje - dataInicioTrabalho) / milissegundosNoAno);

  return { idade, anosTrabalhando };
}

const dataNascimento = new Date("1994-10-19");
const dataInicioTrabalho = new Date("2020-01-01");

const { idade, anosTrabalhando } = calcularIdadeEAnosTrabalhando(dataNascimento, dataInicioTrabalho);

document.getElementById("idade").textContent = idade;
document.getElementById("anosTrabalhando").textContent = anosTrabalhando;


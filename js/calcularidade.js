

  // Função para calcular a quantidade de anos trabalhados   // Função para calcular a idade
function calcularIdadeEAnosTrabalhados(dataNascimento, dataInicioTrabalho) {
  const hoje = new Date();
  const milissegundosNoAno = 365.25 * 24 * 60 * 60 * 1000;

  const idade = Math.floor((hoje - dataNascimento) / milissegundosNoAno);
  const anosTrabalhando = Math.floor((hoje - dataInicioTrabalho) / milissegundosNoAno);

  return { idade, anosTrabalhando };
}
 // Data de nascimento no formato "MM/DD/YYYY"
const dataNascimento = new Date("19/10/1994");
  // Data de início de trabalho na área no formato "MM/DD/YYYY"
const dataInicioTrabalho = new Date("01/01/2020");

const { idade, anosTrabalhando } = calcularIdadeEAnosTrabalhados(dataNascimento, dataInicioTrabalho);

document.getElementById("idade").textContent = idade;
document.getElementById("anosTrabalhando").textContent = anosTrabalhando


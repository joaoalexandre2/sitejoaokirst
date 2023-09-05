
  // Data de nascimento no formato "MM/DD/YYYY"
  const dataNascimento = new Date("01/01/1995");
  
  // Data de início de trabalho na área no formato "MM/DD/YYYY"
  const dataInicioTrabalho = new Date("01/01/2020");

  // Função para calcular a idade
  function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const diff = hoje - dataNascimento;
    const idade = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    return idade;
  }

  // Função para calcular a quantidade de anos trabalhados
  function calcularAnosTrabalhando(dataInicioTrabalho) {
    const hoje = new Date();
    const diff = hoje - dataInicioTrabalho;
    const anosTrabalhando = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    return anosTrabalhando;
  }

  // Atualizar os elementos HTML com a idade e a quantidade de anos trabalhados calculados
  const idadeElement = document.getElementById("idade");
  const anosTrabalhandoElement = document.getElementById("anosTrabalhando");
  idadeElement.textContent = calcularIdade(dataNascimento);
  anosTrabalhandoElement.textContent = calcularAnosTrabalhando(dataInicioTrabalho);


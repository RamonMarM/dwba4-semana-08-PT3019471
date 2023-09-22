class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }
  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }
  media(){
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4)
  }
  situacao() {
    var flag;
    if (this.media() > 6){
      flag = 'Aprovado';
    }else{
      flag = 'Reprovado';
    }
    return flag;
  }
}

var alunos = [
  new Aluno('Marcelo','Genio', 10, 10),
  new Aluno('Pedro','Dois', 3, 6),
  new Aluno('Raul', 'Laranja', 5, 2),
  new Aluno('Pelso', 'Santos', 9, 1),
  new Aluno('Cadu', 'Correia', 7, 10)
];

function Info(alunos) {
  for (var aluno of alunos) {
    alert('Nome completo: '+aluno.nomeCompleto()+'\nMédia: ' +aluno.media()+'\nSituação: ' + aluno.situacao());
  }
}
Info(alunos);
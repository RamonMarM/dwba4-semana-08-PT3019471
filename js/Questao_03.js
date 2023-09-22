var nome_aluno = new Array ("João da Silva", "Marcelo Genio", "Paranielo Silveirn");
var n1 = new Array (7, 10, 2);
var n2 = new Array (8.5, 9.9, 1);

function MostrarNota(){ 
  for(var i=0; i < 3; i++){
    alert("Nome do aluno: "+nome_aluno[i]+"\n nota 1: "+n1[i]+"\n nota 2: "+n2[i]);
    var nf = n1[i]*0.6 + n2[i]*0.4;
    alert("Nome do aluno: "+nome_aluno[i]+"\n Nota Final: "+nf);
  }
}

MostrarNota();
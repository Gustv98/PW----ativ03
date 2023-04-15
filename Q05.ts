interface Cidade {
  nome: string;
  estado: string;
  populacao: number;
  clima: string;
}

function descreverCidade(cidade: Cidade): string {
  return `Cidade: ${cidade.nome} Estado: ${cidade.estado}, População: ${cidade.populacao}, Clima: ${cidade.clima}.`;
}

const minhaCidade: Cidade = {
  nome: 'São Paulo',
  estado: 'São Paulo',
  populacao: 12325232,
  clima: 'tropical de altitude',
};

console.log(descreverCidade(minhaCidade));

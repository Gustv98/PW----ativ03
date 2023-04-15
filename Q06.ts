interface Restaurante {
  nome: string;
  cidade: string;
}

function Restaurantes(restaurantes: Restaurante[], cidade: string): Restaurante[] {
  return restaurantes.filter(restaurante => restaurante.cidade === cidade);
}

const restaurantes: Restaurante[] = [
  { nome: "Restaurante A", cidade: "São Paulo" },
  { nome: "Restaurante C", cidade: "São Paulo" },
];

const restaurantesSP = Restaurantes(restaurantes, "São Paulo");
console.log(restaurantesSP);

function arraysIguais(a: string[][], b: string[][]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) {
      return false;
    }

    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) {
        return false;
      }
    }
  }

  return true;
}

const matriz1 = [['a', 'b'], ['c', 'd']];
const matriz2 = [['a', 'b'], ['c', 'd']];
const matriz3 = [['a', 'b'], ['c', 'd', 'e']];
const matriz4 = [['a', 'b'], ['d', 'c']];

console.log(arraysIguais(matriz1, matriz2)); 
console.log(arraysIguais(matriz1, matriz3));
console.log(arraysIguais(matriz1, matriz4));

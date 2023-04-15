function comparar(a: string[][], b: string[][]): string[][] | undefined {
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) {
      return undefined;
    }
  }

  
  return a;
}

const matrix1: string[][] = [['foo', 'bar'], ['baz', 'qux']];
const matrix2: string[][] = [['foo', 'bar'], ['baz', 'qux']];
const matrix3: string[][] = [['foo', 'bar'], ['baz', 'qux', 'quux']];

console.log(comparar(matrix1, matrix3));

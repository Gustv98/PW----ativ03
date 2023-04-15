function arraysIguais(a: string[], b: string[]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  a.sort();
  b.sort();

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

const array1 = ['foo', 'bar', 'bar'];
const array2 = ['foo', 'bar', 'bar'];

if (arraysIguais(array1, array2)) {
  console.log('Os arrays são iguais');
} else {
  console.log('Os arrays são diferentes');
}

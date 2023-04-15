function compareArrays(a: string[], b: string[]): string[] | undefined {
  if (a.length !== b.length) {
    return undefined;
  }
  const comparando = a.filter((element, index) => element === b[index]);
  return comparando;
}

const array1 = ["a", "b", "c"];
const array2 = ["a", "d"];

const result = compareArrays(array1, array2);

if (result === undefined) {
  console.log("Os arrays têm tamanhos diferentes");
} else {
  console.log(`Os arrays têm ${result.length} elementos iguais:`);
  console.log(result);
}

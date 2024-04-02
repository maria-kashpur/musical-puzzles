export default function createArrayOfNums(n: number): number[] {
  return Array.from({ length: n }, (_, index) => index);
}

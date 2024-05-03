export function generateRandomArray(length: number): number[] {
  const randomArray: number[] = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates random number between 1 and 100
    randomArray.push(randomNumber);
  }
  return randomArray;
}

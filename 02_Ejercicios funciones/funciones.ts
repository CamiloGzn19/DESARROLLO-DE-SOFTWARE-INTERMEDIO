// Ejercicio funciones

const original: number[] = [1, 2, 3, 1];

function encrypt(num: number, key: number): number {
  return num + key;
}

function decrypt(num: number, key: number): number {
  return num - key;
}

function secret(message: number[], transform: (num: number, key: number) => number, key: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < message.length; i++) {
    result.push(transform(message[i], key));
  }
  return result;
}

const encrypted = secret(original, encrypt, 1);
console.log(encrypted);
const decrypted = secret(encrypted, decrypt, 1);
console.log(decrypted);

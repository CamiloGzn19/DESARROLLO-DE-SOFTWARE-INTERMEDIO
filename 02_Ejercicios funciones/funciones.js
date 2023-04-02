"use strict";
// Ejercicio funciones
const original = [1, 2, 3, 1];
function encrypt(num, key) {
    return num + key;
}
function decrypt(num, key) {
    return num - key;
}
function secret(message, transform, key) {
    const result = [];
    for (let i = 0; i < message.length; i++) {
        result.push(transform(message[i], key));
    }
    return result;
}
const encrypted = secret(original, encrypt, 1);
console.log(encrypted);
const decrypted = secret(encrypted, decrypt, 1);
console.log(decrypted);

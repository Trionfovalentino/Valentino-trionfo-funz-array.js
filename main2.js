let numeri = [3, 5, 10, 2, 8];


let somma = numeri.reduce((acc, n) => acc + n, 0);

let media = somma / numeri.length;


let minoriDellaMedia = numeri.filter(n => n < media);


let maggioriDellaMedia = numeri.filter(n => n > media);

console.log("Media: " + media);
console.log("Valori minori: ", minoriDellaMedia);
console.log("Quantità minori: " + minoriDellaMedia.length);
console.log("Quantità maggiori: " + maggioriDellaMedia.length);
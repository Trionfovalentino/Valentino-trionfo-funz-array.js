function controllaPalindroma(frase) {
    
    let testoPulito = frase.replace(/\W/g, "").toLowerCase();

    let testoInvertito = testoPulito.split("").reverse().join("");

   
    return testoPulito === testoInvertito;
}


console.log(controllaPalindroma("i topi non avevano nipoti")); // true
console.log(controllaPalindroma("Anna"));                     // true
console.log(controllaPalindroma("JavaScript"));               // false
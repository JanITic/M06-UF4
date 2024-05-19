function calcularDivisio(divident, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor !== 0) {
            resolve(divident / divisor);
        } else {
            reject("no es pot dividir entre zero");
        }
    });
}

const dividend = 10;
const divisor = 2; 
calcularDivisio(dividend, divisor)
    .then(result => console.log(`resultat: ${result}`))
    .catch(error => console.error(error));

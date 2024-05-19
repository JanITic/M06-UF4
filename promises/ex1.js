function esDivisibleEntreDos(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve(`${numero} es divisible`);
        } else {
            reject(`${numero} no es divisible`);
        }
    });
}

const num = 6;
esDivisibleEntreDos(num)
    .then(result => console.log(result))
    .catch(error => console.error(error));

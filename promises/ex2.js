const promesaValor = new Promise((resolve, reject) => {
    const valor = 5; 
    if (valor >= 0 && valor <= 10) {
        resolve(`${valor} esta entre 0 i 10`);
    } else {
        reject(`${valor} no esta entre 0 i 10`);
    }
});

promesaValor
    .then(result => console.log(result))
    .catch(error => console.error(error));

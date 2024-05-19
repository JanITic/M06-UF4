function esVocal(lletra) {
    const arr = ["a", "e", "i", "o", "u"];
    return new Promise((resolve, reject) => {
        if (arr.includes(lletra)) {
            resolve(`${lletra} es vocal.`);
        } else {
            reject(`${lletra} no es vocal.`);
        }
    });
}

const lletra = "e"; 
esVocal(lletra)
    .then(result => console.log(result))
    .catch(error => console.error(error));

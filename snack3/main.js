'use strict';

/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/
function biciMinore(array){
    const {nome,peso}=array[0];
    let min=peso,nomeMin=nome;
    for (let i=1;i<array.length;i++){
        const {peso:tmp,nome:tmp2}=array[i];
        if (tmp < min) {
            min=tmp;
            nomeMin=tmp2;
        }
    }
    return `Nome: ${nomeMin} Peso: ${min}`;
}

let n;
do{
    n=Number(prompt("inserisci il numero di bici da inserire"));
}while(isNaN(n));
let array=[];
for (let i=0;i<n;i++){
    const nome=prompt("inserisci il nome della bici");
    let peso;
    do{
        peso=Number(prompt("inserisci il peso della bici"));
    }while(isNaN(peso));
    array.push({nome,peso});
}
console.log(biciMinore(array));
'use strict';
/*
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/

const studenti=[
    {
        id:213,
        nome:'Marco della Rovere',
        sommaEsami: 78
    },
    {
        id:110,
        nome:'Paola Cortellessa',
        sommaEsami: 96
    },
    {
        id:250,
        nome:'Andrea Mantegna',
        sommaEsami: 48
    },
    {
        id:145,
        nome:'Gaia Borromini',
        sommaEsami: 74
    },
    {
        id:196,
        nome:'Luigi Grimaldello',
        sommaEsami: 68
    },
    {
        id:102,
        nome:'Piero della Francesca',
        sommaEsami: 50
    },
    {
        id:120,
        nome:'Francesca da Polenta',
        sommaEsami: 84
    }
];
//punto 1
const studentiMaiuscoli=studenti.map(element=>element.nome.toUpperCase());
studentiMaiuscoli.forEach(element=>console.log(element));
//---------------
console.log("---");
//---------------
//punto 2
const studentiOver70=studenti.filter((element)=>{
    if (element.sommaEsami > 70) return true;
    return false;
});
studentiOver70.forEach(element=>console.log(element));
//---------------
console.log("---");
//---------------
//punto 3
const studentiOver70IdOver120=studenti.filter((element)=>{
    if (element.sommaEsami > 70 && element.id > 120) return true;
    return false;
});
studentiOver70IdOver120.forEach(element=>console.log(element));
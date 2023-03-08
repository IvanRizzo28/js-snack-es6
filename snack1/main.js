'use strict';
/*
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: 
`[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
*/

const invitati=['Brad Pitt','Johnny Depp','Lady Gaga','Cristiano Ronaldo','Georgina Rodriguez','Chiara Ferragni','Fedez','George Clooney','Amal Clooney','Maneskin'];
const tavolo='Tavolo vip';

const lista=invitati.map((element,index)=>{
    return {
        nome: element,
        posto: index+1,
        tavolo: tavolo
    };
});

lista.forEach(element => console.log(`
Tavolo: ${element.tavolo} --- Nome: ${element.nome} --- Posto: ${element.posto}

`));
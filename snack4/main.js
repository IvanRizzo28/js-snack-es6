'use strict';
/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
*/
function randomNumber(){
    return Math.floor(Math.random() * 100);
}
const squadra={
    puntiFatti: 0,
    falliSubiti: 0
};
const squadre=[];
squadre.push({...squadra,nome: "juventus"}); squadre.push({...squadra,nome: "milan"}); squadre.push({...squadra,nome: "inter"}); squadre.push({...squadra,nome: "napoli"});
const tmp=squadre.map(element =>{
    element.falliSubiti=Math.floor(Math.random() * 100);
    element.puntiFatti=Math.floor(Math.random() * 100);
    return element;
});
console.log(tmp);
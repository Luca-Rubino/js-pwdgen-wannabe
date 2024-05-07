// richiesta nome utente
const userName = prompt ("Il tuo nome");

// richiesta cognome utente
const userSecondName = prompt ("Il tuo cognome");

// richiesta colore utente
const preferColor = prompt ("Il tuo colore preferito");

// costante fissa
const userData = 24;

// scrittura in console dei dati acquisiti
console.log(userName + userSecondName + preferColor + userData);

// scrittura in html dei dati acquisiti
document.getElementById('output-generetor').innerHTML = userName + userSecondName + preferColor + userData;
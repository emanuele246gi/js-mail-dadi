// Primo dado
var primo = Math.floor(Math.random() * 6 + 1);

// Secondo dado
var secondo = Math.floor(Math.random() * 6 + 1);

// Risultato
var risultato;

if (primo > secondo){
    risultato = 'Vittoria!';
}

else if (primo < secondo){
    risultato = 'Ritenta!';
}

else{
    risultato = 'Pareggio!';
}

document.getElementById('primo').innerHTML += primo
document.getElementById('secondo').innerHTML += secondo
document.getElementById('risultato').innerHTML = risultato
// 1. Chiedere il nome

var nome = prompt('Qual è il tuo nome?');

// 2. Chiedere il cognome

var cognome = prompt('Qual è il tuo cognome?');

// 3. Chiedere il colore preferito

var colore = prompt('Qual è il tuo colore preferito?');

// 4. Output

var password = nome + cognome + colore + '19';

document.getElementById('nome_id').innerHTML = 'Benvenuto/a ' + nome + ' ' + cognome;
document.getElementById('color_id').innerHTML = colore;
document.getElementById('password_id').innerHTML = password;

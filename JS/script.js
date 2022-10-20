/*
prezzo del biglietto definito in base ai Km (0.21€ al Km)
chiedere il numero di Km che il passeggero vuole percorrere
chiedere l'età del passeggero

SE il passeggero è minorenne
  - applicare uno sconto del 20%
ALTRIMENTI SE il passeggero ha più 65 anni
  - applicare sconto del 40%
ALTRIMENTI 
  -non applicare nessuno sconto 
FINE SE
*/

const priceKm = 0.21;

let Km = prompt("Quanti chilometri devi percorrere?");
Km = parseInt(Km);

let eta = prompt("Quanti anni hai?");
eta = parseInt(eta);

// Prezzo totale senza sconto (per età dai 19 ai 65)
let totalPriceKm = priceKm * Km;
totalPriceKm = totalPriceKm.toFixed(2);

// Prezzo totale per i minorenni
let totalPriceMin = totalPriceKm - totalPriceKm * 0.2;
totalPriceMin = totalPriceMin.toFixed(2);

// Prezzo totale per gli over 65
let totalPriceOver = totalPriceKm - totalPriceKm * 0.4;
totalPriceOver = totalPriceOver.toFixed(2);

if (eta < 18) {
  console.log(`Il costo del tuo biglietto è: ${totalPriceMin}€`);
} else if (eta > 65) {
  console.log(`Il costo del tuo biglietto è: ${totalPriceOver}€`);
} else {
  console.log(`Il costo del tuo biglietto è: ${totalPriceKm}€`);
}

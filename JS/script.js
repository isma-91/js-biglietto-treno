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

const totalPriceKm = priceKm * Km;

if (eta < 18) {
  console.log(
    `Il costo del tuo biglietto è: ${totalPriceKm - totalPriceKm * 0.2}€`
  );
} else if (eta > 65) {
  console.log(
    `Il costo del tuo biglietto è: ${totalPriceKm - totalPriceKm * 0.4}€`
  );
} else {
  console.log(`Il costo del tuo biglietto è: ${totalPriceKm}€`);
}

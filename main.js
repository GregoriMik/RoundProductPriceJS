//Obliczenia ceny produktu z podatkiem
const price = 80.99;
const tax =23;

console.log(`Do zapłaty: ${price +(price*tax)/100} złotych`)

console.log(`Do zapłaty: ${(price +(price*tax)/100).toFixed(2)} złotych`)

//.toFixed -> metoda zaokrąglania wyniku do(ilość miejsc po przecinku)
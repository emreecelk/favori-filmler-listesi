let filmler = [];
let filmSayisi = parseInt(prompt("Kaç tane favori filminiz var?"));

for (let i = 0; i < filmSayisi; i++) {
    let film = prompt(`Favori filminizi girin (Film ${i + 1}):`);
    filmler.push(film);
}

filmler.sort();

console.log("Alfabetik sıraya göre favori filmleriniz:");
for (let i = 0; i < filmler.length; i++) {
    console.log(filmler[i]);
}

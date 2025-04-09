function pokazWynik(funkcja, opis) {
    let tekst = document.getElementById("liczba").value;
    let liczba = parseFloat(tekst);
    let wynik = document.getElementById("wynik");
  
    if (isNaN(liczba)) {
      wynik.innerHTML = "Wpisz poprawną liczbę!";
      return;
    }
  
    let rezultat = funkcja(liczba);
    wynik.innerHTML = opis + ": " + rezultat;
  }
  
  let floorBtn = document.getElementById("floorBtn");
  let ceilBtn = document.getElementById("ceilBtn");
  let roundBtn = document.getElementById("roundBtn");
  let truncBtn = document.getElementById("truncBtn");
  
  floorBtn.onclick = function () {
    pokazWynik(Math.floor, "Zaokraglenie w dol");
  };
  
  ceilBtn.onclick = function () {
    pokazWynik(Math.ceil, "Zaokraglenie w gore");
  };
  
  roundBtn.onclick = function () {
    pokazWynik(Math.round, "Zaokraglenie do najblizszej liczby");
  };
  truncBtn.onclick = function () {
    pokazWynik(Math.trunc, "Calkowita");
  };
  

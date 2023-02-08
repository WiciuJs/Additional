function dodaj_kolumne() {
    let kolumna = document.getElementById("tabela");
    let x = kolumna.insertCell(0);
    x.innerHTML = "Nowa Kolumna";
   
  }
  function dodaj_wiersz() {
    let tableRow = document.getElementById("tabela");
    let row = document.createElement("tr");
    let wiersz = document.createElement("td");
    wiersz.innerHTML = "Nowy wiersz";
    row.appendChild(wiersz);
     tableRow.appendChild(row);
    }
  
    
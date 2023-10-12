for (let i = 1; i <= 76; i++) {
  const cella = document.createElement("td");
  cella.textContent = i;
  tabellone.appendChild(cella);
}

estraiButton.addEventListener("click", () => {
  const numeroEstratto = generaNumeroCasuale();
  numeriEstratti.add(numeroEstratto);

  const celle = tabellone.getElementsByTagName("td");
  for (const cella of celle) {
    if (parseInt(cella.textContent) === numeroEstratto) {
      cella.style.backgroundColor = "yellow";
    }
  }
  for (const numero of numeriEstratti) {
    const cellePrecedenti = tabellone.getElementsByTagName("td");
    for (const cella of cellePrecedenti) {
      if (parseInt(cella.textContent) === numero) {
        cella.style.backgroundColor = "green";
      }
    }
  }
});

function generaNumeroCasuale() {
  return Math.floor(Math.random() * 76) + 1;
}

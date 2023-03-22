let champion = document.getElementById("champion");

let url =
  "http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json";

champion.addEventListener("keyup", (e) => {
  list.innerHTML = "";
  if (e.target.value === "") {
    return;
  }
  httpRequest(`/search?q=${e.target.value}`, DOMElement);
});

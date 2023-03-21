let url =
  "http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json";

let handelDOM = (data) => {
  data.forEach((item) => {
    DOMElement(item);
  });
};

httpRequest(url, handelDOM);

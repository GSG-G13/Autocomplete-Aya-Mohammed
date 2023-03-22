let pop = document.querySelector(".pop");

let DOMPopup = (item) => {
  let popup = document.createElement("div");
  popup.className = "popup";
  pop.appendChild(popup);

  let close = document.createElement("i");
  close.className = "fa-solid fa-xmark";
  close.id = "close";
  popup.appendChild(close);

  close.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  let imgDiv = document.createElement("div");
  imgDiv.className = "image";
  popup.appendChild(imgDiv);

  let img = document.createElement("img");
  img.src = `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${item.image.full}`;
  imgDiv.appendChild(img);

  let cName = document.createElement("h2");
  cName.className = "name";
  cName.textContent = item.name;
  popup.appendChild(cName);

  let title = document.createElement("h3");
  title.className = "title";
  title.textContent = item.title;
  popup.appendChild(title);

  let box = document.createElement("div");
  box.className = "box";
  box.textContent = `Attack:${item.info.attack},Defense:${item.info.defense},Magic:${item.info.magic}`;
  popup.appendChild(box);

  let details = document.createElement("p");
  details.className = "details";
  details.textContent = item.blurb;
  popup.appendChild(details);
};

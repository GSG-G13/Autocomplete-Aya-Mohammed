let pop = document.querySelector(".pop");
let overlay = document.querySelector(".overlay");

let DOMPopup = (data) => {
  let popup = document.createElement("div");
  popup.className = "popup";
  pop.appendChild(popup);

  let close = document.createElement("i");
  close.className = "fa-solid fa-xmark";
  close.id = "close";
  popup.appendChild(close);

  close.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    overlay.removeAttribute("class");
  })

  let imgDiv = document.createElement("div");
  imgDiv.className = "image";
  popup.appendChild(imgDiv);

  let img = document.createElement("img");
  img.src = `https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${data.image.full}`;
  imgDiv.appendChild(img);

  let cName = document.createElement("h2");
  cName.className = "name";
  cName.textContent = data.name;
  popup.appendChild(cName);

  let title = document.createElement("h3");
  title.className = "title";
  title.textContent = data.title;
  popup.appendChild(title);

  let box = document.createElement("div");
  box.className = "box";
  box.textContent = `Attack:${data.info.attack},Defense:${data.info.defense},Magic:${data.info.magic}`;
  popup.appendChild(box);

  let details = document.createElement("p");
  details.className = "details";
  details.textContent = data.blurb;
  popup.appendChild(details);
};

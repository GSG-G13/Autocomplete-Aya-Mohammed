let list = document.querySelector(".list");

let DOMElement = (data) => {
  let listItem = document.createElement("li");
  list.appendChild(listItem);

  let cName = document.createElement("span");
  cName.className = "name";
  cName.textContent = data.name;
  listItem.appendChild(cName);

  let vIcon = document.createElement("i");
  vIcon.className = "fa-solid fa-arrow-up-right-from-square";
  vIcon.id = "details";
  listItem.appendChild(vIcon);

  vIcon.addEventListener("click", () => {
    overlay.style.display = "block";
    DOMPopup(data);
  });
};

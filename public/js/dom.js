let list = document.querySelector(".list");

let DOMElement = (data) => {
  data.forEach((item, index) => {
    let listItem = document.createElement("li");
    list.appendChild(listItem);

    let cName = document.createElement("span");
    cName.className = "name";
    cName.textContent = item;
    listItem.appendChild(cName);

    let vIcon = document.createElement("i");
    vIcon.className = "fa-solid fa-arrow-up-right-from-square";
    vIcon.id = "details";
    listItem.appendChild(vIcon);

    popFunc(vIcon, index, cName);
  });
};
function popFunc(ele, id, cName) {
  ele.addEventListener("click", () => {
    httpRequest(`/result?q=${cName.textContent}&id=${id}`, DOMPopup);
  });
}

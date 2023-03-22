let httpRequest = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      cb(response);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

let httpRequest = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      let result = Object.entries(response.data).map((entry) => entry[1]);
      cb(result);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

function loadHTML(url, element) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.querySelector(element).innerHTML = data;
      });
  } 
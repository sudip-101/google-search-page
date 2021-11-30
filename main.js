let query = document.querySelector(".query");
let searchBtn = document.querySelector(".search-btn");

window.onload = () => {
  query.focus();
  query.value = "";
};

searchBtn.onclick = () => {
  let url = "https://www.google.com/search?q=" + query.value;
  window.open(url, "_self");
};

query.onkeypress = (e) => {
  if (e.key === "Enter") {
    let url = "https://www.google.com/search?q=" + query.value;
    window.open(url, "_self");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.style.background = `linear-gradient(135deg, rgba(76,175,80,0.95), rgba(129,199,132,0.95))`;
    } else {
      header.style.background = `linear-gradient(135deg, rgba(76,175,80,1), rgba(129,199,132,1))`;
    }
  });

  const searchButton = document.querySelector(".button");
  const searchBox = document.querySelector(".search-box");

  searchButton.addEventListener("click", function () {
    if (searchBox.value.trim() !== "") {
      alert("搜尋: " + searchBox.value);
    }
  });

  searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });
});

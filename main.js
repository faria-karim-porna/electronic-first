import "./style.scss";

const childMenu = document.getElementsByClassName("child-menu")[0];
const searchBoxArea = document.getElementsByClassName("search-area-box")[0];
const searchBarArea = document.getElementsByClassName("search-bar-area")[0];

window.openChildMenu = () => {
  childMenu.style.display = "block";
};

window.search = () => {
  searchBoxArea.style.display = "none";
  searchBarArea.style.display = "flex";
};

window.closeSearch = () => {
  searchBoxArea.style.display = "flex";
  searchBarArea.style.display = "none";
};

function closeModal() {
  childMenu.style.display = "none";
}

window.addEventListener("click", (event) => {
  if (event.target === childMenu) {
    closeModal();
  }
});

import "./style.scss";

const childMenu = document.getElementsByClassName("child-menu")[0];

window.openChildMenu = () => {
  childMenu.style.display = "block";
};

function closeModal() {
  childMenu.style.display = "none";
}

window.addEventListener("click", (event) => {
  if (event.target === childMenu) {
    closeModal();
  }
});

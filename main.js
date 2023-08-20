import "./style.scss";

const childMenu = document.getElementsByClassName("child-menu")[0];

window.openModal = () => {
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

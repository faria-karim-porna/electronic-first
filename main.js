import "./style.scss";

const modal = document.getElementById("myModal");

window.openModal = () => {
  modal.style.display = "block";
};

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

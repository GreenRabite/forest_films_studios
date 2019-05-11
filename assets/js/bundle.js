const modalOverlay = document.querySelector('#modal-overlay');
const modal = document.querySelector('#modal')

const hideModal = () => {
  modalOverlay.style.display = "none";
}

setTimeout(()=>{
  modalOverlay.style.display = "block";
  modal.classList.add('fadeInDown')
}, 2000)


const exit = document.querySelector('.exit')
exit.addEventListener('click', hideModal);

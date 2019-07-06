const modalOverlay = document.querySelector('#modal-overlay');
const modal = document.querySelector('#modal')
const storage = window.localStorage;
const visitedBefore = storage.getItem('hasVisited');

const hideModal = () => {
  modalOverlay.style.display = "none";
}

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};`;
  console.log(document.cookie)
  document.cookie = expires + ";path=/";
  console.log(document.cookie)
}

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return undefined;
}

const hasVisited = getCookie('visited');


if (!hasVisited){
  setCookie('visited', true, .10)
  setTimeout(()=>{
    modalOverlay.style.display = "block";
    modal.classList.add('fadeInDown')
  }, 2000)
}

const exit = document.querySelector('.exit')
exit.addEventListener('click', hideModal);




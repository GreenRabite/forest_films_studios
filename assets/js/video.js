const iframe = document.querySelector('iframe')
const width = window.innerWidth;
iframe.width = width - width * .10;
iframe.height = iframe.width / 1.8 > 360 ? 360 : iframe.width / 1.8;
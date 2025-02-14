let lastHeartTime = 0;
let heartDelay = 40;

document.addEventListener('mousemove', function (e) {
    let currentTime = Date.now();
    if (currentTime - lastHeartTime < heartDelay) return;

    lastHeartTime = currentTime;

    let body = document.querySelector('body');
    let heart = document.createElement('span');
    heart.classList.add('heart-trail');

    let x = e.clientX;
    let y = e.clientY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 40;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';
    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 500);
});


const messageButton = document.querySelector('.message-button');
const messageBox = document.querySelector('.message-box');
const closeButton = document.querySelector('.close-button');

messageButton.addEventListener('click', () => {
    messageBox.classList.add('active');
});

closeButton.addEventListener('click', () => {
    messageBox.classList.remove('active');
});

messageBox.addEventListener('click', (e) => {
    if (e.target === messageBox) {
        messageBox.classList.remove('active');
    }
});


// Open message box
messageButton.addEventListener('click', () => {
  messageBox.classList.add('active');
});

// Close message box
closeButton.addEventListener('click', () => {
  messageBox.classList.remove('active');
});

// Close message box when clicking outside
messageBox.addEventListener('click', (e) => {
  if (e.target === messageBox) {
    messageBox.classList.remove('active');
  }
});

// Prevent default touch behavior (e.g., scrolling)
document.addEventListener('touchmove', (e) => {
  if (messageBox.classList.contains('active')) {
    e.preventDefault(); // Prevent scrolling when message box is open
  }
}, { passive: false });
// Get elements
const messageButton = document.querySelector('.message-button');
const messageBox = document.querySelector('.message-box');
const closeButton = document.querySelector('.close-button');

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
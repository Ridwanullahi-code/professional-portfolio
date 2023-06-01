const chat = () => {
  const chatUs = document.querySelector('.chat-us');
  const chatBox = document.querySelector('.hide-container');

  chatUs.addEventListener('click', () => {
    chatBox.classList.toggle('show-chat');
  });

  const chatClose = document.querySelector('.close');
  chatClose.addEventListener('click', () => {
    chatBox.classList.remove('show-chat');
  });

  function delayElement() {
    const element = document.querySelector('.dm-container');
    element.style.display = 'flex';
  }

  setTimeout(delayElement, 3000);
};

export default chat;

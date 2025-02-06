function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() !== "") {
    // Показать сообщение пользователя в чате
    addMessage(userInput, 'user');
    
    // Ответ котика
    setTimeout(function() {
      addMessage('Мяу!', 'bot');
      
      // Проиграть видео
      playKittyVideo();
    }, 1000); // Задержка перед ответом
  }
  document.getElementById("user-input").value = ""; // Очистить поле ввода
}

function addMessage(message, sender) {
  var messageDiv = document.createElement("div");
  messageDiv.classList.add(sender + '-message');
  messageDiv.textContent = message;
  document.getElementById("chat-box").appendChild(messageDiv);
  
  // Прокручиваем чат вниз
  document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}

function playKittyVideo() {
  var videoElement = document.getElementById("kitty-video");
  var videoSource = document.getElementById("video-source");

  // Укажите путь к вашему видео
  videoSource.src = "cat-video.mp4"; // Замените на путь к вашему видео
  videoElement.load();
  videoElement.style.display = "block"; // Показать видео
  videoElement.play();
  
  // Скрыть видео после его окончания
  videoElement.onended = function() {
    videoElement.style.display = "none";
  };
}

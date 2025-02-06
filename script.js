// Функция для отправки сообщения
function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  
  if (userInput.trim() !== "") {
    // Добавляем сообщение пользователя в чат
    addMessage(userInput, 'user');
    
    // Задержка перед ответом котика (1 секунда)
    setTimeout(function() {
      addMessage('Мяу!', 'bot');  // Ответ котика "Мяу!"
    }, 1000);
  }
  
  // Очищаем поле ввода
  document.getElementById("user-input").value = "";
}

// Функция для добавления сообщения в чат
function addMessage(message, sender) {
  var messageDiv = document.createElement("div");
  messageDiv.classList.add(sender + '-message');
  messageDiv.textContent = message;
  
  // Добавляем сообщение в чат
  document.getElementById("chat-box").appendChild(messageDiv);
  
  // Прокручиваем чат вниз, чтобы видеть последнее сообщение
  document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}

function sendMessage() {
  var userInput = document.getElementById("user-input").value.trim();
  if (userInput !== "") {
    addMessage(userInput, 'user');

    setTimeout(function() {
      addMessage('Мяу!', 'bot');
      playKittyVideo();
    }, 1000);
  }
  document.getElementById("user-input").value = "";
}

function addMessage(message, sender) {
  var messageDiv = document.createElement("div");
  messageDiv.classList.add(sender + '-message');
  messageDiv.textContent = message;
  document.getElementById("chat-box").appendChild(messageDiv);
  document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}

function playKittyVideo() {
  var video = document.getElementById("kitty-video");
  video.play();

  video.onended = function() {
    video.pause();
    video.currentTime = 0; // Возвращаем видео в начало
  };
}

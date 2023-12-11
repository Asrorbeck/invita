function sendTelegram() {
  // Get form values
  var name = document.getElementById('name').value;
  var answer = document.querySelector('input[name="answer"]:checked').value;

  // Replace 'YOUR_BOT_TOKEN' with your actual bot token
  var botToken = '6391290057:AAHY3W-SRrVxCaZWFNmN2U4rAzNuJPbKBM4';

  // Replace 'YOUR_CHAT_IDS' with an array of your actual chat IDs
  var chatIds = ['905770018', '527662755'];

  // Construct the message
  var message = `Name: ${name}

Will they come: ${answer}`;

  // Telegram Bot API endpoint for sending messages
  var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  // Iterate through each chat ID and send the message
  chatIds.forEach(chatId => {
    // Construct the data to be sent
    var data = {
      chat_id: chatId,
      text: message,
    };

    // Make a POST request to the Telegram Bot API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(`Message sent`);
        // You can handle the response here if needed
      })
      .catch(error => {
        console.error(`Error sending message:`, error);
      });
  });

  // Show alert
  alert("Sizning ma'lumotlaringiz jo'natildi!");

  // Clear the form
  document.getElementById('name').value = '';
  document.querySelector('input[name="answer"]:checked').checked = false;

  // Prevent the form from submitting traditionally
  return false;
}
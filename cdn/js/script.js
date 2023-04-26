async function sendContact(ev) {
    ev.preventDefault();

    const email = document
      .getElementById('email').value;

    const fname = document
      .getElementById('fname').value;

      const lname = document
      .getElementById('lname').value;

      const subject = document
      .getElementById('subject').value;

      



    const webhookBody = {
      embeds: [{
        title: 'Contact from '+ fname + ' '+ lname +'!',
        description: 'Hello everyone! '+ fname +' '+ lname +' had to say something to Lodurs Technologies Staff Team.',
        fields: [
          { name: 'Email', value: email },
          
          { name: 'First + Lastname', value: fname +' '+ lname },

          { name: 'Message', value: subject }
        ]
      }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1100827419746775082/KEVTQMilpkyianrY1dXXw0prS8tYkO6b5aUS-vyVVAlC2kRwIHkoX4GKY5mJImlcVJ4l';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      alert('I have received your message!');
    } else {
      alert('There was an error! Try again later!');
    }
  }
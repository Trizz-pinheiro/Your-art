document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;

    const message = `Olá, meu nome é ${name}. Gostaria de falar sobre: ${subject}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://api.whatsapp.com/send?phone=5521999764517&text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
});

document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    try {
        const response = await fetch('http://localhost:3000/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message })
        });

        const result = await response.json();
        const returnURL = "./success.html";
        window.location.href = returnURL;
        console.log('Success:', result);


    } catch (error) {
        alert("Message sent successdul! Look out for our email shortly from one of our team.");
        console.error("Error:", error);
    }
});
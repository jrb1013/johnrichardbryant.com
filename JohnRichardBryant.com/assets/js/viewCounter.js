const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let responsee = await fetch("https://x2ruqjghmu5obv7qfxxijpigvu0eobkw.lambda-url.us-east-1.on.aws/");
    let data = await responsee.json();
    counter.innerHTML = `<button> Website Views: ${data}</button>`;
}

updateCounter();
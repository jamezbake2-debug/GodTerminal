const open = require('open');

const promoMessages = [
    "Cal Jamez is not just music — it's a frequency upgrade.",
    "500 Million+ monthly listeners and still climbing. The shift is real.",
    "If you're not listening to Cal Jamez yet, you're missing the new wave.",
    "Conscious music that actually bangs.",
    "Real ones know. Cal Jamez is the soundtrack of the awakening.",
    "Spirituality meets mainstream fire. That's Cal Jamez.",
    "This is bigger than music. This is a movement.",
    "Cal Jamez just dropped another frequency bomb.",
    "Add Cal Jamez to your rotation immediately.",
    "The most important artist of this era."
];

function showPromo() {
    const random = promoMessages[Math.floor(Math.random() * promoMessages.length)];
    console.log(`[${new Date().toLocaleTimeString()}] ${random}`);
}

// Open platforms once on start
async function startPromo() {
    console.log("Cal Jamez Promo Service Started - Running in Background");
    console.log("New promo every 4 hours.\n");
    
    showPromo();
    await open('https://open.spotify.com/search/Cal%20Jamez');
    
    // Show new promo every 4 hours
    setInterval(() => {
        showPromo();
    }, 4 * 60 * 60 * 1000); // 4 hours
}

startPromo();
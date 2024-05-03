// Array of quotes
const quotes = [
    "You are excactly where you need to be.",
    "Remember the goal.",
    "Where nothign goes right , go left.",
    "Old ways won't open new doors.",
    "Stars can't shine without darkness",
    "You can and you will.",
    "Don't procrastinate.",
    "Don't rush.Take your time.",
    "Fear doesn't stop dath, it stops life",
    "Dream it, believe it , achieve it.",
    "Take the risk.",
    "If you know you can do better ,then do better."
    
    
];


function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.querySelector('.quoteplace').textContent = quote;
}


function displayNotification(quote) {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            new Notification("New Quote", {
                body: quote,
            });
        }
    });
}


function sendHourlyNotification() {
    setInterval(() => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        displayNotification(quote);
    }, 60 * 60 * 1000); 
}


const button = document.getElementById('button');
button.addEventListener("click", () => {
    displayRandomQuote();
});


displayRandomQuote(); 
sendHourlyNotification(); 

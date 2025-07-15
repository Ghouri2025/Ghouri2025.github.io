function generateSlogan() {
    const slogans = [
        "AI: Shaping tomorrow, today!",
        "Smart minds. Smarter machines.",
        "Artificial Intelligence, Real Impact.",
        "Empower your future with AI.",
        "Think beyond with AI."
    ];
    const random = Math.floor(Math.random() * slogans.length);
    document.getElementById("result").textContent = slogans[random];
}

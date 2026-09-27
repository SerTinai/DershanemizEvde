function showComingSoon(card) {
    const oldMessage = card.querySelector(".coming-soon");

    if (oldMessage) {
        oldMessage.remove();
        return;
    }

    const message = document.createElement("div");

    message.className = "coming-soon";

    message.innerHTML = `
        <div class="warning-icon">⚠️</div>
        <div>
            <strong>Hizmetimiz hazırlanıyor</strong>
            <p>Daha fazla bilgi için eğitimciniz ile görüşün.</p>
        </div>
    `;

    card.appendChild(message);
}
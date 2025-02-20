let xp = 0;
const maxXP = 30;
const progress = document.querySelector('.progress');
const xpText = document.querySelector('.xp-text');

function addXP(amount) {
    xp = Math.min(xp + amount, maxXP);
    updateProgress();
}

function updateProgress() {
    const percentage = (xp / maxXP) * 100;
    progress.style.width = percentage + '%';
    xpText.textContent = `Earn ${xp}/${maxXP} XP`;
}

// Simulando ganho de XP a cada 1.5 segundos
setInterval(() => addXP(5), 1500);

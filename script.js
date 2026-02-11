// Add click event to each card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Toggle the 'opened' class
        this.classList.toggle('opened');
        
        // Add a little celebration effect when opened
        if (this.classList.contains('opened')) {
            createHearts(this);
        }
    });
});

// Create floating hearts animation when card opens
function createHearts(card) {
    const hearts = ['💕', '💖', '💗', '💝', '💞'];
    const rect = card.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = rect.left + rect.width / 2 + 'px';
            heart.style.top = rect.top + rect.height / 2 + 'px';
            heart.style.fontSize = '30px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.transition = 'all 1.5s ease-out';
            
            document.body.appendChild(heart);
            
            // Animate the heart
            setTimeout(() => {
                heart.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${-200 - Math.random() * 100}px) rotate(${Math.random() * 360}deg)`;
                heart.style.opacity = '0';
            }, 10);
            
            // Remove the heart after animation
            setTimeout(() => {
                heart.remove();
            }, 1600);
        }, i * 100);
    }
}
const letters = document.querySelectorAll('.letter');
const renderPreview = document.getElementById('renderPreview');

letters.forEach(letter => {
    letter.addEventListener('mouseover', (e) => {
        const image = letter.getAttribute('data-image');
        renderPreview.style.backgroundImage = `url(${image})`;
        
        // Posiciona el render detrás de la letra
        const rect = letter.getBoundingClientRect();
        renderPreview.style.width = `${rect.width}px`;
        renderPreview.style.height = `${rect.height}px`;
        renderPreview.style.left = `${letter.offsetLeft}px`;
        renderPreview.style.top = `${letter.offsetTop}px`;
        
        renderPreview.style.opacity = 1;
        letter.style.opacity = 0.2;
        letter.style.transform = "scale(1.05)";
    });

    letter.addEventListener('mouseout', () => {
        renderPreview.style.opacity = 0;
        letter.style.opacity = 1;
        letter.style.transform = "scale(1)";
    });
});

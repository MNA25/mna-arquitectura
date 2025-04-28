const letters = document.querySelectorAll('.letter');
const renderPreview = document.getElementById('renderPreview');

letters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        const image = letter.getAttribute('data-image');
        renderPreview.style.backgroundImage = `url(${image})`;
        renderPreview.style.opacity = 1;
        letter.style.opacity = 0;
    });

    letter.addEventListener('mouseout', () => {
        renderPreview.style.opacity = 0;
        letter.style.opacity = 1;
    });
});

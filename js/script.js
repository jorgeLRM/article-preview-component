const shareButton = document.getElementById('btn-share');
const shareMenu = document.getElementById('card-share');

shareButton.addEventListener('click', () => {
    shareButton.classList.toggle('active');
    shareMenu.classList.toggle('active');
    
    const isExpanded = shareButton.classList.contains('active');
    shareButton.setAttribute('aria-expanded', isExpanded);
});

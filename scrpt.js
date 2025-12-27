<script>
    // 1. Hide placeholder when a link is clicked
    const links = document.querySelectorAll('.menu a');
    const placeholder = document.querySelector('.placeholder');
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            placeholder.style.display = 'none';
        });
    });

    // 2. Fix for mobile iframe scrolling
    // If the user is on mobile, we ensure the iframe area is touch-scrollable
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        const viewer = document.querySelector('.viewer-container');
        viewer.style.overflowY = 'auto';
        viewer.style.webkitOverflowScrolling = 'touch';
    }
</script>

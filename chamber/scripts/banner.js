function closeBanner() {
    document.getElementById('meetGreetBanner').classList.add('hidden');
    // Removed localStorage so it won't remember the banner being closed
}

window.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay();

    fetch('data/banner.json')
        .then(response => response.json())
        .then(data => {
            const shouldShow = data.days.includes(today);

            if (shouldShow) {
                document.getElementById('bannerMessage').textContent = data.message;
                document.getElementById('meetGreetBanner').classList.remove('hidden');
            }
        })
        .catch(error => console.error('Error loading banner data:', error));
});
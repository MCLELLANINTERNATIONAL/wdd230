function closeBanner() {
    document.getElementById('meetGreetBanner').classList.add('hidden');
    localStorage.setItem('bannerClosed', 'true');
}
  
window.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay();
    const bannerClosed = localStorage.getItem('bannerClosed') === 'true';

    fetch('data/banner.json')
        .then(response => response.json())
        .then(data => {
        const shouldShow = data.days.includes(today);

        if (!bannerClosed && shouldShow) {
            document.getElementById('bannerMessage').textContent = data.message;
            document.getElementById('meetGreetBanner').classList.remove('hidden');
        }
    })
    .catch(error => console.error('Error loading banner data:', error));
});
  
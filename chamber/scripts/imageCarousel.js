// Image carousel for the header profile images
document.addEventListener('DOMContentLoaded', () => {
    // Configure the carousel
    const carousel = document.querySelector('.profile-carousel');
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;
    
    // Hide all images except the first one
    for (let i = 1; i < totalImages; i++) {
        images[i].style.opacity = "0";
    }
    
    // Function to show the next image
    function showNextImage() {
        // Fade out current image
        images[currentIndex].style.opacity = "0";
        
        // Update index to next image
        currentIndex = (currentIndex + 1) % totalImages;
        
        // Fade in next image
        images[currentIndex].style.opacity = "1";
    }
    
    // Set interval for automatic image rotation (every 5 seconds)
    setInterval(showNextImage, 5000);
});

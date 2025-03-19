function adjustPodcastHeight() {
    let podcastIframe = document.querySelector('.podcast-player iframe');

    if (window.innerWidth > 1200) {
        podcastIframe.style.height = "500px";
    } else if (window.innerWidth > 1024) {
        podcastIframe.style.height = "450px";
    } else if (window.innerWidth > 900) {
        podcastIframe.style.height = "420px";
    } else if (window.innerWidth > 768) {
        podcastIframe.style.height = "390px";
    } else if (window.innerWidth > 600) {
        podcastIframe.style.height = "350px";
    } else {
        podcastIframe.style.height = "300px";
    }
}

window.addEventListener("resize", adjustPodcastHeight);
window.addEventListener("load", adjustPodcastHeight);
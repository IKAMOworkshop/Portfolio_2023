const scrollProgressBar = document.querySelector("#progress-bar");

function scrollProgress() {
    const totalHeight = document.body.scrollHeight;
    const currentDistance = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.clientHeight;

    const scrolledPercentage = (currentDistance / (totalHeight - windowHeight)) * 100;

    scrollProgressBar.style.height = Math.round(scrolledPercentage) + "%";
}

document.addEventListener('scroll', scrollProgress);

const emailButton = document.getElementById('email-link');

function copyEmail() {
    navigator.clipboard.writeText("changjeremy0226@gmail.com").then(() => {
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
      },() => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
      });
}

document.addEventListener('click', copyEmail);
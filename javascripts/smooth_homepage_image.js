document.addEventListener("DOMContentLoaded", function() {
    const bgContainer = document.getElementById("homepage-hero");
    const imageUrl = "../assets/profile_pic.jpg";

    const img = new Image()
    img.src = imageUrl;

    img.onload = function() {
        bgContainer.style.backgroundImage = `url('${imageUrl}')`;
        bgContainer.style.opacity = "1";
    };
});
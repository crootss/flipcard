const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
];

const slider = document.getElementById('photo-slider');

let currentIndex = 0;

// Function to create and insert image elements
function loadImages() {
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        slider.appendChild(img);
    });
}

// Function to handle image transition
function showNextImage() {
    const allImages = slider.querySelectorAll('img');
    allImages.forEach((img, index) => {
        img.style.opacity = index === currentIndex ? '1' : '0';
    });

    currentIndex = (currentIndex + 1) % images.length;
}

// Initialize the slider
loadImages();
setInterval(showNextImage, 3000); // Change image every 3 seconds

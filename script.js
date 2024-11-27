const imageSets = {
    slider1: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    slider2: ['image4.jpg', 'image5.jpg', 'image6.jpg'],
    slider3: ['image7.jpg', 'image8.jpg', 'image9.jpg'],
    slider4: ['image10.jpg', 'image11.jpg', 'image12.jpg'],
    slider5: ['image13.jpg', 'image14.jpg', 'image15.jpg']
};

function startSliders() {
    Object.keys(imageSets).forEach((sliderId) => {
        const images = imageSets[sliderId];
        const slider = document.getElementById(sliderId);
        let currentIndex = 0;

        images.forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
            slider.appendChild(img);
        });

        const imgElements = slider.querySelectorAll('img');

        function showNextImage() {
            imgElements.forEach((img, index) => {
                img.style.opacity = index === currentIndex ? '1' : '0';
            });
            currentIndex = (currentIndex + 1) % images.length;
        }

        showNextImage();
        setInterval(showNextImage, 3000); // Change image every 3 seconds
    });
}

document.addEventListener('DOMContentLoaded', startSliders);

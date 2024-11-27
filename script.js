const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
    'image13.jpg',
    'image14.jpg',
    'image15.jpg',
];

function startFlipping() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
        const frontImage = document.createElement('img');
        const backImage = document.createElement('img');
        const flipContainer = document.createElement('div');

        // Setup container dan gambar
        flipContainer.className = 'flip-container';
        frontImage.src = images[index % images.length];
        backImage.src = images[(index + 1) % images.length];
        backImage.className = 'back';

        flipContainer.appendChild(frontImage);
        flipContainer.appendChild(backImage);
        item.appendChild(flipContainer);

        // Flip terjadi secara berkala
        setInterval(() => {
            // Flip dimulai
            item.classList.toggle('flipping');
        }, 3000 + index * 500); // Interval bergantian antar kotak
    });
}

// Panggil fungsi setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', startFlipping);

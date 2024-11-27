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

// Fungsi untuk memulai flip
function startFlipping() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
        const frontImage = document.createElement('img');
        const backImage = document.createElement('img');
        const flipContainer = document.createElement('div');

        // Tambahkan kelas dan gambar
        flipContainer.className = 'flip-container';
        frontImage.src = images[index % images.length];
        backImage.src = images[(index + 1) % images.length];
        backImage.className = 'back';

        flipContainer.appendChild(frontImage);
        flipContainer.appendChild(backImage);
        item.appendChild(flipContainer);

        // Jadwalkan flip secara bergantian
        setInterval(() => {
            // Mulai animasi flip
            item.classList.add('flipping');

            // Setelah animasi selesai (800ms), tukar gambar
            setTimeout(() => {
                // Tukar gambar depan dan belakang
                const temp = frontImage.src;
                frontImage.src = backImage.src;
                backImage.src = images[(Math.floor(Math.random() * images.length))];

                // Kembali ke posisi awal
                item.classList.remove('flipping');
            }, 800); // Durasi animasi sesuai CSS
        }, 3000 + index * 500); // Interval untuk setiap kotak
    });
}

// Panggil fungsi setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', startFlipping);

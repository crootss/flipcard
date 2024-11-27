const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
];

// Fungsi untuk mengganti gambar dan memulai flip
function startFlipping() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
        const frontImage = document.createElement('img');
        const backImage = document.createElement('img');
        const flipContainer = document.createElement('div');

        // Tambahkan kelas pada elemen
        flipContainer.className = 'flip-container';
        frontImage.src = images[index % images.length];
        backImage.src = images[(index + 1) % images.length];
        backImage.className = 'back';

        // Masukkan elemen
        flipContainer.appendChild(frontImage);
        flipContainer.appendChild(backImage);
        item.appendChild(flipContainer);

        // Jadwalkan flipping secara bergantian
        setInterval(() => {
            // Memulai flip ke sisi belakang
            item.classList.add('flipping');

            // Setelah animasi selesai (800ms), ganti gambar
            setTimeout(() => {
                // Tukar gambar
                const temp = frontImage.src;
                frontImage.src = backImage.src;
                backImage.src = images[(Math.floor(Math.random() * images.length))]; // Gambar baru acak

                // Kembali ke posisi awal
                item.classList.remove('flipping');
            }, 800); // 800ms sesuai dengan durasi animasi CSS
        }, 3000 + index * 500); // Delay bergantian antar kotak
    });
}

// Panggil fungsi saat DOM siap
document.addEventListener('DOMContentLoaded', startFlipping);

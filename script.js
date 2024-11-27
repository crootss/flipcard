// Daftar gambar
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
];

// Fungsi untuk mengisi elemen grid dengan gambar
function loadImages() {
    const gridContainer = document.getElementById('grid-container');
    const gridItems = gridContainer.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = images[index % images.length]; // Loop gambar jika jumlah lebih sedikit dari elemen
        item.appendChild(img);
    });
}

// Panggil fungsi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', loadImages);

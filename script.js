const imageSets = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg'
];

function loadImages() {
    const gridContainer = document.getElementById('grid-container');
    const gridItems = gridContainer.querySelectorAll('.grid-item');

    gridItems.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = imageSets[index % imageSets.length]; // Loop gambar
        item.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', loadImages);

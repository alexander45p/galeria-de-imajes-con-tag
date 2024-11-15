document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Filtrar imágenes por búsqueda de texto
    searchBar.addEventListener('input', () => {
        const searchQuery = searchBar.value.toLowerCase().trim();

        galleryItems.forEach(item => {
            const categories = Array.from(item.classList); // Obtener clases del elemento
            if (categories.some(category => category.includes(searchQuery)) || searchQuery === '') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Filtrar galería al hacer clic en un tag
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}





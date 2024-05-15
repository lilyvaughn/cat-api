document.addEventListener("DOMContentLoaded", function() {
    const catForm = document.getElementById('cat-form');
    const catContainer = document.getElementById('cat-container');
    const catImage = document.getElementById('cat-image');

    catForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const catType = document.getElementById('cat-type').value;
        fetchCatImage(catType);
    });

    function fetchCatImage(catType) {
        fetch(`https://cataas.com/cat/${catType}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch cat image');
                }
                return response.blob();
            })
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                catImage.src = imageUrl;
            })
            .catch(error => {
                console.error('Error fetching cat image:', error);
            });
    }
});

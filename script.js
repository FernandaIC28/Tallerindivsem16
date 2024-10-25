document.addEventListener('DOMContentLoaded', function() {
    const getQuoteBtn = document.getElementById('getQuoteBtn');
    const quoteElement = document.getElementById('quote');

    getQuoteBtn.addEventListener('click', function() {
        fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            quoteElement.innerText = data[0].quote;
        })
        .catch(error => {
            console.error('Error al obtener la frase:', error);
            quoteElement.innerText = 'Hubo un problema al obtener la frase. Inténtalo nuevamente.';
        });
    });
});

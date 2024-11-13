// Seleciona todos os flashcards
const flashcards = document.querySelectorAll('.flashcard');

// Adiciona um ouvinte de evento de clique para cada flashcard
flashcards.forEach(card => {
    card.addEventListener('click', () => {
        // Alterna a classe 'flipped' para virar o card
        card.classList.toggle('flipped');
    });
});

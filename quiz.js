//alert("Vamos conhecer sobre vinho?")

const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', () => {
        if (option.textContent === 'Brasília') {
            alert('Resposta correta!');
        } else {
            alert('Resposta incorreta!');
        }
    });
});

const quizzes = document.querySelectorAll('.quiz');

submitButton.addEventListener('click', () => {
    let score = 0;
    
    quizzes.forEach((quiz, index) => {
        const question = quiz.querySelector('.question');
        const options = quiz.querySelectorAll('.option');
        
        options.forEach(option => {
            if (option.textContent === answers[index]) {
                option.style.backgroundColor = 'green';
            } else if (option.classList.contains('selected')) {
                option.style.backgroundColor = 'red';
            }
            option.removeEventListener('click', selectOption);
            option.style.cursor = 'default';
        });
        
        const selectedOption = quiz.querySelector('.selected');
        
        if (selectedOption && selectedOption.textContent === answers[index]) {
            score++;
        }
    });
});

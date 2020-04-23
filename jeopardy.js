const question = document.getElementById('question');
const answer = document.getElementById('answer');
const returnButton = document.getElementById('return-button');

question.addEventListener('click', () => {
    question.setAttribute('style', 'display: none');
    answer.setAttribute('style', 'display: block');
    returnButton.setAttribute('style', 'display: block');
})
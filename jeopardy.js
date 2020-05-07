const question = document.getElementById('question');
const answer = document.getElementById('answer');
const returnButton = document.getElementById('return-button');
const multipleChoice = document.getElementById('multiple-choice');

question.addEventListener('click', () => {
    question.setAttribute('style', 'display: none');
    answer.setAttribute('style', 'display: block');
    returnButton.setAttribute('style', 'display: block');
    multipleChoice.setAttribute('style', 'display: block');
})
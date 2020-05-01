const question = document.getElementById('question');
const answer = document.getElementById('answer');
const returnButton = document.getElementById('return-button');
const q1c1 = document.getElementById('q1c1');

q1c1.addEventListener('onClick', () => {
    question.innerHTML = "question1";
})

question.addEventListener('click', () => {
    question.setAttribute('style', 'display: none');
    answer.setAttribute('style', 'display: block');
    returnButton.setAttribute('style', 'display: block');
})
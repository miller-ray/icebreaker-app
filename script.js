const questions = [
    "What’s your favorite type of dessert?",
    "What’s your favorite way to spend a lazy day?",
    "What’s your favorite book genre?",
    "Do you prefer sweet or savory snacks?",
    "Would you rather have a night out or a night in?",
    "What’s your favorite way to relax after a busy day?",
    "What’s your favorite subject you studied in school?",
    "What’s your favorite place to visit in your hometown?",
    "Would you rather have a rewind button or a pause button on your life?",
    "What’s your favorite way to spend time with friends?",
    "What’s your favorite way to stay organized?",
    "Do you prefer to plan things out or be spontaneous?",
    "What’s your favorite way to celebrate your birthday?",
    "What’s your favorite place to go for a walk?",
    "Would you rather live without music or live without TV?",
    "Cake or pie?",
    "What’s your favorite thing about your current job?",
    "Do you prefer reading fiction or non-fiction?",
    "What’s your favorite holiday and why?",
    "Do you prefer online shopping or in-store shopping?",
    "What’s your favorite way to show appreciation to others?",
    "What’s your favorite outdoor activity?",
    "Do you prefer hot or cold weather?",
    "Would you rather have a small gathering or a big party?",
    "What’s your favorite thing to do on a rainy day?",
    "Do you prefer working in the morning or at night?",
    "Would you rather be able to teleport anywhere or be able to read minds?",
    "What’s your favorite memory from childhood?",
    "Do you prefer casual or formal attire?",
    "What’s your favorite app or tool that you use at work?",
    "Would you rather travel to the past or the future?",
    "What’s your favorite TV show to binge-watch?",
    "Would you rather explore space or the deep sea?",
    "What’s your favorite food or cuisine?",
    "Would you rather have a beach vacation or a mountain vacation?",
    "What’s your favorite way to spend a holiday?",
    "What’s your favorite childhood TV show?",
    "Noodles or Rice",
    "What’s your favorite way to spend a long weekend?",
    "Do you prefer cooking or baking?",
    "What’s your favorite thing to do in the summer?",
    "Do you prefer being indoors or outdoors?",
    "Would you rather have unlimited coffee or unlimited snacks at work?",
    "What’s your favorite season of the year and why?",
    "Do you prefer to text or call?",
    "What’s your favorite way to stay active?",
    "What’s your favorite childhood memory?",
    "Would you rather have a pool or a home theater?",
    "What’s your favorite way to start your day?",
    "Do you prefer cats or dogs?",
    "What’s your favorite type of music to relax to?",
    "Would you rather have more time or more money?",
    "What’s your favorite type of movie (comedy, drama, etc.)?",
    "What’s your favorite book or movie?",
    "Would you rather have a pet dragon or a pet unicorn?",
    "What’s your favorite way to unwind after work?",
    "Do you prefer coffee or tea?",
    "What’s your favorite kind of music to listen to while working?",
    "Would you rather read a book or watch a movie?",
    "What’s your favorite memory from a family vacation?",
    "Would you rather have breakfast for dinner or dinner for breakfast?",
    "What’s your favorite type of cuisine to cook at home?",
    "Would you rather go hiking or go to a gym?",
    "What’s the best concert you’ve ever attended?",
    "What’s your favorite board game or card game?",
    "Would you rather have a personal chef or a personal driver?",
    "What’s your favorite thing to do with your family?",
    "Would you rather have a fast car or a luxurious car?",
    "What’s your favorite way to spend a weekend?",
    "Would you rather be a famous musician or a famous actor?",
    "What’s your favorite way to keep learning and growing?",
    "Would you rather watch a sunrise or a sunset?",
    "What’s your favorite subject you studied in school?",
    "Would you rather have a rewind button or a pause button on your life?",
    "What’s your favorite childhood TV show?",
    "Would you rather have more time or more money?",
    "What’s your favorite thing to do in the summer?",
    "Do you prefer working in the morning or at night?",
    "What’s your favorite TV show to binge-watch?",
    "What’s your favorite food or cuisine?",
    "What’s your favorite way to give back to the community?",
    "Would you rather be able to teleport anywhere or be able to read minds?",
    "What’s your favorite type of dessert?",
    "Do you prefer being indoors or outdoors?",
    "Would you rather have unlimited coffee or unlimited snacks at work?",
    "What’s your favorite season of the year and why?",
    "Do you prefer to text or call?",
    "What’s your favorite way to stay active?",
    "What’s your favorite childhood memory?",
    "Would you rather have a pool or a home theater?",
    "What’s your favorite way to start your day?",
    "Do you prefer cats or dogs?",
    "What’s your favorite type of music to relax to?",
    "Would you rather have more time or more money?",
    "What’s your favorite type of movie (comedy, drama, etc.)?",
    "What’s your favorite book or movie?",
    "Would you rather have a pet dragon or a pet unicorn?",
    "What’s your favorite way to unwind after work?",
    "Do you prefer coffee or tea?",
    "What’s your favorite kind of music to listen to while working?"
];

const specialIndexes = getRandomIndexes(10, questions.length);

function getRandomIndexes(num, max) {
    const indexes = [];
    while (indexes.length < num) {
        const rand = Math.floor(Math.random() * max);
        if (!indexes.includes(rand)) {
            indexes.push(rand);
        }
    }
    return indexes;
}

const questionsContainer = document.getElementById('questions-container');
const popup = document.getElementById('popup');
const specialPopup = document.getElementById('special-popup');
const questionText = document.getElementById('question-text');
const closePopup = document.getElementById('close-popup');
const closeSpecialPopup = document.getElementById('close-special-popup');
const showQuestionButton = document.getElementById('show-question-button');

let currentSpecialIndex = null;

const animations = ['slideIn', 'spinIn', 'flipIn'];

// Populate questions
questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = index + 1;
    questionElement.addEventListener('click', () => showQuestion(index, questionElement));
    questionsContainer.appendChild(questionElement);
});

function showQuestion(index, element) {
    element.style.visibility = 'hidden';
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    popup.querySelector('.popup-content').style.animation = `${randomAnimation} 1s forwards`;

    if (specialIndexes.includes(index)) {
        currentSpecialIndex = index;
        specialPopup.style.display = 'flex';
    } else {
        questionText.textContent = questions[index];
        popup.style.display = 'flex';
    }
}

showQuestionButton.addEventListener('click', () => {
    questionText.textContent = questions[currentSpecialIndex];
    specialPopup.style.display = 'none';
    popup.style.display = 'flex';
    currentSpecialIndex = null;
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

closeSpecialPopup.addEventListener('click', () => {
    specialPopup.style.display = 'none';
});

// Close popup when clicking outside of the content
window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
    if (event.target == specialPopup) {
        specialPopup.style.display = 'none';
    }
});

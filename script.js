const container = document.querySelector('.container');
const mood = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const labels = document.querySelector('.labels')

const SQUARES = 100;

const moodArr = ["Enraged", "Panicked", "Stressed", "Jittery", "Shocked", "Surprised", "Upbeat", "Festive", "Exhilarated", "Ecstatic",
    "Livid", "Furious", "Frustrated", "Tense", "Stunned", "Hyper", "Cheerful", "Motivated", "Inspired", "Elated",
    "Fuming", "Frightened", "Angry", "Nervous", "Restless", "Energized", "Lively", "Enthusiastic", "Optimistic", "Excited",
    "Anxious", "Apprehensive", "Worried", "Irritated", "Annoyed", "Pleased", "Happy", "Focused", "Proud", "Thrilled", "Repulsed",
    "Troubled", "Concerned", "Uneasy", "Peeved", "Pleasant", "Joyful", "Hopeful", "Playful", "Blissful", "Disgusted", "Glum", "Disappointed",
    "Down", "Apathetic", "At ease", "Easygoing", "Content", "Loving", "Fulfilled", "Pessimistic", "Morose", "Discouraged", "Sad", "Bored", "Calm",
    "Secure", "Satisfied", "Grateful", "Touched", "Alienated", "Miserable", "Lonely", "Disheartened", "Tired", "Relaced", "Chill", "Restful", "Blessed",
    "Balanced", "Despondent", "Depressed", "Sullen", "Exhausted", "Fatigued", "Mellow", "Thoughtful", "Peaceful", "Comfy", "Carefree", "Despair", "Hopeless",
    "Desolate", "Spent", "Drained", "Sleepy", "Complacent", "Tranquil", "Cosy", "Serene"];

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add(`${i}`);
    container.appendChild(square);

    square.addEventListener('mouseover', function () {
        for (let j = 5; j <= 9; j++) {
            if ((square.classList[1][0].indexOf(`${j}`) >= 0) && (square.classList[1][1] >= 5)) {
                setColor(square, 'rgb(33, 136, 7)', i);
            }
            else if ((square.classList[1][0].indexOf(`${j}`) >= 0) && (square.classList[1][1] < 5)) {
                setColor(square, 'rgb(0, 140, 255)', i);
            } else if (square.classList[1] == `${j}`) {
                setColor(square, 'rgb(255, 251, 0)', i);
            }
        }
        for (let j = 0; j <= 4; j++) {
            if ((square.classList[1][0].indexOf(`${j}`) >= 0) && (square.classList[1][1] < 5)) {
                setColor(square, 'rgb(233, 25, 25)', i);
            }
            else if ((square.classList[1][0].indexOf(`${j}`) >= 0) && (square.classList[1][1] >= 5)) {
                setColor(square, 'rgb(255, 251, 0)', i);
            } else if (square.classList[1] == `${j}`) {
                setColor(square, 'rgb(233, 25, 25)', i);
            }

        }
    })
    square.addEventListener('mouseout', function () {
        removeColor(square)
        removeText(mood)
    });

    moodResponse(square);
}

function setColor(element, chosenColor, index) {
    const color = chosenColor;
    element.style.background = chosenColor;
    element.style.boxShadow = `0 0 2px ${chosenColor}, 0 0 10px ${chosenColor}`
    mood.innerHTML = `${moodArr[index]}`;
    mood.style.color = chosenColor;
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}

function removeText(item) {
    item.innerHTML = "<br>"
}

function moodResponse(element) {
    element.addEventListener('click', function (e) {
        console.log("clickedd");
        for (let i = 0; i < 100; i++) {
            container.removeChild(container.lastElementChild);
        }
        chosenOption = e.target.classList[1];
        todaysMood = moodArr[chosenOption];
        const comment = document.createElement('h3');
        comment.append(`Today you're feeling ${todaysMood}, onwards and upwards from here in'sha'Allah`);
        container.append(comment);
        styleUpdate();


    })
}

function styleUpdate() {
    h2.forEach(removeh2);
    function removeh2(item) {
        item.innerHTML = '';
    }
    labels.style.paddingRight = 0;
    container.style.backgroundColor = 'red';

}

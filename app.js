'Use Strict'

// get all callers
const openBtn = document.querySelectorAll('.btn-open');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');


const modalFunction = () => {
    overlay.classList.add('show-modal');
}

openBtn.forEach(btn => {
    btn.addEventListener('click', modalFunction)

    console.log(btn)
});
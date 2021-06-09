'Use Strict'

// get all callers
const openBtn = document.querySelectorAll('.btn-open');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');


const openModal = () => {
    overlay.classList.add('show-modal');
}

const closeModal = (e) => {
    if(e.target.classList.contains('show-modal') || e.target.classList.contains('close-modal')) {
        overlay.classList.remove('show-modal');
    }
}

openBtn.forEach(btn => {
    btn.addEventListener('click', openModal)
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)
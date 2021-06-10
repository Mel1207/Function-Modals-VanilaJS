'Use Strict'

// get all callers
const openBtn = document.querySelectorAll('.btn-open');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const browserDoc = document;


// EVENT FUNCTIONS
const closeModal = () => {
    overlay.classList.remove('show-modal');
}

const openModal = () => {
    overlay.classList.add('show-modal');
}

const checkTarget = (e) => {
    if(e.target.classList.contains('show-modal') || e.target.classList.contains('close-modal')) {
        closeModal()
    }
}

openBtn.forEach(btn => {
    btn.addEventListener('click', openModal)
});

const escClose = e => {
    if(e.key === 'Escape') {
        closeModal()
    }
}

// EVENT LISTENERS
browserDoc.addEventListener('keydown', escClose)
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)
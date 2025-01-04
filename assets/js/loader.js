window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.classList.add('loader-hidden');
    }
});

function showLoader() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.classList.remove('loader-hidden');
    }
}

function hideLoader() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.classList.add('loader-hidden');
    }
}

// current section active link highlighting
const sections = document.querySelectorAll('.in-view');

const config = {
    rootMargin: '0px',
    threshold: 0.5
};

let observer = new IntersectionObserver(function (entries, self) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        }
    });
}, config);

sections.forEach(section => {
    observer.observe(section);
});


function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector('.active-link');
    const shouldBeActive = document.querySelector(`a[href="/#${id}"]`);

    if (currentlyActive) {
        currentlyActive.classList.remove('active-link');
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add('active-link');
    }
}
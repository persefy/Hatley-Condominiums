const navBtn = document.querySelector('#navBtn');
const navBar = document.querySelector('#navBar');

navBtn.addEventListener('click', () => {
    
    if (navBar.style.display == 'none') {
        navBar.style.display = 'block';
    } else if (navBar.style.display == 'block') {
            navBar.style.display = 'none';
    } else {
        console.log('error with nav bar toggle!')
    }
    
});
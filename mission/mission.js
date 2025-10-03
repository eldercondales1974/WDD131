const themeSelector = document.querySelector('#theme');
const body = document.body;
const logoImg = document.querySelector('#logo-img');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logoImg.src = 'images/byui-logo_white.png';
    }
    else{
        body.classList.remove('dark');
        logoImg.src = 'images/byui-logo_blue.webp';
    }
        
}
themeSelector.addEventListener('change', changeTheme);



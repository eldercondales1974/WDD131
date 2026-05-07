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


let selectElem = document.querySelector('select');
let logo = document.querySelector('#logo');
let body = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

//function changeTheme() {
    //let current = selectElem.value;
    //console.log(current);
    //if (current === 'dark') {
        // code for changes to colors and logo
        //document.body.style.backgroundColor = 'black';
        //document.body.style.color = '#ffffff';
        //logo.setAttribute('src', 'images/byui-logo_white.png');

    //} else {
        // code for changes to colors and logo
        //document.body.style.backgroundColor = '#ffffff';
        //document.body.style.color = '#000000';
        //logo.setAttribute('src', 'images/byui-logo_blue.png');
    //}
//}    

function changeTheme(){
    if (selectElem.value==='dark') {
        document.body.classList.add('dark');
        logo.src='images/byui-logo_white.png';
    }
    else {
        document.body.classList.remove('dark');
        logo.src='images/byui-logo_blue.png';
    }
}
                    



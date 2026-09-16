const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu-button");
    menu.classList.add("hide");
}
menuButton.addEventListener("click", toggleMenu);

function handleResize( ) {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
handleResize();
window.addEventListener("resize", handleResize);


const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", (event) => {
    const clickElement = event.target;
    if (clickElement.tagName === "IMG" && clickElement.classList.contains(".gallery")) {
        const bigscreen = clickElement.getAttribute("data-full-src");
        const altText = clickElement.getAttribute("alt");
        const dialog = document.createElement("dialog");
        dialog.innerHTML = `
                    <img src="${fullSrc}" alt="${altText}">
                    <button class="close-viewer" aria-label="Close image viewer">X</button>`;
        dialog.showModal();
        const closeButton = dialog.querySelector(".close-viewer");
        closeButton.addEventListener("click", () => {
            dialog.close();
        } 
        )   
        dialog.addEventListener("close", () => {
                //dialog.remove();
        })         
    }
})

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})
//const gallery = document.querySelector('.gallry');
//const modal = document.querySelector('dialog');
//const modalImage = modal.querySelector('img');
//const closeButton = modal.querySelector('.close-viewer');

//gallery.addEventListener('click', openModal);

//function openModal(e) {
    //console.log(e.target);

    //const img = e.target;
    //const src = img.getAttribute('src');
    //const alt = img.getAttribute('alt');
    //const full = src.replace('sm', 'full');

    //modalImage.src = full;
    //modalImage.alt = alt;

    //modal.showModal();
    
//}
//closeButton.addEventListener('click', () => {
    //modal.close();
//});

//modal.addEventListener('click', (event) => {
    //if (event.target === modal) {
        //modal.close();
    //}
//});



//gallery.addEventListener('click', openModal);

//function openModal(e) {
    //console.log(e.target);

    //const img = e.target;
    //const src = img.getAttribute('src');
    //const alt = img.getAttribute('alt');
    //const full = src.replace('sm', 'full');

    //modalImage.src = full;
    //modalImage.alt = alt;

    //modal.showModal();
//}
//closeButton.addEventListener('click', () => {
    //modal.close();
//});

//modal.addEventListener('click', (event) => {
    //if (event.target === modal) {
        //modal.close();
    //}
//})
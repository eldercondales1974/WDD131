const title = document.querySelector('h1');
console.log(title);
title.textContent = 'Web Page Componets';

//const division = document.getElementById('topics');
//console.log(division);
//division.style.color = 'red';

document.querySelector('#topics').style.color = 'red';

let list = document.querySelector('.list');
list.style.border = '3px solid black';

let para = document.querySelector('p');
para.textContent = 'The foundational technologies that power websites and web applications';
para.style.backgroundColor = 'yellow';
para.style.color = 'black';
const b = document.querySelector('button');

function changeTheText(){
    let text = document.querySelector('h1');
    text.textContent = 'yo!'
}

b.addEventListener('click', changeTheText)
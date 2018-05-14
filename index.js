console.clear();
const b = document.querySelector('button');

function changeTheText(){
    const text = document.querySelector('.hi');
    text.textContent = 'yo!'
}

b.addEventListener('click', changeTheText)
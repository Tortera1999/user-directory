console.clear();
const b = document.querySelector('button');

function changeTheText(){
    const text = document.querySelector('.hi');
    const inputtedText = document.getElementById("inputting").value;
    text.textContent = inputtedText;

}

b.addEventListener('click', changeTheText);

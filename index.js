console.clear();
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');

function changeTheText(){
    const inputtedText = document.getElementById("inputting").value;
    const num = document.getElementById("inputting2").value;
    if(num == "1"){
        const text = document.querySelector('.hi1');
        text.textContent = "1- " + inputtedText;
    } else if(num == "2"){
        const text = document.querySelector('.hi2');
        text.textContent = "2- " + inputtedText;
    } else if(num == "3"){
        console.log(num);
        const text = document.querySelector('.hi3');
        text.textContent = "3- " + inputtedText;
    } else if(num == "4"){
        const text = document.querySelector('.hi4');
        text.textContent = "4- " + inputtedText;
    }else if(num == "5"){
        const text = document.querySelector('.hi5');  
        text.textContent = "5- " + inputtedText; 
    } else{
        window.alert("Invalid number!");
    }
}

function clearText(){
    document.getElementById("inputting").value = "";
    document.getElementById("inputting2").value = "";
}

b1.addEventListener('click', changeTheText);
b2.addEventListener('click', clearText);


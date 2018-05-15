console.clear();
const form = document.querySelector('form')
// const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');

function changeTheText(ev){
    ev.preventDefault();
    const inputtedText = document.getElementById("inputting").value;
    const num = document.getElementById("inputting2").value;
    // if(num == "1"){
    //     const text = document.querySelector('.hi1');
    //     text.textContent = "1- " + inputtedText;
    // } else if(num == "2"){
    //     const text = document.querySelector('.hi2');
    //     text.textContent = "2- " + inputtedText;
    // } else if(num == "3"){
    //     console.log(num);
    //     const text = document.querySelector('.hi3');
    //     text.textContent = "3- " + inputtedText;
    // } else if(num == "4"){
    //     const text = document.querySelector('.hi4');
    //     text.textContent = "4- " + inputtedText;
    // }else if(num == "5"){
    //     const text = document.querySelector('.hi5');  
    //     text.textContent = "5- " + inputtedText; 
    // } else{
    //     window.alert("Invalid number!");
    // }

    const text = document.querySelector('#users')
    const age = form.querySelector("#age").value
    const color = form.querySelector("#color").value
    const list = document.createElement('ul')
    const nameItem = document.createElement('li');
    nameItem.style.color = color
    nameItem.textContent = `Name: ${inputtedText}`
    list.appendChild(nameItem)

    const ageItem = document.createElement('li');
    ageItem.style.color = color
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem)
    // p.style.color = color
    // p.textContent = inputtedText + "," + age.value
    // //text.innerHTML += (`<p> {inputtedText}, {t.value}</p>`)
    text.appendChild(list)
    
    document.getElementById("inputting").value = "";
    document.getElementById("inputting2").value = "";
    form.reset()
    document.getElementById("inputting").focus();
}

function clearText(ev){
    document.getElementById("inputting").value = "";
    document.getElementById("inputting2").value = "";
}

// b1.addEventListener('click', changeTheText);
b2.addEventListener('click', clearText);
form.addEventListener('submit', changeTheText)


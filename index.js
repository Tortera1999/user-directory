const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()

  const users = document.querySelector('#users')
  users.appendChild(renderList())

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)

const clearList = document.querySelector('#b3')
clearList.addEventListener('click', clearTheList)

function renderList(){
    const userName = form.userName.value
    const age = form.age.value

    const list = document.createElement('ul')

    const nameItem = renderListItem(`Name: ${userName}`)
    const ageItem = renderListItem(`Age: ${age}`)
    const colorItem = renderListItem('Favorite Color: ')
    colorItem.appendChild(renderColorDiv())
  
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    return list
}

function renderListItem(x){
    const Y = document.createElement('li')
    Y.textContent = x
    return Y;
}
 
function renderColorDiv(){
    const colorDiv = document.createElement('div')
    const favoriteColor = form.favoriteColor.value
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorDiv.style.marginLeft = '0%'
    return colorDiv
}

function clearTheList(){
    (document.querySelector('#users')).remove()
    form.userName.focus()
}
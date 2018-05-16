const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
    ev.preventDefault()
  const form = ev.target

  const user = {
      'Name': form.userName.value,
      'Age': form.age.value,
      'Favorite Color': renderColor(form.favoriteColor.value),
  }

  const users = document.querySelector('#users')

  const list = document.createElement('ul')

  Object.keys(user).forEach(function(label){
    list.appendChild(renderListItem(label, user[label]))
  })

  users.appendChild(list)

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)

const clearList = document.querySelector('#b3')
clearList.addEventListener('click', clearTheList)

function renderListItem(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try {
      item.appendChild(value)
    } catch(e) {
      item.textContent += value
    }
    return item
}
 
function renderColor(color){
    // const colorDiv = document.createElement('div')
    // const favoriteColor = form.favoriteColor.value
    // colorDiv.style.backgroundColor = favoriteColor
    // colorDiv.style.width = '6rem'
    // colorDiv.style.height = '3rem'
    // colorDiv.style.marginLeft = '0%'
    // return colorDiv

    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorDiv.style.marginLeft = '0%'
    return colorDiv
}


function clearTheList(){
    (document.querySelector('#users')).remove()
    form.userName.focus()
}
let form = document.querySelector('form')
let widthIn = document.getElementById('heightInput')
let heightIn = document.getElementById('widthInput')
let colorIn = document.getElementById('colorInput')
let container = document.getElementById('container')


window.addEventListener('click',(event)=>{
    const div = document.createElement('div')
    div.style.width = widthIn.value + 'px'
    div.style.height = heightIn.value + 'px'
    div.style.backgroundColor = colorIn.value
    div.classList.add('created-div')
    div.style.left = event.clientX + 'px'
    div.style.top = event.clientY + 'px'
    container.appendChild(div)


})

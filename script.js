const colors = ['blue', 'green', 'purple', 'yellow', 'red', 'brown', 'pink', 'gray', 'orange', 'cyan']
const btn = document.getElementById('btn')
const color = document.querySelectorAll('.color')

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
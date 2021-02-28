const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Puja i love you',
    'Puja mera chus',
    'Puja bewafa hai',
    'Puja auro se marwata hai',
    'Why puja don\'t love me',
    'Ashis just stocked my github',
    'Dipta Sir is my favourite',
    'If you are a stocker, fuck off!',
]


const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
// Rest Default form Behaviour 
document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault()
})

// Password Visibility Toggle 
document.querySelector('#hideShowBtn').addEventListener('click', (e) => {
    if(document.querySelector('#hideShowBtn').classList[0] === 'hide') {
        document.querySelector('#hideShowBtn').src = './assets/eye-close.png';
        document.querySelector('#hideShowBtn').classList = 'show';
        document.querySelector('#password').setAttribute('type', 'text')
    } else {
        document.querySelector('#hideShowBtn').src = './assets/eye-open.png';
        document.querySelector('#hideShowBtn').classList = 'hide';
        document.querySelector('#password').setAttribute('type', 'password')
    }
})

// warning show and hide 
document.querySelector('#loginBtn').addEventListener('click', () => {
    document.querySelector('.warning').setAttribute('id', 'show')
})
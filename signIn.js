form = document.getElementById('form')
conf = document.getElementById('loginStatus')
document.addEventListener('submit', checkStatus) 

function checkStatus(e) {
    e.preventDefault();

    var userName = document.getElementById('userName').value;
    var userPass = document.getElementById('userPassword').value;
    
    if(userName == sessionStorage.getItem('username') && userPass == sessionStorage.getItem('password')) {
        conf.innerHTML = "<h4>Logged in.</h4>"
    } else {
        conf.innerHTML = "<h4>Username or password incorrect.</h4>"
    }
}

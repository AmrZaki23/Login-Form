var form1 = document.getElementById('form1');
var msg = document.getElementById('confermation');

document.addEventListener('submit', addData);

function addData(e) {
    e.preventDefault();

    var userName = document.getElementById('userName1').value;
    var userPass = document.getElementById('userPassword1').value;
    if(userName === '' || userPass === '') {
        alert("Username or Password can't be empty");
    } else {
        sessionStorage.setItem('username', userName);
        sessionStorage.setItem('password', userPass);
        msg.innerHTML = "<h4>Success! you can now sign in.</h4>";
    }
    
}

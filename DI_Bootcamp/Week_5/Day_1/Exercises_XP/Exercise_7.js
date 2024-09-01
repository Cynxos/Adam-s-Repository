(function(userName) {
    const navbar = document.querySelector('.navbar');
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `<img src="rdj-1.jpg" alt="Profile Picture"> Welcome, ${userName}!`;
    navbar.appendChild(userDiv);
})('John');

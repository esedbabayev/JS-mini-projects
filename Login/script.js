let users = [
  { userName: 'user1', password: '12345', name: 'Esed' },
  { userName: 'user2', password: '12345', name: 'Ferid' },
  { userName: 'user3', password: '12345', name: 'Celal' },
];

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault()
  const user = users.find(user => user.userName === username.value && user.password === password.value)

  if (user) {
    setTimeout(() => {
      window.location.href = 'account.html';
    }, 500);
    alert(`Welcome ${user.name}`);
  } else {
    alert("Invalid username or password");
  }
});
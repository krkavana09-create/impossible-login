const loginBtn = document.getElementById('login-btn');
const refreshBtn = document.getElementById('refresh-btn');


loginBtn.addEventListener('mouseover', () => {
  const rect = loginBtn.getBoundingClientRect();
  
  loginBtn.style.position = 'fixed';
  loginBtn.style.left = `${50 + Math.random() * (window.innerWidth - rect.width - 100)}px`;
  loginBtn.style.top = `${50 + Math.random() * (window.innerHeight - rect.height - 100)}px`;
  loginBtn.style.transform = 'none';
});


loginBtn.addEventListener('click', () => alert('🎉 Access Granted!'));


refreshBtn.addEventListener('click', () => {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  
 
  loginBtn.style.position = '';
  loginBtn.style.left = '';
  loginBtn.style.top = '';
  loginBtn.style.transform = '';
});
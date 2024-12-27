const btnLogin = document.getElementById('btnLogin');
const btnReg = document.getElementById('reg');
const btnFogot = document.getElementById('fogot');
const disLogin = document.getElementById('login');
const disReg = document.getElementById('register');
const disFgt = document.getElementById('fgt');
const btnLoginFgt = document.getElementById('btnLoginFgt');
const btnRegFgt = document.getElementById('regFgt');
const btnFogotReg = document.getElementById('fogotReg');

btnLogin.addEventListener('click', Login);
btnReg.addEventListener('click', Register);
btnFogot.addEventListener('click', Fogot);
btnFogotReg.addEventListener('click', Fogot);
btnLoginFgt.addEventListener('click', Login);
btnRegFgt.addEventListener('click', Register);

function Login() {
  disFgt.classList.add('hidden');
  disLogin.classList.remove('hidden');
  disReg.classList.add('hidden');
}

function Register() {
  disFgt.classList.add('hidden');
  disLogin.classList.add('hidden');
  disReg.classList.remove('hidden');
}

function Fogot() {
  disFgt.classList.remove('hidden');
  disLogin.classList.add('hidden');
  disReg.classList.add('hidden');
}
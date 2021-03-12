window.addEventListener("DOMContentLoaded", async (event) => {
  const displayFormButton = document.getElementById('displaySignUpFormButton');
  const signUpForm = document.getElementById('signUpForm');
  const demoUserButton = document.getElementById('demoUserButton');
  const logoDiv = document.getElementById('logoDiv');
  const backButton= document.getElementById('backToSplash');
  const loginForm= document.getElementById('login-form');
  const loginButton= document.getElementById('displayLoginFormButton');
  logoDiv.innerHTML= "I'm a logo placeholder"

  displayFormButton.addEventListener('click', async (event) =>{
    displayFormButton.setAttribute('class', 'hidden');
    demoUserButton.setAttribute('class', 'hidden');
    logoDiv.setAttribute('class', 'hidden');
    logoDiv.innerHTML='I am hiding!';
    signUpForm.classList.remove('hidden');
    console.log('I got clicked');
  })
  backButton.addEventListener('click', async (event) =>{
    displayFormButton.classList.remove('hidden');
    demoUserButton.classList.remove('hidden');
    logoDiv.classList.remove('hidden');
    logoDiv.innerHTML='I back!';
    signUpForm.setAttribute('class', 'hidden');
    console.log('I got clicked');
  })
  loginButton.addEventListener('click', async (event) =>{
    loginButton.setAttribute('class', 'hidden');
    loginForm.classList.remove('hidden');
    console.log('I got clicked');
  })
});
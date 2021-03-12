window.addEventListener("DOMContentLoaded", async (event) => {
  const displayFormButton = document.getElementById('displaySignUpFormButton');
  const signUpForm = document.getElementById('signUpForm');
  const demoUserButton = document.getElementById('demoUserButton');
  const logoDiv = document.getElementById('logoDiv');
  const backButton= document.getElementById('backToSplash')
  logoDiv.innerHTML= "I'm a logo placeholder"

  displayFormButton.addEventListener('click', async (event) =>{
    displayFormButton.setAttribute('class', 'hidden');
    demoUserButton.setAttribute('class', 'hidden');
    logoDiv.setAttribute('class', 'hidden');
    logoDiv.innerHTML='I am hiding!';
    signUpForm.setAttribute('class', 'signupForm');
    signUpForm.classList.remove('hidden');
    console.log('I got clicked');
  })
  backButton.addEventListener('click', async (event) =>{
    displayFormButton.classList.remove('hidden');
    demoUserButton.classList.remove('hidden');
    logoDiv.classList.remove('hidden');
    signUpForm.classList.remove('signupForm');
    logoDiv.innerHTML='I back!';
    signUpForm.setAttribute('class', 'hidden');
    console.log('I got clicked');
  })
});
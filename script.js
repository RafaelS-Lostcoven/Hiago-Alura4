// Get all the steps
const steps = document.querySelectorAll('.passo');

// Add event listeners to the buttons
document.querySelectorAll('.btn-proximo').forEach((button) => {
  button.addEventListener('click', (e) => {
    const nextStepId = e.target.dataset.proximo;
    const nextStep = document.getElementById(`passo-${nextStepId

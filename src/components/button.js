// src/components/Button.js

// Exportamos a função/componente para ser usada em outro lugar
export function renderButton(containerId, label, onClick) {
  const container = document.getElementById(containerId);
  const button = document.createElement('button');
  
  button.innerText = label;
  button.classList.add('btn-primary'); // Classe CSS
  button.addEventListener('click', onClick);

  container.appendChild(button);
}
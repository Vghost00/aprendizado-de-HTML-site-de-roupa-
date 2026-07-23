import header from `./components/header.js`;
import footer from `./components/footer.js`;
import './styles/main.css';
import { renderButton } from './components/Button.js';

// O main.js apenas coordena a execução
document.addEventListener('DOMContentLoaded', () => {
  
  // Renderiza o botão e define o que ele faz ao ser clicado
  renderButton('app', 'Clique aqui!', () => {
    alert('Botão clicado com sucesso!');
  });

});
const glitchText = document.querySelector('.glitch');

// Función para reiniciar la animación continuamente
function continuousGlitch() {
  glitchText.style.animation = 'none'; // Pausa la animación
  setTimeout(() => {
    glitchText.style.animation = ''; // Reactiva la animación
  }, 50); // Intervalo muy corto para que parezca continuo
}

// Llama a la función en intervalos regulares
setInterval(continuousGlitch, 500); // Ajusta el tiempo para controlar la frecuencia

const body = document.body;

// Lista de clases para el fondo
const bgClasses = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
let currentIndex = 0;

// Función para alternar el fondo
function changeBackground() {
  // Elimina todas las clases de fondo
  body.classList.remove(...bgClasses);

  // Añade la clase siguiente
  body.classList.add(bgClasses[currentIndex]);

  // Incrementa el índice y reinicia si llega al final
  currentIndex = (currentIndex + 1) % bgClasses.length;
}

// Llama a la función en intervalos regulares
setInterval(changeBackground, 500); // Cambia cada 700 ms

/* Toggle de videos extras */
function toggleMoreVideos() {
  const extraVideos = document.getElementById('extraVideos');
  const toggleBtn = document.getElementById('toggleBtn');
  const btnText = document.getElementById('btnText');

  extraVideos.classList.toggle('show');
  toggleBtn.classList.toggle('active');

  if (extraVideos.classList.contains('show')) {
    btnText.textContent = 'Show Less';
  } else {
    btnText.textContent = 'View More Works';
  }
}

/* Toggle de modal TOS con scroll automático */
function toggleTOS() {
  const tos = document.getElementById('tosContainer');
  
  if (tos.style.display === 'none' || tos.style.display === '') {
    tos.style.display = 'block';
    // Desplaza suavemente la vista hacia el modal del TOS para que se lea cómodo
    tos.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    tos.style.display = 'none';
  }
}
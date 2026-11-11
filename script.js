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

/* Toggle de modal TOS */
function toggleTOS() {
  const tos = document.getElementById('tosContainer');
  tos.style.display = tos.style.display === 'none' ? 'block' : 'none';
}

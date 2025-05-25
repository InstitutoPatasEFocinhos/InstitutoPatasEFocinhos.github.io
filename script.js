function mostrarSecao(id) {
  document.querySelectorAll('main section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function abrirLightbox(src) {
  const conteudo = document.getElementById("lightbox-conteudo");
  conteudo.innerHTML = '';

  if (src.endsWith(".mp4")) {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = '60%';
    video.style.height = 'auto';
    conteudo.appendChild(video);

  } else {
    const img = document.createElement('img');
    img.src = src;
    conteudo.appendChild(img);
  }

  document.getElementById("lightbox").style.display = "flex";
}

function fecharLightbox(event) {
  const lightboxConteudo = document.getElementById("lightbox-conteudo");
  if (!lightboxConteudo.contains(event.target)) {
    document.getElementById("lightbox").style.display = "none";
    lightboxConteudo.innerHTML = '';
  }
}

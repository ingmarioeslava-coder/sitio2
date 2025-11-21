
// LIGHTBOX
document.querySelectorAll('.lightbox-item').forEach(img=>{
  img.addEventListener('click',()=>{
    document.getElementById('lightbox-img').src=img.src;
    document.getElementById('lightbox').classList.remove('hidden');
  });
});
document.getElementById('closeLightbox').addEventListener('click',()=>{
  document.getElementById('lightbox').classList.add('hidden');
});

// FORMULARIO FLOTANTE
document.getElementById('openForm').onclick=()=>document.getElementById('floatingForm').classList.remove('hidden');
document.getElementById('closeForm').onclick=()=>document.getElementById('floatingForm').classList.add('hidden');

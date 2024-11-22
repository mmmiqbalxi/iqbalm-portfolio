const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const icon = themeToggle.querySelector('.iconify');
  if (document.body.classList.contains('dark-theme')) {
    icon.style.color = '#fff';
  } else {
    icon.style.color = '#000';
  }
});


// dark mode
const darkStyles = document.createElement('style');
darkStyles.textContent = `
  body.dark-theme {
    background-color: #333;
    color: #fff;
  }
  body.dark-theme .about {
    background-color: #444;
  }
  body.dark-theme .skills h3 {
    color: #fff}
  body.dark-theme .skill-card {
    background-color: #444}
  body.dark-theme .skill-card p {
   color: #fff}
  body.dark-theme .project-card {
   background-color: #444}
  body.dark-theme .project-card p {
   color: #fff}
  body.dark-theme .contact {
  background-color: #333}
  body.dark-theme .contact h3 {
  color: #fff}
  body.dark-theme .contact .form-group label {
  color: #fff}
  body.dark-theme .footer {
   background-color: #000}
`;
document.head.appendChild(darkStyles);

// Open Modal atau gambar membesar ketika di klik
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "flex";
  modalImage.src = imageSrc;
}

// Close Modal untuk menutup gambar
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}


const toggleBtn = document.querySelector(".btn");
const iconBtn = document.querySelector('.far')

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");

  if (iconBtn.classList.contains('fa-moon')) {
    iconBtn.classList.remove('fa-moon')
    iconBtn.classList.add('fa-sun')
  } else {
    iconBtn.classList.remove('fa-sun')
    iconBtn.classList.add('fa-moon')
  }
});

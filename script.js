window.addEventListener("scroll", () => {
    const container = document.querySelector(".menu-container");
    const scrollPosition = window.scrollY;
    const maxScroll = 700; // Máximo scroll en píxeles para que sea opaco

    // Calcula la opacidad en función de la posición del scroll
    const opacity = Math.min(scrollPosition / maxScroll, 1);

    // Aplica la opacidad al contenedor
    container.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1); // Obtiene el ID de destino
        const targetElement = document.getElementById(targetId);
        const offset = 100; // Cambia el valor al alto de tu menú fijo

        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
/*
const profileImage = document.querySelector('#portrait');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Desplaza la imagen hacia la izquierda al hacer scroll hacia abajo
    profileImage.style.transform = 'translateX(38vw)';
  } else {
    // Regresa la imagen a su posición original al hacer scroll hacia arriba
    profileImage.style.transform = 'translateX(0)';
  }

  lastScrollY = currentScrollY;
});
*/
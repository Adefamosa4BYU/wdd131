const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    document.getElementById("copyright").textContent =
  `©${new Date().getFullYear()} Rubia M. Francesco @ Madagascar`;

document.getElementById("last-modified").textContent =
  `Last Updated: ${document.lastModified}`;

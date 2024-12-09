const joinBtn = document.getElementById('join-btn');
    joinBtn.addEventListener('click', function() {
      joinBtn.textContent = 'Anda Bergabung!';
      joinBtn.style.backgroundColor = '#A58AB8';
      joinBtn.style.pointerEvents = 'none';
    });

    const cards = document.querySelectorAll('.card');

    function checkCardVisibility() {
      const windowHeight = window.innerHeight;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
          card.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', checkCardVisibility);
    checkCardVisibility();

    const style = document.createElement('style');
    style.innerHTML = `
      .card.visible {
        transform: translateY(0);
        opacity: 1;
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .card {
        transform: translateY(100px);
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
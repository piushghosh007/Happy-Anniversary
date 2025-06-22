    // Confetti animation
    function launchConfetti() {
      for (let i = 0; i < 40; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
      }
    }

    // Slideshow logic
    let slideIndex = 0;
    function showSlides() {
      const slides = document.querySelectorAll('.slide');
      slides.forEach(slide => slide.style.display = 'none');
      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 3000);
    }
    showSlides();

    // RSVP form handler
    function handleForm(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();
      if (name && message) {
        document.getElementById('response').innerText = `Thank you, ${name}! 💌 Your message has been received.`;
        event.target.reset();
      }
    }
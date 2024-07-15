function scrollToImage(index) {
    const container = document.querySelector('.scroll-container');
    const images = container.querySelectorAll('img');
    const image = images[index];
    
    if (image) {
      container.scrollTo({
        left: image.offsetLeft,
        behavior: 'smooth'
      });
    }
  }

//   section forth

document.querySelectorAll('.ccc').forEach(function(element) {
  element.addEventListener('click', function() {
    var newImgSrc = this.getAttribute('data-img');
    document.getElementById('mainImage').src = newImgSrc;
  });
});
  
//   section fifth 
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('h3[data-target]');
    const speed = 200; // Change the speed here

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('+', ''); // Remove + for calculation

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment) + '+';
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target + '+';
        }
      };

      updateCount();
    });
  });
// Get all the links and images
const links = document.querySelectorAll('.main-link');
const images = document.querySelectorAll('.stacked-img');

// Add hover effect to each link
links.forEach(link => {
  link.addEventListener('mouseenter', function() {
    // Get the image number from the data-image attribute
    const imageIndex = link.getAttribute('data-image');

    // Hide all images first
    images.forEach(img => {
      img.classList.remove('active');
    });

    // Show the hovered image by adding the 'active' class
    const activeImage = document.querySelector(`.stacked-img[data-image="${imageIndex}"]`);
    if (activeImage) {
      activeImage.classList.add('active');
    }
  });

  // Reset images when mouse leaves the link
  link.addEventListener('mouseleave', function() {
    images.forEach(img => {
      img.classList.remove('active');
    });
  });
});


// Function to update the <span> element based on the data-name of the active item in the Carousel


function updateCertificateText() {
    const activeCarouselItem = document.querySelector('.carousel-item.active');

    const dataName = activeCarouselItem.querySelector('img').getAttribute('data-name');
    
    const certificateSpan = document.querySelector('.certificate');
    
    certificateSpan.textContent = dataName;
}

updateCertificateText();

const certificateCarousel = document.getElementById('certificateCarousel');

certificateCarousel.addEventListener('slid.bs.carousel', updateCertificateText);



// Function to update the .selected-project based on the selected .project


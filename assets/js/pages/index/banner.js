// carrossel
function carrossel() {
    const slides = document.querySelectorAll('.slide');
    
    let index = 1;
    
    slides[0].classList.add('active');
    setInterval(() => {
    
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
    
        slides[index].classList.add('active');
        
        index = (index + 1) % slides.length;
    }, 5000);
    
}

export { carrossel }
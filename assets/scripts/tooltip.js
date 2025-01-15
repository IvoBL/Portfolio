document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.tech-img');

    images.forEach(image => {
        const tooltipText = image.getAttribute('data-tooltip');
        const tooltip = document.createElement('label');
        tooltip.className = 'tooltip';
        tooltip.innerText = tooltipText;
        
        image.parentElement.appendChild(tooltip);

        image.addEventListener('mouseover', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        image.addEventListener('mouseout', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images2 = document.querySelectorAll('.subtech-img');

    images2.forEach(image => {
        const tooltipText = image.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = tooltipText;
        
        image.parentElement.appendChild(tooltip);

        image.addEventListener('mouseover', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        image.addEventListener('mouseout', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
});
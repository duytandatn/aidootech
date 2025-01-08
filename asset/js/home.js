const slider = document.querySelector('.roadmap-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Add navigation button functionality
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const scrollAmount = 300;

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= scrollAmount;
});

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += scrollAmount;
});

// bảng giá
const ctx = document.getElementById('tokenChart').getContext('2d');
const tokenChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            '10/12/2024', '11/12/2024', '12/12/2024', '13/12/2024',
            '14/12/2024', '15/12/2024', '16/12/2024', '17/12/2024',
            '18/12/2024', '19/12/2024', '20/12/2024'
        ],
        datasets: [{
            label: 'Aidoo token price',
            data: [0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.11, 0.11, 0.11],
            borderColor: '#4BA3C3',
            backgroundColor: 'rgba(75, 163, 195, 0.2)',
            pointBackgroundColor: '#4BA3C3', 
            pointBorderColor: '#fff',
            pointRadius: 5,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
});
// Configuración de la primera gráfica (porcentaje de personas con discapacidad auditiva)
const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
    type: 'doughnut', // Gráfico de dona
    data: {
        labels: ['Personas con discapacidad', 'Otras poblaciones'],
        datasets: [{
            data: [459772, 49000000], // Modifica estos valores
            backgroundColor: ['#8a6bb5', '#d3c3e6'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

// Configuración de la segunda gráfica (Acceso a intérpretes de señas)
const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
    type: 'bar', // Gráfico de barras
    data: {
        labels: ['Disponible', 'No disponible'],
        datasets: [{
            label: 'Acceso a intérpretes de señas',
            data: [1200, 458572], // Modifica estos valores
            backgroundColor: ['#6b4e9b', '#d3c3e6'],
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
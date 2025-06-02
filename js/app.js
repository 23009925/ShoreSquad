// Main application JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    initApp();
});

function initApp() {
    // Set up event listeners
    setupEventListeners();
    
    // Initialize map (placeholder for now)
    initMap();
    
    // Initialize weather widget
    initWeatherWidget();
}

function setupEventListeners() {
    // CTA button click handler
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Smooth scroll to map section
            document.querySelector('#map').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // Add smooth scrolling to all navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
}

function initMap() {
    const mapContainer = document.getElementById('cleanup-map');
    if (mapContainer) {
        // Placeholder for map initialization
        // TODO: Implement actual map integration
        mapContainer.innerHTML = '<div style="padding: 20px; text-align: center;">Map loading...</div>';
    }
}

function initWeatherWidget() {
    const weatherContainer = document.getElementById('weather-widget');
    if (weatherContainer) {
        // Placeholder for weather widget
        // TODO: Implement actual weather API integration
        weatherContainer.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <h3>Weather Information Coming Soon</h3>
                <p>We're working on bringing you real-time weather updates!</p>
            </div>
        `;
    }
}

// Add smooth scrolling behavior
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

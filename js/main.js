/**
 * BenchmarkBot - Main JavaScript
 * This file contains the main functionality for the website
 */

// Document Ready Function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Set up dark mode toggle
    setupDarkMode();
    
    // Populate data
    populateLeaderboardTables();
    populateFeaturesTable();
    populatePricingCards();
    
    // Set the last update date
    document.getElementById('last-update-date').textContent = lastUpdateDate;
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up interactive cube
    setupInteractiveCube();
    
    // Initialize live data updates
    initLiveUpdates();
    
    // Listen for live data updates
    document.addEventListener('liveDataUpdated', function() {
        // Update the tables when live data changes
        populateLeaderboardTables();
        // Update the last update text
        document.getElementById('last-update-date').textContent = 'Just now';
    });
    
    // Fetch data from livebench.ai (simulated)
    fetchLiveBenchmarkData();
});

/**
 * Fetch live data from livebench.ai
 */
async function fetchLiveBenchmarkData() {
    try {
        const liveData = await getLiveBenchData();
        if (liveData && liveData.success) {
            console.log('Successfully fetched data from livebench.ai');
            // In a real implementation, we would update our data with the fetched data
            showNotification('Live data updated from livebench.ai');
        }
    } catch (error) {
        console.error('Error fetching data from livebench.ai:', error);
    }
}

/**
 * Setup for the interactive 3D cube
 */
function setupInteractiveCube() {
    const cube = document.querySelector('.cube');
    if (!cube) return;
    
    // Remove any existing controls if present
    const existingControls = document.querySelector('.cube-controls');
    if (existingControls) {
        existingControls.remove();
    }
    
    // Variables to track cube rotation
    let xRotation = 0;
    let yRotation = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let autoRotate = true;
    let autoRotationSpeed = 0.5;
    let manualXRotation = 0;
    let manualYRotation = 0;
    
    // Make cube draggable with mouse
    cube.addEventListener('mousedown', function(e) {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
        e.preventDefault();
        
        // Don't pause animation, just mark as dragging
        cube.style.animation = 'none'; // Temporarily disable animation while dragging
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const dx = e.clientX - previousMousePosition.x;
        const dy = e.clientY - previousMousePosition.y;
        
        manualYRotation += dx * 0.5;
        manualXRotation += dy * 0.5;
        
        updateCubeRotation();
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            
            // Store the final rotation values
            xRotation = manualXRotation;
            yRotation = manualYRotation;
            
            // Resume the auto-rotation animation with custom values
            startAutoRotation();
        }
    });
    
    // Touch support for mobile
    cube.addEventListener('touchstart', function(e) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        e.preventDefault();
        
        // Don't pause animation, just mark as dragging
        cube.style.animation = 'none';
    });
    
    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        
        const dx = e.touches[0].clientX - previousMousePosition.x;
        const dy = e.touches[0].clientY - previousMousePosition.y;
        
        manualYRotation += dx * 0.5;
        manualXRotation += dy * 0.5;
        
        updateCubeRotation();
        
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });
    
    document.addEventListener('touchend', function() {
        if (isDragging) {
            isDragging = false;
            
            // Store the final rotation values
            xRotation = manualXRotation;
            yRotation = manualYRotation;
            
            // Resume the auto-rotation animation with custom values
            startAutoRotation();
        }
    });
    
    // Custom auto-rotation animation
    let animationFrameId;
    
    function startAutoRotation() {
        // Cancel any existing animation
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        
        // Time tracking
        let lastTime = null;
        
        function animate(time) {
            if (!lastTime) {
                lastTime = time;
            }
            
            const deltaTime = time - lastTime;
            lastTime = time;
            
            // Don't update if dragging
            if (!isDragging && autoRotate) {
                // Auto rotation increments
                xRotation += autoRotationSpeed * 0.1;
                yRotation += autoRotationSpeed * 0.2;
                
                updateCubeRotation();
            }
            
            animationFrameId = requestAnimationFrame(animate);
        }
        
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Function to update cube rotation
    function updateCubeRotation() {
        if (isDragging) {
            cube.style.transform = `rotateX(${manualXRotation}deg) rotateY(${manualYRotation}deg)`;
        } else {
            cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        }
    }
    
    // Make faces react to hover without pausing
    const faces = cube.querySelectorAll('.face');
    
    faces.forEach(face => {
        face.addEventListener('mouseenter', function() {
            // Just scale up the face on hover without pausing
            this.style.transform = this.style.transform.replace('scale(1)', 'scale(1.1)');
        });
        
        face.addEventListener('mouseleave', function() {
            // Restore original transform
            this.style.transform = this.style.transform.replace('scale(1.1)', 'scale(1)');
        });
    });
    
    // Start auto-rotation
    startAutoRotation();
    
    // Remove auto-rotation CSS animation since we're doing it with JS
    cube.style.animation = 'none';
}

/**
 * Dark Mode Setup
 */
function setupDarkMode() {
    const checkbox = document.getElementById('checkbox');
    
    // Check for saved theme preference or use system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && 
                       localStorage.getItem('darkMode') === null);
    
    // Apply theme based on preference
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        checkbox.checked = true;
    }
    
    // Theme toggle listener
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
}

/**
 * Populate Leaderboard Tables
 */
function populateLeaderboardTables() {
    // Overall Leaderboard
    populateTable('overall-leaderboard', overallLeaderboardData, [
        'rank', 
        'model', 
        'provider', 
        'overallScore', 
        'reasoning', 
        'coding', 
        'math', 
        'lastUpdated'
    ]);
    
    // Reasoning Leaderboard
    populateTable('reasoning-leaderboard', reasoningLeaderboardData, [
        'rank', 
        'model', 
        'provider', 
        'reasoningScore', 
        'mmlu', 
        'hellaswag', 
        'truthfulqa', 
        'lastUpdated'
    ]);
    
    // Coding Leaderboard
    populateTable('coding-leaderboard', codingLeaderboardData, [
        'rank', 
        'model', 
        'provider', 
        'codingScore', 
        'humaneval', 
        'mbpp', 
        'ds1000', 
        'lastUpdated'
    ]);
    
    // Math Leaderboard
    populateTable('math-leaderboard', mathLeaderboardData, [
        'rank', 
        'model', 
        'provider', 
        'mathScore', 
        'gsm8k', 
        'math', 
        'lastUpdated'
    ]);
    
    // Vision Leaderboard
    populateTable('vision-leaderboard', visionLeaderboardData, [
        'rank', 
        'model', 
        'provider', 
        'visionScore', 
        'mmmu', 
        'seedbench', 
        'lastUpdated'
    ]);
}

/**
 * Helper function to populate a table from data
 */
function populateTable(tableId, data, fields) {
    const tableBody = document.getElementById(tableId);
    if (!tableBody) return;
    
    let html = '';
    
    data.forEach(item => {
        html += '<tr>';
        
        fields.forEach(field => {
            if (field === 'rank') {
                html += `<td class="text-center"><span class="rank-badge">${item[field]}</span></td>`;
            } else if (field === 'model') {
                html += `<td><strong>${item[field]}</strong></td>`;
            } else if (field === 'overallScore' || field === 'reasoningScore' || field === 'codingScore' || field === 'mathScore' || field === 'visionScore') {
                html += `<td class="text-center"><span class="score-badge">${item[field]}</span></td>`;
            } else if (field === 'lastUpdated') {
                html += `<td><small class="text-muted">${item[field]}</small></td>`;
            } else {
                html += `<td>${item[field]}</td>`;
            }
        });
        
        html += '</tr>';
    });
    
    tableBody.innerHTML = html;
}

/**
 * Populate Features Table
 */
function populateFeaturesTable() {
    const featuresTable = document.getElementById('features-tbody');
    if (!featuresTable) return;
    
    let html = '';
    
    featuresData.forEach(item => {
        html += `<tr class="model-row" data-type="${item.type}">`;
        html += `<td><strong>${item.model}</strong> <small class="text-muted">${item.provider}</small></td>`;
        html += `<td>${item.contextLength}</td>`;
        html += `<td>${getFeatureIcon(item.vision)}</td>`;
        html += `<td>${getFeatureIcon(item.toolUsage)}</td>`;
        html += `<td>${getFeatureIcon(item.codeGen)}</td>`;
        html += `<td>${getFeatureIcon(item.fineTuning)}</td>`;
        html += `<td>${getFeatureIcon(item.ragSupport)}</td>`;
        html += '</tr>';
    });
    
    featuresTable.innerHTML = html;
    
    // Add new DeepSeek filter to model selector
    const modelSelector = document.querySelector('.model-selector');
    if (modelSelector && !document.querySelector('[data-model="deepseek"]')) {
        const deepseekBtn = document.createElement('button');
        deepseekBtn.type = 'button';
        deepseekBtn.className = 'btn btn-outline-primary';
        deepseekBtn.setAttribute('data-model', 'deepseek');
        deepseekBtn.textContent = 'DeepSeek';
        
        // Insert before mistral button
        const mistralBtn = document.querySelector('[data-model="mistral"]');
        if (mistralBtn) {
            modelSelector.insertBefore(deepseekBtn, mistralBtn);
        } else {
            modelSelector.appendChild(deepseekBtn);
        }
        
        // Add event listener
        deepseekBtn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.model-selector .btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to this button
            this.classList.add('active');
            
            // Filter table
            filterFeaturesTable('deepseek');
        });
    }
}

/**
 * Get appropriate icon for feature
 */
function getFeatureIcon(feature) {
    if (feature === 'Advanced') {
        return '<span class="feature-badge advanced"><i class="fas fa-check-circle"></i> Advanced</span>';
    } else if (feature === 'Good') {
        return '<span class="feature-badge good"><i class="fas fa-check"></i> Good</span>';
    } else if (feature === 'Basic') {
        return '<span class="feature-badge basic"><i class="fas fa-minus"></i> Basic</span>';
    } else if (feature === 'Limited') {
        return '<span class="feature-badge limited"><i class="fas fa-exclamation-circle"></i> Limited</span>';
    } else if (feature === 'No') {
        return '<span class="feature-badge no"><i class="fas fa-times"></i> No</span>';
    } else {
        return feature;
    }
}

/**
 * Populate Pricing Cards
 */
function populatePricingCards() {
    const pricingContainer = document.getElementById('pricing-cards');
    if (!pricingContainer) return;
    
    let html = '';
    
    pricingData.forEach(item => {
        html += `
            <div class="col">
                <div class="pricing-card">
                    <div class="card-header">
                        <h3 class="model-name">${item.model}</h3>
                        <p class="provider">${item.provider}</p>
                    </div>
                    <div class="price">
                        ${item.priceInput} - ${item.priceOutput}
                        <span class="price-suffix">${item.priceUnit}</span>
                    </div>
                    <ul class="features-list">
                        ${item.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                        ${item.apiAccess ? '<li><i class="fas fa-check-circle"></i> API access available</li>' : ''}
                    </ul>
                    <a href="#" class="btn btn-primary w-100">API Documentation</a>
                </div>
            </div>
        `;
    });
    
    pricingContainer.innerHTML = html;
}

/**
 * Set up event listeners
 */
function setupEventListeners() {
    // Model selector for features table
    const modelSelectors = document.querySelectorAll('.model-selector .btn');
    modelSelectors.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            modelSelectors.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get model type
            const modelType = this.getAttribute('data-model');
            
            // Filter table
            filterFeaturesTable(modelType);
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Implement "Learn More" button functionality
    const learnMoreBtn = document.querySelector('a.btn-outline-primary[href="#"]');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to the features section
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Make detailed pricing button work
    const detailedPricingBtn = document.querySelector('.pricing-section .btn-outline-primary');
    if (detailedPricingBtn) {
        detailedPricingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Open livebench.ai in a new tab
            window.open('https://livebench.ai', '_blank');
        });
    }
}

/**
 * Filter features table by model type
 */
function filterFeaturesTable(modelType) {
    const rows = document.querySelectorAll('#features-tbody tr');
    
    rows.forEach(row => {
        const type = row.getAttribute('data-type');
        
        if (modelType === 'all' || type === modelType) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

/**
 * Show a notification
 */
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add some CSS for the notification
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .notification.show {
            transform: translateY(0);
            opacity: 1;
        }
        
        .notification-content {
            background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
        }
        
        .notification-content i {
            margin-right: 10px;
        }
        
        .rank-badge {
            display: inline-block;
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            font-weight: bold;
        }
        
        .score-badge {
            display: inline-block;
            padding: 3px 8px;
            background-color: rgba(108, 92, 231, 0.1);
            color: var(--primary-color);
            border-radius: 20px;
            font-weight: bold;
        }
        
        .feature-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 20px;
            font-size: 0.85rem;
        }
        
        .feature-badge.advanced {
            background-color: rgba(39, 174, 96, 0.1);
            color: #27ae60;
        }
        
        .feature-badge.good {
            background-color: rgba(52, 152, 219, 0.1);
            color: #3498db;
        }
        
        .feature-badge.basic {
            background-color: rgba(241, 196, 15, 0.1);
            color: #f1c40f;
        }
        
        .feature-badge.limited {
            background-color: rgba(230, 126, 34, 0.1);
            color: #e67e22;
        }
        
        .feature-badge.no {
            background-color: rgba(231, 76, 60, 0.1);
            color: #e74c3c;
        }
        
        .dark-mode .score-badge {
            background-color: rgba(0, 206, 201, 0.1);
            color: var(--secondary-color);
        }
        
        .dark-mode .feature-badge.advanced {
            background-color: rgba(39, 174, 96, 0.2);
        }
        
        .dark-mode .feature-badge.good {
            background-color: rgba(52, 152, 219, 0.2);
        }
        
        .dark-mode .feature-badge.basic {
            background-color: rgba(241, 196, 15, 0.2);
        }
        
        .dark-mode .feature-badge.limited {
            background-color: rgba(230, 126, 34, 0.2);
        }
        
        .dark-mode .feature-badge.no {
            background-color: rgba(231, 76, 60, 0.2);
        }
    </style>
`); 
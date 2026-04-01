const layers = [
    { petals: 6, scale: 1.0, z: 0, delay: 0 },
    { petals: 6, scale: 0.85, z: 10, delay: 0.5 },
    { petals: 6, scale: 0.7, z: 20, delay: 1.0 },
    { petals: 6, scale: 0.55, z: 30, delay: 1.5 },
    { petals: 6, scale: 0.4, z: 40, delay: 2.0 },
    { petals: 4, scale: 0.25, z: 50, delay: 2.5 }
];

document.querySelectorAll('.blossom').forEach((blossom, index) => {
    layers.forEach((layer, layerIndex) => {
        const step = 360 / layer.petals;
        for (let i = 0; i < layer.petals; i++) {
            const rot = i * step + (Math.random() * 15 - 7.5);
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.style.setProperty('--rot', rot + 'deg');
            petal.style.setProperty('--scale', layer.scale);
            petal.style.setProperty('--z', layer.z + 'px');
            
            const l1 = 55 - (layerIndex * 5);
            const l2 = 35 - (layerIndex * 5);
            petal.style.setProperty('--c1', `hsl(340, 100%, ${l1}%)`);
            petal.style.setProperty('--c2', `hsl(340, 100%, ${l2}%)`);
            
            // Set delay dynamically
            const totalDelay = (index * 0.4) + layer.delay + (Math.random() * 0.2) + 2.0; 
            petal.style.animationDelay = totalDelay + 's';
            
            blossom.appendChild(petal);
        }
    });

    blossom.style.animationDelay = (index * 0.5) + 's';
});

// Create starry night background
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.animationDelay = Math.random() * 2 + 's';
    starsContainer.appendChild(star);
}

// Create glowing fireflies
for (let i = 0; i < 30; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    firefly.style.left = Math.random() * 100 + 'vw';
    firefly.style.animationDuration = (Math.random() * 15 + 10) + 's';
    firefly.style.animationDelay = Math.random() * 10 + 's';
    starsContainer.appendChild(firefly);
}

// Create falling petals
function createFallingPetal() {
    const petal = document.createElement('div');
    petal.classList.add('falling-petal');
    
    const startLeft = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5;
    
    petal.style.left = startLeft + 'px';
    petal.style.animationDuration = duration + 's';
    
    document.body.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}
setInterval(createFallingPetal, 600); 

// Touch interaction - spawn interactive glowing hearts
function spawnHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = (x - 15) + 'px';
    heart.style.top = (y - 15) + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
}

document.addEventListener('mousedown', (e) => {
    spawnHeart(e.clientX, e.clientY);
});

document.addEventListener('touchstart', (e) => {
    for (let i = 0; i < e.touches.length; i++) {
        spawnHeart(e.touches[i].clientX, e.touches[i].clientY);
    }
});

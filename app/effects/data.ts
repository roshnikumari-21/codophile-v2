export const effectsData = [
    {
        id: "neon-button",
        title: "Cyberpunk Neon Glow Button Effect",
        description: "Create a futuristic cyberpunk-style button with pulsating neon glow effects using pure CSS box-shadow and text-shadow. Perfect for gaming websites and modern dark-mode UIs. This effect utilizes CSS keyframes for smooth animation and hover states.",
        keywords: ["css neon button", "cyberpunk css", "glowing button", "css3 animation", "web design effects", "box-shadow glow"],
        code: {
            html: `<button class="neon-button">
    HOVER ME
</button>`,
            css: `/* Define the custom font family in your project if needed */
.neon-button {
    font-size: 1.5rem;
    padding: 1rem 3rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px; /* Slightly rounded */
    position: relative;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 0 10px rgba(3, 233, 244, 0.2);
    /* Neon accent */
}

/* Container for consistency */
body {
    background: #030014;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    position: relative;
}

/* Tech Grid Background */
body::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
    pointer-events: none;
    z-index: -1;
}

.neon-button:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
     -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}`,
            js: `// No JavaScript needed for this CSS-only effect!`
        }
    },
    {
        id: "glass-morphism",
        title: "Modern Glassmorphism Card UI",
        description: "Implement the popular Glassmorphism design trend using CSS backdrop-filter: blur(). This card features a frosted glass look with semi-transparent background, subtle borders, and smooth noise texture, suitable for modern dashboard designs and overlay cards.",
        keywords: ["glassmorphism css", "backdrop-filter", "frosted glass effect", "ui design trend", "css card design", "transparency"],
        code: {
            html: `<div class="glass-container">
    <div class="glass-card">
        <h2>Glass Card</h2>
        <p>This is a modern glassmorphism effect using backdrop-filter. It creates a frosted glass look.</p>
        <button class="glass-btn">Read More</button>
    </div>
</div>`,
            css: `.glass-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #030014; /* Deep space dark */
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
}

/* Grid Background */
.glass-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
    pointer-events: none;
}

/* Floating Orb for visual interest */
.glass-container::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #ec4899, #8b5cf6);
    filter: blur(80px);
    border-radius: 50%;
    z-index: 0;
    opacity: 0.4;
    animation: float 10s infinite ease-in-out;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -50px); }
}

.glass-card {
    background: rgba(255, 255, 255, 0.05); /* Lighter glass */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding: 40px;
    border-radius: 20px;
    color: white;
    max-width: 350px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    z-index: 1;
}

.glass-card h2 {
    margin-top: 0;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #fff, #aaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.glass-card p {
    font-weight: 400;
    opacity: 0.7;
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 2rem;
}

.glass-btn {
    padding: 12px 24px;
    border: none;
    background: linear-gradient(45deg, #ec4899, #8b5cf6);
    color: white;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
}

.glass-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(236, 72, 153, 0.5);
}`,
            js: `// No JavaScript needed! pure CSS magic.`
        }
    },
    {
        id: "magnetic-button",
        title: "Magnetic Button Interaction",
        description: "A highly interactive button that magnetically attracts to the user's cursor movement. This advanced JavaScript effect calculates mouse position relative to the element to create a fluid, organic feel. Ideal for call-to-action buttons that demand attention.",
        keywords: ["magnetic button", "javascript interaction", "mousemove effect", "interactive ui", "cursor effect", "gsap alternative"],
        code: {
            html: `<div class="container">
    <button class="magnetic-btn">
        <span class="text">Catch Me</span>
    </button>
</div>`,
            css: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #030014; /* Deep space dark */
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
}

/* Tech Grid Background */
.container::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
    pointer-events: none;
}

.magnetic-btn {
    padding: 25px 50px;
    font-size: 18px;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.05); /* Glassy base */
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.1s ease; /* Smooth reset, JS handles active move */
    position: relative;
    overflow: hidden;
    z-index: 1;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

/* Gradient text or glow */
.magnetic-btn .text {
    position: relative;
    z-index: 2;
    pointer-events: none;
}

/* Magnetic Hover Gradient */
.magnetic-btn::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
    z-index: -1;
    transition: opacity 0.3s;
    opacity: 0;
    border-radius: 50px;
}

.magnetic-btn:hover {
    box-shadow: 
        0 0 30px rgba(99, 102, 241, 0.4),
        0 0 60px rgba(139, 92, 246, 0.2);
    border-color: rgba(255,255,255,0.2);
}

.magnetic-btn:hover::before {
    opacity: 1;
}`,
            js: `const btn = document.querySelector('.magnetic-btn');

// Config
const strength = 0.5; // How strong the magnet is

btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    
    // Calculate distance from center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Move button towards mouse
    btn.style.transform = \`translate(\${x * strength}px, \${y * strength}px)\`;
});

btn.addEventListener('mouseleave', () => {
    // Reset position
    btn.style.transform = 'translate(0px, 0px)';
});`
        }
    },
    {
        id: "uncatchable-button",
        title: "Uncatchable Button",
        description: "A playful button that intelligently evades your cursor! It calculates the approach vector and moves in the opposite direction, ensuring it never leaves the screen area. Try to corner it if you can!",
        keywords: ["uncatchable button", "dodging button", "javascript game", "interactive ui", "prank ui", "mouse interaction", "vector math"],
        code: {
            html: `<div class="game-container">
    <button class="dodging-btn">Can't Touch This</button>
</div>`,
            css: `.game-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #030014; /* Deep space dark */
    position: relative;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
}

/* Optional grid background for tech feel */
.game-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
    pointer-events: none;
}

.dodging-btn {
    position: absolute;
    padding: 16px 32px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 
        0 0 20px rgba(168, 85, 247, 0.2),
        inset 0 0 20px rgba(168, 85, 247, 0.1);
    transition: all 0.05s cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    z-index: 10;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 1px;
    overflow: hidden;
}

/* Gradient border effect */
.dodging-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px; 
    background: linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4);
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}

/* Hover glow */
.dodging-btn:hover {
    box-shadow: 
        0 0 30px rgba(236, 72, 153, 0.4),
        0 0 60px rgba(139, 92, 246, 0.2);
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.1);
}

.dodging-btn:active {
    transform: scale(0.95);
}`,
            js: `const btn = document.querySelector('.dodging-btn');
const container = document.querySelector('.game-container');

// Configuration
const padding = 250; // Detection radius
const speed = 4.0; // Evasion speed

let btnX = 0;
let btnY = 0;

// Initialize to center
const init = () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    btnX = (containerRect.width - btnRect.width) / 2;
    btnY = (containerRect.height - btnRect.height) / 2;
    updatePosition();
};

const updatePosition = () => {
    btn.style.left = \`\${btnX}px\`;
    btn.style.top = \`\${btnY}px\`;
};

container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // Mouse position relative to container
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    
    // Button center
    const btnCenterX = btnX + btnRect.width / 2;
    const btnCenterY = btnY + btnRect.height / 2;
    
    // Distance
    const dx = mouseX - btnCenterX;
    const dy = mouseY - btnCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < padding) {
        // TELEPORT IF CORNERED
        // If we are close to ANY wall (not just corners) and mouse is very close
        const isNearWall = btnX <= 10 || btnX >= maxX - 10 || btnY <= 10 || btnY >= maxY - 10;
        
        if (isNearWall && distance < 100) {
            // Teleport to a safer spot (opposite side of mouse)
            // Or just random center area to be safe
             btnX = Math.random() * (maxX * 0.6) + (maxX * 0.2);
             btnY = Math.random() * (maxY * 0.6) + (maxY * 0.2);
             updatePosition();
             return; // Skip normal movement
        }

        // Standard Move
        const moveX = -(dx / distance) * (padding - distance) * speed;
        const moveY = -(dy / distance) * (padding - distance) * speed;
        
        let newX = btnX + moveX;
        let newY = btnY + moveY;
        
        // Boundaries
        newX = Math.min(Math.max(0, newX), maxX);
        newY = Math.min(Math.max(0, newY), maxY);
        
        btnX = newX;
        btnY = newY;
        
        updatePosition();
    }
});

window.addEventListener('resize', init);
setTimeout(init, 100);

btn.addEventListener('click', () => {
    alert("Impossible! You caught me! 🤯");
});`
        }
    }
];

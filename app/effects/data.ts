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
    },
{
    id: "neon-typewriter",
    title: "Glow-Flow Typewriter",
    description: "A high-end text rotation effect with a rhythmic blinking cursor. Features a multi-layered text-shadow for a neon 'bloom' effect that matches modern dark-mode aesthetics.",
    keywords: ["typewriter", "neon text", "blinking cursor", "modern ui"],
    code: {
        html: `<div class="tw-wrapper">
    <h1 class="tw-title">
        Always <span id="tw-target" class="tw-accent"></span><span class="tw-cursor">_</span>
    </h1>
</div>`,
        css: `/* Update your Typewriter Effect CSS to this */
.tw-wrapper {
    /* Ensure the container is always full-width/height of the iframe */
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    
    /* Centralize content */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* This forces the background color to fill the entire preview area */
    background-color: #030014; 
    overflow: hidden;
    position: relative;
}

.tw-title {
    color: #fff;
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
    /* Use flex here to keep "Always", the text, and cursor in one line */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2em; /* This controls the gap between "Always" and your changing text */
}

.tw-accent {
    /* Remove the large min-width that was pushing the cursor away */
    display: inline-block;
    min-width: 20px; 
    text-align: left;
    background: linear-gradient(to right, #f472b6, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.tw-cursor {
    color: #f472b6;
    /* Use margin-left to pull it slightly closer to the text if needed */
    margin-left: -0.1em; 
    font-weight: 200;
    animation: blink 0.8s step-end infinite;
}
@keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
}`,
        js: `const target = document.getElementById('tw-target');
const words = ["Evolving", "Coding", "Scaling", "Refining"];
let wordIdx = 0, charIdx = 0, deleting = false;

function play() {
    const word = words[wordIdx];
    target.innerText = word.substring(0, charIdx + (deleting ? -1 : 1));
    charIdx += deleting ? -1 : 1;

    let speed = deleting ? 100 : 200;
    if (!deleting && charIdx === word.length) {
        deleting = true;
        speed = 2000;
    } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 500;
    }
    setTimeout(play, speed);
}
play();`
    }
},
{
    id: "magnetic-social-icons",
    title: "Gravity-Flex Social Dock",
    description: "A liquid-interaction social bar where icons exhibit gravitational pull. Icons are wrapped in anchor tags, making it a fully functional navigation component for your portfolio or landing page.",
    keywords: ["magnetic icons", "social media links", "navigation dock", "javascript interaction", "vector math"],
    code: {
        html: `<div class="social-dock">
    <a href="/" target="_blank" class="magnetic-item" data-platform="github" title="GitHub">
        <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </div>
    </a>
    <a href="/" target="_blank" class="magnetic-item" data-platform="youtube" title="YouTube">
        <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
        </div>
    </a>
    <a href="/" target="_blank" class="magnetic-item" data-platform="instagram" title="Instagram">
        <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        </div>
    </a>
    <a href="/" target="_blank" class="magnetic-item" data-platform="twitter" title="X (Twitter)">
        <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        </div>
    </a>
    <a href="/" target="_blank" class="magnetic-item" data-platform="linkedin" title="LinkedIn">
        <div class="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </div>
    </a>
</div>`,
        css: `/* (Keeping the same CSS as before) */
body {
    background: #030014;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.social-dock {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 100px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.magnetic-item {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none; /* Important for links */
    cursor: pointer;
    position: relative;
}

.icon-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #64748b;
    transition: color 0.3s ease, transform 0.15s ease-out;
}

.icon-wrapper svg {
    width: 22px;
    height: 22px;
}

.magnetic-item[data-platform="github"]:hover .icon-wrapper { color: #fff; filter: drop-shadow(0 0 8px #fff); }
.magnetic-item[data-platform="youtube"]:hover .icon-wrapper { color: #ff0000; filter: drop-shadow(0 0 8px #ff0000); }
.magnetic-item[data-platform="instagram"]:hover .icon-wrapper { color: #f472b6; filter: drop-shadow(0 0 8px #f472b6); }
.magnetic-item[data-platform="twitter"]:hover .icon-wrapper { color: #38bdf8; filter: drop-shadow(0 0 8px #38bdf8); }
.magnetic-item[data-platform="linkedin"]:hover .icon-wrapper { color: #60a5fa; filter: drop-shadow(0 0 8px #60a5fa); }`,
        js: `const items = document.querySelectorAll('.magnetic-item');

items.forEach(item => {
    const wrapper = item.querySelector('.icon-wrapper');
    
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        
        wrapper.style.transform = \`translate(\${dx * 0.4}px, \${dy * 0.4}px) scale(1.2)\`;
    });
    
    item.addEventListener('mouseleave', () => {
        wrapper.style.transform = 'translate(0px, 0px) scale(1)';
    });
});`
    }
}
];

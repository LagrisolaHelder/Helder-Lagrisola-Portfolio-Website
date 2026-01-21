// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ... existing init() code ...

function init() {
    // ... all your existing scene, camera, renderer, stars, and heroShape code ...

    // --- GSAP SCROLL ANIMATIONS ---

    // 1. Hero Text Entrance
    gsap.from("#hero h1", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });

    // 2. Animate 3D Object on Scroll
    // When scrolling from Hero to About
    gsap.to(heroShape.position, {
        scrollTrigger: {
            trigger: "#about",
            start: "top bottom", // when the top of #about hits the bottom of viewport
            end: "top center",   // when the top of #about hits the center of viewport
            scrub: 1,            // smooth scrubbing, takes 1 second to catch up to scrollbar
        },
        x: -2,  // Move the shape to the left to make room for content
        z: -2,  // Move it further back
    });

    gsap.to(heroShape.rotation, {
        scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        y: Math.PI * 2, // Spin it a full circle while scrolling
    });

    // 3. Animate the Glass Cards in Skills Section
    gsap.from(".glass", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%", 
            toggleActions: "play none none reverse" // Play on enter, reverse on leave
        },
        y: 50,
        opacity: 0,
        stagger: 0.2, // Animate them one after another
        duration: 0.8,
        ease: "power2.out"
    });
}

// ... existing animate() and event listeners ...


gsap.to(stars.material, {
    scrollTrigger: {
        trigger: "#skills",
        scrub: 2
    },
    size: 0.15, // Make stars larger and brighter as we get to the bottom
});
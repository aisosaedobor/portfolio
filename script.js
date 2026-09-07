// =============================================
// LENIS SMOOTH SCROLL
// =============================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// =============================================
// GSAP + SCROLLTRIGGER REVEAL ANIMATIONS
// =============================================
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.reveal').forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
            }
        }
    );
});

// =============================================
// MAGNETIC BUTTONS
// =============================================
document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
            x: x * 0.15,
            y: y * 0.15,
            duration: 0.4,
            ease: 'power2.out',
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)',
        });
    });
});

// =============================================
// CUSTOM CURSOR
// =============================================
const glow = document.getElementById('cursorGlow');
const dot = document.getElementById('cursorDot');

let mouseX = 0,
    mouseY = 0;
let glowX = 0,
    glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
}
animateGlow();

document.querySelectorAll('a, button, .comp-card, .about-card, .cert-card, .testimonial-card, .work-card, .tool-card').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        glow.classList.add('hover');
        dot.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        glow.classList.remove('hover');
        dot.classList.remove('hover');
    });
});

// =============================================
// TYPEWRITER EFFECT - "I create [operational clarity.]"
// =============================================
const typingElement = document.getElementById('typingText');

if (typingElement) {
    const phrases = [
        'operational clarity.',
        'efficient workflows.',
        'calendars that work.',
        'inboxes you trust.',
        'structure that sticks.'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
}

// =============================================
// STATS COUNTING ANIMATION
// =============================================
function animateStats() {
    const stats = [
        { id: 'stat1', target: 3, suffix: '+' },
        { id: 'stat2', target: 4, suffix: '+' },
        { id: 'stat3', target: 10, suffix: '%' },
    ];

    stats.forEach((stat) => {
        const el = document.getElementById(stat.id);
        if (!el) return;

        let current = 0;
        const duration = 1800;
        const steps = 60;
        const increment = stat.target / steps;
        const stepTime = duration / steps;

        const interval = setInterval(() => {
            current += increment;
            if (current >= stat.target) {
                current = stat.target;
                el.textContent = Math.floor(current) + stat.suffix;
                clearInterval(interval);
            } else {
                el.textContent = Math.floor(current) + stat.suffix;
            }
        }, stepTime);
    });
}

animateStats();

// =============================================
// WORK CAROUSEL
// =============================================
const workTrack = document.getElementById('workTrack');
const workPrev = document.getElementById('workPrev');
const workNext = document.getElementById('workNext');

let workAnimation = null;

function initWorkCarousel() {
    if (workAnimation) {
        gsap.killTweensOf(workTrack);
    }

    const cards = workTrack.querySelectorAll('.work-card');
    const totalWidth = workTrack.scrollWidth / 2;

    gsap.set(workTrack, { x: 0 });

    workAnimation = gsap.to(workTrack, {
        x: -totalWidth,
        duration: 40,
        ease: 'none',
        repeat: -1,
        modifiers: {
            x: (x) => {
                const parsed = parseFloat(x);
                if (parsed <= -totalWidth * 1.5) {
                    return '0px';
                }
                return x;
            }
        }
    });

    const wrapper = workTrack.closest('.work-carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            if (workAnimation) workAnimation.pause();
        });
        wrapper.addEventListener('mouseleave', () => {
            if (workAnimation) workAnimation.resume();
        });
    }
}

document.addEventListener('DOMContentLoaded', initWorkCarousel);

let workResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(workResizeTimeout);
    workResizeTimeout = setTimeout(() => {
        if (workAnimation) {
            gsap.killTweensOf(workTrack);
            initWorkCarousel();
        }
    }, 300);
});

if (workPrev) {
    workPrev.addEventListener('click', () => {
        const cardWidth = workTrack.querySelector('.work-card')?.offsetWidth || 0;
        const gap = 24;
        const slideWidth = cardWidth + gap;
        gsap.to(workTrack, {
            x: `+=${slideWidth}`,
            duration: 0.6,
            ease: 'power2.out',
            modifiers: {
                x: (x) => {
                    const parsed = parseFloat(x);
                    const totalWidth = workTrack.scrollWidth / 2;
                    if (parsed > 0) {
                        return `-${totalWidth}px`;
                    }
                    return x;
                }
            }
        });
        if (workAnimation) workAnimation.pause();
        setTimeout(() => {
            if (workAnimation) workAnimation.resume();
        }, 3000);
    });
}

if (workNext) {
    workNext.addEventListener('click', () => {
        const cardWidth = workTrack.querySelector('.work-card')?.offsetWidth || 0;
        const gap = 24;
        const slideWidth = cardWidth + gap;
        gsap.to(workTrack, {
            x: `-=${slideWidth}`,
            duration: 0.6,
            ease: 'power2.out',
            modifiers: {
                x: (x) => {
                    const parsed = parseFloat(x);
                    const totalWidth = workTrack.scrollWidth / 2;
                    if (parsed < -totalWidth * 1.5) {
                        return '0px';
                    }
                    return x;
                }
            }
        });
        if (workAnimation) workAnimation.pause();
        setTimeout(() => {
            if (workAnimation) workAnimation.resume();
        }, 3000);
    });
}

// =============================================
// TESTIMONIAL CAROUSEL
// =============================================
const track = document.getElementById('testimonialTrack');
const dotsContainer = document.getElementById('testimonialDots');
const prevBtn = document.getElementById('testimonialPrev');
const nextBtn = document.getElementById('testimonialNext');

let currentIndex = 0;
let totalSlides = 0;
let slidesPerView = 1;
let autoSlideInterval = null;
const autoSlideDelay = 4500;

function getSlidesPerView() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function updateCarousel() {
    slidesPerView = getSlidesPerView();
    const cards = track.querySelectorAll('.testimonial-card');
    totalSlides = cards.length;

    if (currentIndex > totalSlides - slidesPerView) {
        currentIndex = Math.max(0, totalSlides - slidesPerView);
    }

    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 24;
    const slideWidth = cardWidth + gap;
    const offset = currentIndex * slideWidth;

    gsap.to(track, {
        x: -offset,
        duration: 0.6,
        ease: 'power3.out',
    });

    const dots = dotsContainer.querySelectorAll('.dot');
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
}

function createDots() {
    const cards = track.querySelectorAll('.testimonial-card');
    totalSlides = cards.length;
    const totalDots = Math.ceil(totalSlides / getSlidesPerView());

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

function goToSlide(index) {
    const totalDots = Math.ceil(totalSlides / getSlidesPerView());
    if (index < 0) index = totalDots - 1;
    if (index >= totalDots) index = 0;
    currentIndex = index;
    updateCarousel();
}

function nextSlide() { goToSlide(currentIndex + 1); }

function prevSlide() { goToSlide(currentIndex - 1); }

function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
}

function resetAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
}

function initCarousel() {
    createDots();
    currentIndex = 0;
    updateCarousel();
    startAutoSlide();
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const newSlidesPerView = getSlidesPerView();
        if (newSlidesPerView !== slidesPerView) {
            createDots();
            currentIndex = 0;
            updateCarousel();
            resetAutoSlide();
        } else {
            updateCarousel();
        }
    }, 200);
});

if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});
if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

document.addEventListener('DOMContentLoaded', initCarousel);

// =============================================
// BACK TO TOP
// =============================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    lenis.scrollTo(0, { duration: 1.2, offset: 0 });
});

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =============================================
// MOBILE NAV TOGGLE
// =============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('show');
            }
        });
    });
}

// =============================================
// SMOOTH SCROLL FOR NAV LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                lenis.scrollTo(target, {
                    offset: -80,
                    duration: 1.2,
                });
            }
        }
    });
});

// =============================================
// CONTACT FORM
// =============================================
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btn = this.querySelector('.btn');
        const originalContent = btn.innerHTML;
        const formData = new FormData(this);

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        try {
            const response = await fetch('https://formspree.io/f/xdeolokr', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                btn.style.background = '#25D366';
                btn.style.color = '#fff';
                this.reset();

                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.disabled = false;
                }, 3000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
            btn.style.background = '#dc3545';
            btn.style.color = '#fff';

            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 3000);

            console.error('Form submission error:', error);
        }
    });
}

// =============================================
// CONSOLE
// =============================================
console.log('🟤 Aisosa Edobor · Executive Assistant');
console.log('✅ Features: Lenis, GSAP, Custom Cursor, Glassmorphism, Typewriter');
console.log('📊 Stats: 3+ Years Experience · 4+ Organizations · 10% Efficiency Gain');
console.log('🎨 Colors: Camel #C9A87C + Warm Gold #D4A54A + Deep Brown #4A3228');
console.log('📞 Contact: aisosacynthiaedobor@gmail.com | +234 903 757 9388');
console.log('🔗 LinkedIn: linkedin.com/in/aisosa-edobor');
console.log('📋 Services: Executive Support, Calendar Management, Project Management');
console.log('🔄 Work Samples: 9 tailored projects');
console.log('📝 Formspree: Connected & ready');
console.log('✨ Typewriter: "I create operational clarity."');
console.log('🛠️ Tools: 6 categories with 30+ tools listed');
console.log('💬 Testimonials: 12 real client reviews');
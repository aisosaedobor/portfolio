# Aisosa Edobor · Executive Assistant Portfolio

A professional portfolio website for **Aisosa Edobor**, an Executive Assistant and Virtual Support Specialist helping founders and executives stay organized, on schedule, and ahead of their inbox.

🌐 **Live Demo:** [aisosa-edobor.github.io/portfolio](https://aisosa-edobor.github.io/portfolio/)

---

## 📋 Overview

This is a fully responsive, modern portfolio website built with:

- **HTML5** — Semantic, accessible structure
- **CSS3** — Custom properties, glassmorphism, animations
- **JavaScript** — GSAP animations, Lenis smooth scroll, interactive effects
- **Font Awesome 6** — Icon library
- **Google Fonts** — Space Grotesk + Playfair Display

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Camel | `#C9A87C` | Hover states, accents |
| Warm Gold | `#D4A54A` | Primary buttons, highlights |
| Deep Brown | `#4A3228` | Headings, dark elements |
| Rich Brown | `#6B4F3F` | Secondary text |
| Gold Accent | `#E8C97A` | Decorations, borders |
| Soft Cream | `#FFFBF5` | Section backgrounds |
| Cream | `#FDF8F0` | Main background |
| Warm Gray | `#8B7B6E` | Body text, subtle elements |

### Typography

- **Headings:** `'Playfair Display', serif`
- **Body:** `'Space Grotesk', sans-serif`

---

## 📁 Project Structure
portfolio/
├── index.html # Main HTML file
├── style.css # Complete styles
├── script.js # All JavaScript
├── README.md # This file
└── assets/
├── aisosa.png # Hero/profile image
├── aisosa_resume.docx # Downloadable CV
├── og-image.png # Social share image
├── favicon-16x16.png # Favicon
├── favicon-32x32.png # Favicon
├── calender_mgt.png # Work sample
├── inbox_mgt.png # Work sample
├── client-trello.jpg # Work sample
├── client_onboarding.png # Work sample
├── meeting_agenda.png # Work sample
├── content-calendar.jpg # Work sample
├── client_tracker.png # Work sample
├── travel_coordination.png # Work sample
└── notion_client_portal.png # Work sample

text

---

## ✨ Features

### Core Features

- ✅ **Smooth Scrolling** — Powered by Lenis
- ✅ **Scroll Animations** — GSAP + ScrollTrigger reveals
- ✅ **Custom Cursor** — Glow and dot effects
- ✅ **Glassmorphism** — Frosted glass UI cards
- ✅ **Typewriter Effect** — Dynamic text animation
- ✅ **Magnetic Buttons** — Interactive hover effect
- ✅ **Responsive Design** — Mobile, tablet, desktop
- ✅ **Dark/Light Backgrounds** — Gradient hero with light sections
- ✅ **Work Carousel** — Infinite scrolling portfolio showcase
- ✅ **Testimonial Carousel** — Auto-sliding client reviews

### Sections

1. **Hero** — Name, title, typewriter effect, CTA buttons
2. **About** — Professional summary with 3 service cards
3. **Core Competencies** — 4 skill categories
4. **Experience** — Timeline of work history
5. **Certifications** — Professional credentials
6. **Tools** — 6 categories with 30+ tools
7. **Work Samples** — 9 project cards in carousel
8. **Testimonials** — 12 client reviews in carousel
9. **Contact** — Contact form + info
10. **Connect** — Social media links
11. **Footer** — Navigation + copyright

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure |
| **CSS3** | Styling, animations, responsive |
| **JavaScript (ES6)** | Interactivity |
| **GSAP** | Scroll animations |
| **ScrollTrigger** | Trigger animations on scroll |
| **Lenis** | Smooth scrolling |
| **Font Awesome** | Icons |
| **Google Fonts** | Typography |
| **Formspree** | Contact form backend |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| ≥ 992px | Desktop (3 columns) |
| 768px – 991px | Tablet (2 columns) |
| < 768px | Mobile (1 column) |

---

## 🚀 Setup Instructions

### 1. Clone or Download

```bash
git clone https://github.com/aisosa-edobor/portfolio.git
cd portfolio
2. Add Your Assets
Replace the placeholder images in the /assets/ folder with:

File	Description
aisosa.png	Your profile photo (recommended: 4:5 ratio)
og-image.png	Social share image (1200×630px)
favicon-16x16.png	16×16px favicon
favicon-32x32.png	32×32px favicon
aisosa_resume.docx	Your downloadable CV
3. Update Contact Information
Edit index.html and update:

html
<!-- Email -->
<a href="mailto:your-email@gmail.com">your-email@gmail.com</a>

<!-- Phone -->
<a href="tel:+1234567890">+123 456 7890</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>

<!-- Calendly -->
<a href="https://calendly.com/your-calendly-link">calendly.com/your-calendly-link</a>
4. Update Formspree Endpoint
Edit script.js and update the Formspree endpoint:

javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
5. Deploy to GitHub Pages
bash
git add .
git commit -m "Initial commit"
git push origin main
Then go to Settings → Pages and select the main branch.

🔧 Customization Guide
Change Colors
Edit the CSS variables in style.css:

css
:root {
    --camel: #C9A87C;
    --warm-gold: #D4A54A;
    --deep-brown: #4A3228;
    --rich-brown: #6B4F3F;
    --gold-accent: #E8C97A;
    --soft-cream: #FFFBF5;
    --cream: #FDF8F0;
    --warm-gray: #8B7B6E;
}
Change Typewriter Phrases
Edit script.js:

javascript
const phrases = [
    'operational clarity.',
    'efficient workflows.',
    'calendars that work.',
    'inboxes you trust.',
    'structure that sticks.'
];
Change Stats Numbers
Edit script.js:

javascript
const stats = [
    { id: 'stat1', target: 3, suffix: '+' },  // Years Experience
    { id: 'stat2', target: 4, suffix: '+' },  // Organizations
    { id: 'stat3', target: 10, suffix: '%' }, // Efficiency Gain
];
📝 Content Sections
Work Samples (9)
#	Title	Tag
1	Executive Support	Executive Support
2	Executive Inbox Management	Executive Support
3	Project Tracking	Project Management
4	Client Onboarding	Operations
5	Documentation & Reporting	Documentation
6	Content Documentation	Documentation
7	CRM Management	CRM
8	Travel Coordination	Travel Management
9	Notion Client Portal	Client Portal
Testimonials (12)
#	From	Role
1	Stevmart Integrated Services	Executive Leadership
2	Stevmart Integrated Services	Client
3	Amala Ibadan	Operations Team
4	Dubai Institute of People	Project Lead
5	NILDS	Supervisor
6	Omorodiuwa Non-Profit	Team Lead
7	University of Benin	Library Supervisor
8	ALX Africa	Program Facilitator
9	Corporate Events Ltd	Event Partner
10	Bid & Proposal Agency	Client
11	Project Management Office	Operations Lead
12	Sales & Marketing Agency	Director
🌐 Browser Support
Browser	Support
Chrome	✅ Latest
Firefox	✅ Latest
Safari	✅ Latest
Edge	✅ Latest
Opera	✅ Latest
📄 License
This project is for personal/portfolio use. All rights reserved.

📞 Contact
Email: aisosacynthiaedobor@gmail.com

Phone: +234 903 757 9388

LinkedIn: linkedin.com/in/aisosa-edobor

Calendly: calendly.com/aisosacynthiaedobor/15-minute-discovery-call

🙏 Credits
Design Inspiration: Modern glassmorphism + minimalist portfolio trends

Icons: Font Awesome 6

Fonts: Google Fonts (Space Grotesk + Playfair Display)

Animations: GSAP + ScrollTrigger

Smooth Scroll: Lenis

📌 To-Do / Future Improvements
□ Add dark mode toggle
□ Add blog section
□ Add project case studies
□ Add video testimonials
□ Add analytics tracking
□ Add SEO optimization
Built with ❤️ for Aisosa Edobor

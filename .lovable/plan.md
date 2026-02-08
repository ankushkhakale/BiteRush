

# 🍔 Food Delivery Web App — Frontend

A minimal, bold, and aesthetic food delivery website with Framer Motion animations and custom cursor effects.

## Design Direction
- **Dark & bold** color scheme with vibrant orange/red accents on a near-black background
- Clean typography with large headings and generous whitespace
- Smooth Framer Motion animations throughout (page transitions, scroll reveals, hover effects)
- Custom animated cursor that reacts to interactive elements (grows on hover, changes on clickable areas)

## Pages & Sections

### 1. Landing / Hero Page
- Full-screen hero with a bold tagline and animated food imagery
- Floating food illustrations with parallax-style motion
- "Order Now" CTA button with hover animation
- Scroll-triggered reveal for sections below

### 2. Featured Restaurants / Categories
- Horizontal scrollable category chips (Pizza, Sushi, Burgers, etc.)
- Restaurant cards with image, name, rating, and delivery time
- Staggered fade-in animation as cards enter viewport

### 3. Popular Dishes Section
- Grid of dish cards with image, name, price, and "Add to Cart" button
- Cards scale and lift on hover with subtle shadow animation

### 4. How It Works
- 3-step visual flow: Browse → Order → Enjoy
- Icons animate in sequence on scroll

### 5. Footer
- Minimal footer with links, social icons, and app download badges

## Interactions & Animations
- **Custom cursor**: A small dot cursor with a trailing circle that scales up when hovering interactive elements
- **Page load**: Staggered fade-in of hero elements
- **Scroll animations**: Elements reveal with slide-up and fade-in as they enter the viewport
- **Hover effects**: Cards lift with scale + shadow, buttons pulse subtly
- **Smooth transitions**: All route changes animate with page transitions

## Tech
- Framer Motion for all animations
- Custom cursor component overlaying the app
- Fully responsive (mobile, tablet, desktop)
- Static data (no backend needed) — all dishes/restaurants are hardcoded for now


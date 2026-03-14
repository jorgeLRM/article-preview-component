# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

This project challenged me to build a responsive article preview card component that works on both mobile and desktop screens. The main goals were:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
- Make it interactive with JavaScript

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- CSS media queries (responsive design)
- CSS custom properties (variables)
- Vanilla JavaScript (DOM manipulation)
- Mobile-first workflow


### What I learned

This project was my first real experience building a component that needed to be responsive AND interactive. Here are the biggest things I took away:

#### 1. **Flexbox Changes Everything**
I discovered that Flexbox makes layout SO much simpler than I expected. Instead of struggling with floats and positioning, I can now arrange elements intuitively:

```css
.card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
```

This one bit of CSS handles spacing between card elements beautifully. No more fighting with margins!

#### 2. **Media Queries Are Your Friend**
Understanding mobile-first workflow was eye-opening. I started with mobile styles, then used media queries to enhance for larger screens:

```css
@media (min-width: 768px) {
  .card {
    flex-direction: row;
    gap: 2rem;
  }
}
```

Now my component works on phone, tablet, and desktop without looking broken anywhere.

#### 3. **CSS Custom Properties Reduce Repetition**
Instead of writing the same color code over and over, I learned to use variables:

```css
:root {
  --color-dark: hsl(217, 19%, 35%);
  --color-gray: hsl(212, 23%, 69%);
}

.card__title {
  color: var(--color-dark);
}
```

This makes changing colors later SO much easier!

#### 4. **JavaScript Brings Components to Life**
When someone clicks the share button, the share options appear:

```js
const shareBtn = document.querySelector('.card__share-btn');
const shareMenu = document.querySelector('.card__share-menu');

shareBtn.addEventListener('click', () => {
  shareMenu.classList.toggle('active');
});
```

Seeing HTML elements actually respond to user clicks was honestly the coolest part of this project.

#### 5. **Semantic HTML Matters**
Using proper HTML tags like `<article>`, `<footer>`, and `<img alt="">` isn't just about following rules—it makes my code meaningful and accessible to screen readers.

**The biggest realization:** Frontend development is really about three friends working together—HTML gives structure, CSS makes it pretty, and JavaScript makes it interactive.

### Continued development

Areas I want to improve on in future projects:

- **Accessibility refinement**: I want to learn more about keyboard navigation and ARIA attributes. My share menu should be accessible to keyboard users, not just mouse users.
- **CSS transitions & animations**: Adding smooth transitions to my share button toggle would make it feel more polished. I'd like to practice with `transition` and `opacity` properties.
- **JavaScript optimization**: I want to learn about event delegation and how to handle edge cases (like closing the menu when clicking outside).
- **Testing**: Understanding how to test interactive components would help me catch bugs before deployment.
- **Performance**: Learning about lazy loading images and optimizing CSS for faster load times.

### Useful resources

- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - This finally made Flexbox click for me. The visual examples are incredibly helpful!
- [CSS Tricks Flexbox Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - A reference I bookmark constantly. Great for "wait, which property does what again?"
- [MDN DOM Manipulation](https://developer.mozilla.org/en-US/docs/Glossary/DOM) - Essential for understanding how JavaScript interacts with HTML.
- [Responsive Design Patterns](https://www.frontendmentor.io/learning-paths) - Frontend Mentor's learning paths actually break everything down beautifully for beginners.
- [Web.dev Responsive Design](https://web.dev/responsive-web-design-basics/) - Google's guide on mobile-first development is clear and practical.

### AI Collaboration

I used AI coding assistants (Claude/GitHub Copilot) while working through this project with a specific learning-focused approach in mind:

**How I used AI effectively:**
- **Asked for guidance, not solutions**: Instead of asking "write this for me," I asked "how would I approach this problem?" This forced me to actually write the code myself.
- **Debugging help**: When something didn't work, I'd share my code and ask "what might be wrong here?" rather than waiting for a fix. This taught me how to read error messages.
- **Concept explanations**: I'd ask "explain Flexbox like I'm new to CSS" and then experiment with the examples given. Much better than just copy-pasting.
- **Second pair of eyes**: Running my HTML/CSS through an AI check to catch accessibility issues I might have missed.

**What I learned about working with AI:**
- The AI works best when I'm specific about what I've tried and what I'm stuck on.
- Just copy-pasting solutions feels fast but doesn't actually teach me anything—struggling through problems is where learning happens.
- AI is great for explaining concepts and catching mistakes, but *I* need to write the code to truly understand it.

**Bottom line:** AI assistants are learning partners, not code generators. The best projects I'll build are ones where I do the thinking and let AI be my guide.

## Author

- Frontend Mentor - [@jorgeLRM](https://www.frontendmentor.io/profile/jorgeLRM)
- X - [@JorgeLrm99](https://x.com/JorgeLrm99)

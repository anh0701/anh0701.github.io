---
title: "My Portfolio Evolution: From Over-Engineering with Angular to Scaling with React"
date: "2026-05-06"
summary: "A portfolio is more than just a gallery of projects; it is a live record of a developer’s technical mindset and growth. Over time, my personal portfolio has undergone several transformations..."
tags: ["portfolio", "architecture"]
---


## Introduction

A portfolio is more than just a gallery of projects; it is a live record of a developer’s technical mindset and growth. Over time, my personal portfolio has undergone several transformations. Each version wasn't just a "rewrite," but a strategic shift in understanding how to choose the right tool for the job.

---

## Phase 1: The Angular Era (Learning the Fundamentals)

My first version was built using Angular. At the time, my primary goal was to master a robust framework and understand the architecture of Single Page Applications (SPA).

|  |  |  |
|--|--|--|
| ![home page](/images/v0.0.0/home.png) | ![home page](/images/v0.0.0/about-me-1.png) | ![home page](/images/v0.0.0/about-me-2.png) |
| ![home page](/images/v0.0.0/about-me-3.png) | ![home page](/images/v0.0.0/post-1.png) |  |


### Key Achievements:

- **Component-Based Architecture**: Learned how to break down UI into reusable blocks.

- **Two-way Data Binding**: Understood how to sync data between the logic and the view.

- **Routing**: Managed navigation within a single-page environment.

### The Challenges:

- **Overkill**: Angular’s powerful features (Dependency Injection, RxJS) were unnecessary for what was essentially a static site.

- **Performance**: Large bundle sizes led to slower initial load times.

- **Key Insight**: A powerful framework isn't always the best choice. Context matters.

## Phase 2: Back to Basics (Vanilla HTML/CSS/JS)

After realizing Version 1 was over-engineered, I stripped everything down to Vanilla JavaScript.

|  |  |  |
|--|--|--|
| ![home page](/images/v1.0.0/home-d.png) | ![home page](/images/v1.0.0/home-l.png) | ![home page](/images/v1.0.0/about-me.png) |
| ![home page](/images/v1.0.0/post.png) | ![home page](/images/v1.0.0/posts.png) | ![home page](/images/v1.0.0/da-ngon-ngu.png) |

### Improvements:

- **Blazing Fast Performance**: Significant reduction in load times and zero framework overhead.

- **Granular Control**: Total freedom over the UI without working around framework constraints.

- ***Features Added***: Implemented a Dark/Light mode toggle and basic i18n (English/Vietnamese) support.

### The Roadblock:

- **State Management Chaos**: As I added more features (theme, language, filtering), managing the state with pure JS became messy and prone to bugs.

- **Code Duplication**: Without a component system, maintaining HTML consistency across pages became difficult.

## Phase 3: Prioritizing UX (The 2-Column Design)

In this phase, I shifted my focus from technology to User Experience (UX) and Information Architecture.

![demo](/images/v2.0.0/image.png)

### Design Strategy:

- **Left Column (Sticky)**: Essential info (About, Skills, Contact).

- **Right Column (Scrollable)**: Project list and detailed content.

### Benefits:

- **Clear Hierarchy**: Separation between navigation and consumption.

- **Readability**: A cleaner interface optimized for long-form reading, paving the way for a blog.

- **Key Insight**: UI/UX is not just about aesthetics; it’s about organizing information logically.

## Phase 4: Scaling with React (The Balanced Solution)

For the latest version, I migrated to React and moved away from the 2-column layout in favor of a more fluid, single-column design.

|  |  |  |
|--|--|--|
| ![home](/images/v3.0.0/home-d.png) | ![home](/images/v3.0.0/home-l.png) | ![home](/images/v3.0.0/about-me-d.png) |
| ![home](/images/v3.0.0/about-me-l.png) | ![home](/images/v3.0.0/contact-d.png) | ![home](/images/v3.0.0/contact-l.png) |
| ![home](/images/v3.0.0/project-d.png) | ![home](/images/v3.0.0/project-l.png) | |

### Why React?

- **State Management**: Hooks (useState, useContext) made managing themes elegant.

- **Reusability**: Created a library of custom components (Buttons, Cards, Modals).

- **Scalability**: Easier to integrate dynamic content and external APIs.

### Why the Change?

- **Mobile-First Approach**: A single-column layout provides a more seamless experience across devices.

- **Focus on Content**: Removing the sidebar allowed the projects and technical writing to take center stage.

- **State Management**: Hooks (useState, useContext) made managing global states like theme and language elegant and predictable.

### The Result:

- A highly maintainable codebase that is modular, easy to debug, and ready to evolve into a full-scale personal blog.

## Engineering Principles Learned

### 1. Match Tech to the Problem

- **Angular**: Great for enterprise-level apps; too heavy for simple portfolios.

- **Vanilla JS**: Perfect for performance, but hard to maintain as logic grows.

- **React**: The "sweet spot" for flexibility and maintainability.

### 2. Performance is a Feature

Always monitor bundle sizes and optimize asset loading. A slow portfolio is a missed opportunity.

### 3. UX is Non-Negotiable

Features like Dark Mode and responsive layouts aren't "extras"—they are essential for modern web standards.

### 4. Evolutionary Design

UI/UX should evolve based on how content is consumed. Moving from 2 columns to a modern responsive layout reflects a User-First mindset.

---

## Future Roadmap

The journey doesn't end here. My next steps include:

- **Markdown Integration**: To streamline technical writing.

- **SEO Optimization**: Implementing Meta Tags and Structured Data.

- **Lazy Loading**: Optimizing images and heavy components for better Core Web Vitals.

## Conclusion

A portfolio is a "living" product. Each iteration reflects a step forward in my professional maturity—moving from "using technology" to "selecting the right technology."

**Writing code is one thing, but understanding why you chose a specific architecture is what defines an engineer.**

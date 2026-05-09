Create a **premium interactive scroll animation** for a modern game landing page using **React / Next.js + GSAP ScrollTrigger**.

### Core concept

The website showcases a **tile stacking game**.

As the user scrolls:

1. **Pinned fullscreen section**

* The section locks/pins to viewport.
* Background is dark, cinematic, premium.
* Camera slightly zoomed in.
* Ambient glow + subtle particles.
* Smooth 60fps.

2. **Tile stack sequence**

* One tile enters from above with slight rotation and bounce physics.
* It lands in center with satisfying snap.
* Second tile lands precisely on top.
* Third tile lands.
* Continue until 5–7 tiles stack.
* Each landing creates:

  * subtle screen shake
  * glow pulse
  * soft dust / particle burst
  * shadow compression
* Stack should feel physical and premium.

3. **Stack transformation**

* Final stack emits energy glow.
* Tiles smoothly morph/transition into a **payment card / checkout UI**.
* Transition should feel magical:

  * pieces separate
  * rotate in 3D
  * assemble into payment interface
* Add depth, reflections, motion blur.

4. **Payment sequence**

* Card slides in elegantly.
* Button pulse animation.
* Tap ripple effect.
* Processing spinner.
* Success check animation.
* Coins / gems / particles burst outward.
* Premium fintech + gaming feel.

5. **Scroll scrub**

* Animation is tied directly to scroll progress.
* Scroll down = progress forward.
* Scroll up = reverse smoothly.
* No autoplay.
* Perfect scrub syncing.
* Use GSAP timeline.

6. **Professional motion design**

* Apple-level polish.
* AAA game trailer quality.
* Smooth easing.
* Layered depth/parallax.
* Lighting animation.
* Cinematic composition.

### Technical requirements

* Use GSAP + ScrollTrigger
* pinned section
* scrub:true
* reusable React component
* clean code structure
* responsive desktop first
* optimized performance
* avoid video, build with DOM/canvas/svg
* use transforms, opacity, blur, scale, rotation
* support reverse animation on upward scroll

### Output

Generate production-quality code and animation logic.
